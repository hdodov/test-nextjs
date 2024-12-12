#!/bin/bash

paths=("es" "fr" "de")

function request {
  path=$1
  lang=$(curl -s "http://localhost:3000/$path" | sed -n 's/.*<html[^>]*lang="\([^"]*\)".*/\1/p')
  if [ -n "$lang" ]; then
    echo "Requested: $path, lang attribute: $lang"
  else
    echo "Requested: $path, lang attribute not found"
  fi
}

while true; do
  for path in "${paths[@]}"; do
    request "$path" &
    sleep 0.1
  done
done
