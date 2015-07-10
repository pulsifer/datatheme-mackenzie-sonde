#!/usr/bin/env bash

echo '{"name": "mackenzie-sonde-dataset",'
echo '"datatheme": { "name": "mackenzie.sonde", "version": "1.0.1", "repository": "https://github.com/tesera/datatheme-mackenzie-sonde.git"},'
echo '"resources": ['
    cat ./schemas/sonde_data.json
    echo ,
    cat ./schemas/sonde_meta.json
echo ']}'