(ns frontend.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [reagent-forms.core :refer [bind-fields]]
            [reagent.session :as session]
            [ajax.core :refer [POST]])
  (:use [clojure.string :only [trim]])
  (:require-macros [secretary.core :refer [defroute]]))
  


;;Declaration of atoms
(def state (atom {:saved? false}))
(def encrypted-message (atom {:text ""}))
(def decrypted_message (atom {:text ""}))
(def passphrase (atom ""))
(def private_key (atom ""))
(def username (atom ""))
(def public-key (atom ""))
(def show-errors? (atom false))
(def user-login-error? (atom false))

;;Definition of HTML functions

(defn show-error-class [value]
    (if (= false @show-errors?) 
        false 
        (empty? (trim @value))
    )
  )
(defn row 
  "Return a html row"
  [label & body]
  [:div.row
   [:div.col-md-2 [:span label]]
   [:div.col-md-3 body]]) 

(defn text-input
  "This function returns a complete text input field." 
  [id label]
  (row label [:input.form-control {:field :text :id id :required true}]))

(defn atom-text-input 
  "This function returns a complete text input field, using an atom value" 
  [id label value]
  (row label [:input.form-control {:field :text
                                   :required true
                                   :id id 
                                   :value @value
                                   :on-change #(reset! value (-> % .-target .-value))}]
             [:span.error {:class (when-not (show-error-class value) "hide")} "This field is required"]))

(defn text-area 
  "This function returns a complete textarea field." 
  [id label]
  (row label [:textarea.form-control {:field :text :id id}]))

(defn atom-text-area 
"This function returns a complete textarea field, using an atom value" 
  [id label value]
  (row label [:textarea.form-control {:field :text 
                                      :id id :value @value 
                                      :on-change #(reset! value (-> % .-target .-value))}]
            [:span.error {:class (when-not (show-error-class value) "hide")} "This field is required"]))
(def form
  [:div
   [:div.page-header [:h2 "Signup form: Step 1"]]
   [:p "Please enter your username or e-mail and your public key."]
   [atom-text-input :username "Username" username]
   [atom-text-area :public_key "Public key (*)" public-key]
   [:p "(*) If you don't have a public key, you can generate one " [:a {:href "http://www.igolder.com/pgp/generate-key/" :target "_blank"} "here"]]])

(def form-login
  [:div
   [:div.page-header [:h2 "Login form: Step 1"]]
   [:p "Please enter your username or e-mail"]
   [atom-text-input :username "Username" username]])

(defn save-doc [doc]
  (fn []
    (reset! show-errors? true)  
    (if-not (or (empty? (trim @username)) (empty? (trim @public-key)) )
      (POST (str js/context "/save")
          {:params {:doc {:username @username :public_key @public-key}}
           :handler (fn [response] 
                        (swap! encrypted-message assoc :text response)
                        (if-not (= "user-exists" (:text @encrypted-message))
                            (do
                              (swap! state assoc :saved? true)
                              (reset! show-errors? false))
                              (js/alert "Sorry. A user with that username already exists.")))}))))

(defn login-doc [doc]
  (fn []    
    (reset! show-errors? true)  
    (if-not (empty? (trim @username))
      (POST (str js/context "/login")
          {:params {:doc {:username @username} }
           :handler (fn [response] 
                        (swap! encrypted-message assoc :text response)
                        (if-not (= "user-not-exists" (:text @encrypted-message))
                            (do
                              (reset! show-errors? false)
                              (swap! state assoc :saved? true))
                            
                            (js/alert "Sorry. The user with that username not exists.")))}))))

(defn about 
  "About Section"
  []
  [:div [:h2 "Walking Skeleton's User Story:"]
          [:p "As a final user I want to create an account with a PGP public key that I already possess so when the account is created the Welcome page is decrypted in the client side."]
          [:p "All the backend code must be in Clojure and it should use the Tesla microservices architecture from Otto."]
          [:p "All the Javascript code must be generated from ClojureScript"]
          [:p "Use OpenPGPjs, particularly the minified build."]
          [:p "The frontend must use React with Reagent following a Flux [or Reflux] architecture."]
          [:p "Please consider using the Material implementation in React"]
          [:p "It should be a Responsive Design, mobile first."]
          [:p "Bonus: Install a second server with peerjs-server so two users provided by the Tesla microservice can say hello to each other via peerjs in a PGP encrypted way."]
          [:p "Bonus: Find a way to send a Pushover notification to an iPhone/Android when the account is created."]])

(defn welcome-page-component 
  "Show the welcome page"
  []
  [:div 
    [:div.page-header [:h2 "Welcome page"]]
    [:p "Congratulations! This is your welcome page:"]
    [:p [:strong (:text @decrypted_message)]]])

(defn decrypt-welcome-page 
  "Decrypt the welcome page with OpenPGP.js"
  [doc]
  (fn []
    (reset! show-errors? true)
    (if-not (or (empty? (trim @private_key)) (empty? (trim @passphrase)))
      (do
        (def dec_msg (js/decrypt_message @private_key @passphrase (:text @encrypted-message)))
        (if-not (empty? dec_msg)
          (do 
            (
              (swap! decrypted_message assoc :text dec_msg)
              (swap! state assoc :page welcome-page-component)
              (session/put! :logged true))))))))
      

(defn welcome-page-form-component [doc]
  [:div 
    [:div.alert.alert-danger.hide {:id "keyerror"} "Error"]
    [atom-text-input :passphrase "Passphrase" passphrase]
    [atom-text-area :private_key "Private key" private_key]
    [:button  { :type "button"
                 :class "btn btn-default"
                 :onClick (decrypt-welcome-page doc)
                }
        "Show my welcome page!"]])

(defn home 
  "Draw the home component"
  []
  (let [doc (atom {})]
    (fn []
      (if (:saved? @state)
        ;Welcome page form
        [:div
         [:div.page-header [:h2 "Signup form: Step 2"]]
         [:p "To finish the signup and view your welcome page, please enter your private key and passphrase:"]
         [welcome-page-form-component doc]]
        ;Signup page form
        [:div
          [bind-fields form doc
            (fn [_ _ _] (swap! state assoc :saved? false) nil)]
          [:button  {:type "submit"
                     :class "btn btn-default"
                     :onClick (save-doc doc)}
            "Submit"]
          [:p "Already have an account? " [:a {:on-click #(secretary/dispatch! "#/login")} "Log in"]]]))))

(defn login 
  "Draw the login component"
  []
  (let [doc (atom {})]
    (fn []
      (if (:saved? @state)
        ;Welcome page form
        [:div
         [:div.page-header [:h2 "Login form: Step 2"]]
         [:p "Please enter your private key and passphrase:"]
         [welcome-page-form-component doc]]
        ;Login page form
        [:div
          [bind-fields form-login doc
            (fn [_ _ _] (swap! state assoc :saved? false) nil)]
          [:button  {:type "submit"
                     :class "btn btn-default"
                     :onClick (login-doc doc)}
            "Submit"]]))))
(defn logout []
    (if (js/confirm "Are you sure?")
        (do
          ((session/put! :logged false)
           (secretary/dispatch! "#/")))))

(defn navbar 
  "Draw the nav bar component"
  []
  [:div.navbar.navbar-inverse.navbar-fixed-top
   [:div.container
    [:div.navbar-header
      [:button  { :type "button"
                  :class "navbar-toggle collapsed"
                  :data-target ".navbar-collapse"
                  :data-toggle "collapse"
                }
            [:span.sr-only "Toggle navigation"]
            [:span.icon-bar]
            [:span.icon-bar]
            [:span.icon-bar]
      ]
    ]
    [:div.navbar-collapse.collapse
     [:ul.nav.navbar-nav
      [:li {:class (str 
                      (when (= welcome-page-component (:page @state)) "active") 
                      (when-not (session/get :logged) " hide"))
            :data-target ".navbar-collapse" 
            :data-toggle "collapse"}
        [:a {:on-click #(secretary/dispatch! "#/welcome-page")} "Home"]]

      [:li {:class (when-not (session/get :logged) "hide")}
        [:a {:on-click #(logout)} "Log out"]]

      [:li {:class (str 
                      (when (= home (:page @state)) "active") 
                      (when (session/get :logged) " hide"))
            :data-target ".navbar-collapse" 
            :data-toggle "collapse"}
       [:a {:on-click #(secretary/dispatch! "#/")} "Home"]]

      [:li {:class (str 
                      (when (= login (:page @state)) "active") 
                      (when (session/get :logged) " hide"))
            :data-target ".navbar-collapse" 
            :data-toggle "collapse"}
       [:a {:on-click #(secretary/dispatch! "#/login")} "Log in"]] 

      [:li {:class (when (= about (:page @state)) "active") 
            :data-target ".navbar-collapse" 
            :data-toggle "collapse"}
       [:a {:on-click #(secretary/dispatch! "#/about")} "About"]]]]]])

(defn page []
  [(:page @state)])

(secretary/set-config! :prefix "#")

(defn reset-atoms [section]
    (reset! passphrase  "")
    (reset! private_key "")
    (reset! username "")
    (reset! public-key "")
    (reset! show-errors? false)
    (swap! state assoc :saved? false)
    (swap! state assoc :page section))

(defroute "/" []
          (reset-atoms home))
(defroute "/login" [] 
          (reset-atoms login))
(defroute "/about" [] (swap! state assoc :page about))
(defroute "/welcome-page" [] (swap! state assoc :page welcome-page-component))


(defn init! []
  (swap! state assoc :page home)
  ;(.initializeTouchEvents js/React true)
  (reagent/render-component [navbar] (.getElementById js/document "navbar"))
  (reagent/render-component [page] (.getElementById js/document "app")))


