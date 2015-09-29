#!/usr/bin/env node
'use strict';
var fs = require('fs');
var JSONStream = require('JSONStream');
var es = require('event-stream');

fs.createReadStream('datatheme.json')
    .pipe(JSONStream.parse())
    .pipe(es.map(function (theme, callback) {
        var resources = theme.resources.map(function (r) {
            r.schema = JSON.parse(fs.readFileSync(r.schema, 'utf8'));
            return r;
        });
        delete theme.resources;
        var datapackage = {
            name: 'mackenzie-sonde-dataset',
            theme: theme,
            resources: resources
        };
        callback(null, JSON.stringify(datapackage));
    }))
    .pipe(process.stdout);