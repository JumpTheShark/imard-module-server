#! /usr/bin/env node

const forever = require('forever-monitor'),
    dirs = {
        script: `${__dirname}/www.js`,
        watch: `${process.cwd()}/`
    },
    server = new (forever.Monitor)(dirs.script, {
        max: 1,
        silent: true,
        watch: true,               // Value indicating if we should watch files.
        watchIgnoreDotFiles: true, // Whether to ignore file starting with a '.'
        watchDirectory: dirs.watch,      // Top-level directory to watch from.
        args: []
    });

server.on('exit', function (e) {
    console.log(e);
});

server.start();





