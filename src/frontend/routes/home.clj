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

;This function sends all the form fields values to the User's microservice.
;@TODO:
;- Recieve the Welcome Page, and decrypt the message in client-side 
(defn save-document [doc]
      (def signup_response
          (json/read-str (:body (client/post (env :ms-user-url) {:form-params (:doc doc)} :content-type :json))))
      signup_response)

(defroutes home-routes
  (GET "/" [] (home-page))
  (POST "/save" {:keys [body-params]}
    (edn (save-document body-params))))
