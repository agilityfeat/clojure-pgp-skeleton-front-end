
(ns frontend.server
	(:require 
				[ring.adapter.jetty :as ring]
				[frontend.handler :as handler])
  (:gen-class))	
 
 (defn -main [& args]
   (let [port (Integer/parseInt (or (System/getenv "PORT") "8080"))]
     (ring/run-jetty handler/app {:port port :join? false})))