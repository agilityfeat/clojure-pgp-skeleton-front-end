
(ns frontend.server
	(:require [ring.adapter.jetty :as ring])
  (:gen-class))	
 
 (defn -main [& args]
   (let [port (Integer/parseInt (or (System/getenv "PORT") "8080"))]
     (ring/run-jetty #'app {:port port :join? false})))