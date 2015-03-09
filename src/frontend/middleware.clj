(ns frontend.middleware
  (:require [taoensso.timbre :as timbre]
            [selmer.parser :as parser]
            [environ.core :refer [env]]
            [ring.middleware.gzip :refer [wrap-gzip]]
            [selmer.middleware :refer [wrap-error-page]]
            [prone.middleware :refer [wrap-exceptions]]
            [noir-exception.core :refer [wrap-internal-error]]))

(defn log-request [handler]
  (fn [req]
    (timbre/debug req)
    (handler req)))

(def development-middleware
  [wrap-error-page
   wrap-exceptions
   wrap-gzip])

(def production-middleware
  [#(wrap-internal-error % :log (fn [e] (timbre/error e)))
   wrap-gzip])

(defn load-middleware []
  (concat (when (env :dev) development-middleware)
          production-middleware))
