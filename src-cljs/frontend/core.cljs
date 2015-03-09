(ns frontend.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary]
            [reagent-forms.core :refer [bind-fields]]
            [ajax.core :refer [POST]])
  (:require-macros [secretary.core :refer [defroute]]))
  


;;Declaration of atoms
(def state (atom {:saved? false}))
(def encrypted-message (atom {:text ""}))
(def decrypted_message (atom {:text ""}))
(def passphrase (atom ""))
(def private_key (atom ""))


;;Definition of HTML functions
(defn row [label & body]
  [:div.row
   [:div.col-md-2 [:span label]]
   [:div.col-md-3 body]]) 



(defn text-input [id label]
  (row label [:input.form-control {:field :text :id id}]))

(defn atom-text-input [id label value]
  (row label [:input {:field :text
                      :id id 
                      :value @value
                      :on-change #(reset! value (-> % .-target .-value))}]))

(defn text-area [id label]
  (row label [:textarea.form-control {:field :text :id id}]))

(defn atom-text-area [id label value]
  (row label [:textarea.form-control {:field :text 
                                      :id id :value @value 
                                      :on-change #(reset! value (-> % .-target .-value))}]))

;;Signup form definition
(def form
  [:div
   [:div.page-header [:h2 "Signup form: Step 1"]]
   [:p "Please enter your username or e-mail and your public key."]
   (text-input :username "Username")
   (text-area :public_key "Public key (*)")
   [:p "(*) If you don't have a public key, you can generate one " [:a {:href "https://www.igolder.com/pgp/generate-key/" :target "_blank"} "here"]]])

(defn save-doc [doc]
  (fn []
    (POST (str js/context "/save")
          {:params {:doc @doc}
           :handler (fn [response] 
                        (swap! encrypted-message assoc :text response)
                        (swap! state assoc :saved? true))})))


(defn about 
  "About Section"
  []
  [:div [:p "Walking Skeleton's User Story:"]
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
    [:div.page-header [:h2 "Signup form: Step 3"]]
    [:p "Congratularions! This is your welcome page:"]
    [:p [:strong (:text @decrypted_message)]]
  ])

(defn decrypt-welcome-page 
  "Decrypt the welcome page with OpenPGP.js"
  [doc]
  (fn []
    (def dec_msg (js/decrypt_message @private_key @passphrase (:text @encrypted-message)))
    (if-not (empty? dec_msg)
      (do 
        (
          (swap! decrypted_message assoc :text dec_msg)
          (swap! state assoc :page welcome-page-component))
        )  
    )
  )
)

(defn home []
  (let [doc (atom {})]
    (fn []
      (if (:saved? @state)
        ;Welcome page form
        [:div
         [:div.page-header [:h2 "Signup form: Step 2"]]
         [:p "To finish the signup and view your welcome page, please enter your private key and passphrase:"]
         [:div.alert.alert-danger.hide {:id "keyerror"} "Error"]
         [atom-text-input :passphrase "Passphrase" passphrase]
         [atom-text-area :private_key "Private key" private_key]
         [:button  { :type "button"
                     :class "btn btn-default"
                     :onClick (decrypt-welcome-page doc)
                    }
            "Show my welcome page!"
          ]
        ]
        ;Signup page form
        [:div
          [bind-fields form doc
            (fn [_ _ _] (swap! state assoc :saved? false) nil)
          ]
          [:button  {:type "submit"
                     :class "btn btn-default"
                     :onClick (save-doc doc)
                    }
            "Submit"
          ]
        ]
      )
    )
  )
)

(defn navbar []
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
      [:li {:class (when (= home (:page @state)) "active")}
       [:a {:on-click #(secretary/dispatch! "#/")} "Signup User account"]]
      [:li {:class (when (= about (:page @state)) "active")}
       [:a {:on-click #(secretary/dispatch! "#/about")} "About"]]]]]])

(defn page []
  [(:page @state)])

(secretary/set-config! :prefix "#")

(defroute "/" []
          (reset! passphrase  "")
          (reset! private_key "")
          (swap! state assoc :saved? false)
          (swap! state assoc :page home))
(defroute "/about" [] (swap! state assoc :page about))

(defn init! []
  (swap! state assoc :page home)
  ;(.initializeTouchEvents js/React true)
  (reagent/render-component [navbar] (.getElementById js/document "navbar"))
  (reagent/render-component [page] (.getElementById js/document "app")))


