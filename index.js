#!/usr/bin/env node

'use strict';
var fs = require('fs');
var JSONStream = require('JSONStream');
var es = require('event-stream');
var _ = require('lodash');

var datatheme = fs.createReadStream('datatheme.json');

var tables = [
    'sonde_data',
    'sonde_meta'
];

datatheme
    .pipe(JSONStream.parse())
    .pipe(es.map(function (dp, cb) {
        dp.resources = tables.map(function(t) {
            return _.find(dp.resources, {name: t});
        });
        cb(JSON.stringify(dp));
    }))
    .pipe(process.stdout);