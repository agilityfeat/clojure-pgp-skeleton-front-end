(ns frontend.routes.home
            (:require [frontend.layout :as layout]
                      [frontend.util :as util]
                      [compojure.core :refer :all]
                      [noir.response :refer [edn]]
                      [clojure.pprint :refer [pprint]]
                      [clj-http.client :as client]
                      [environ.core :refer [env]]
                      [clojure.data.json :as json]))

(defn home-page []
      (layout/render
        "app.html" {:docs (util/md->html "/md/docs.md")}))

;This function sends all the form fields values to the User's microservice to signup an user.
(defn save-document [doc]
      (def signup_response
          (json/read-str (:body (client/post (env :ms-user-url) {:form-params (:doc doc)} :content-type :json))))
      signup_response)

;This function sends all the form fields values to the User's microservice to login an user.
(defn login-document [doc]
      (def login_response
          (json/read-str (:body (client/post (env :ms-user-login-url) {:form-params (:doc doc)} :content-type :json))))
      login_response)

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (home-page))
  (POST "/save" {:keys [body-params]}
    (edn (save-document body-params)))
  (POST "/login" {:keys [body-params]}
    (edn (login-document body-params))))
