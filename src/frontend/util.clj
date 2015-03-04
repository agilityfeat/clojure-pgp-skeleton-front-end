(ns frontend.util
  (:require [noir.io :as io]
            [markdown.core :as md]
            [clj-http.client :as client]))

(defn md->html
  "reads a markdown file from public/md and returns an HTML string"
  [filename]
  (md/md-to-html-string (io/slurp-resource filename)))
