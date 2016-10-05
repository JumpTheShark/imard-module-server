#! /usr/bin/env node

// const nodemon = require('nodemon');
//
// nodemon({
//     script: `${__dirname}/www.js`,
//     watch: `${process.cwd()}/`
// });
//
// console.log(process.cwd());
// nodemon.on('start', () => {
//     console.log("app has started");
// });
//
// nodemon.on('change', (data) => {
//     console.log(data);
// });

const forever = require('forever-monitor'),
    watch = require('watch'),
    dirs = {
        script: `${__dirname}/www.js`,
        watch: `${process.cwd()}/`
    };

let child = new (forever.Monitor)(dirs.script, {
    max: 1,
    silent: true,
    watch: true,               // Value indicating if we should watch files.
    watchIgnoreDotFiles: true, // Whether to ignore file starting with a '.'
    watchDirectory: dirs.watch,      // Top-level directory to watch from.
    args: []
});

child.on('exit', function (e) {
    console.log(e);
});

child.start();

// watch.watchTree(dirs.watch, (f, curr, prev) => {
//     if (typeof f == "object" && prev === null && curr === null) {
//         // Finished walking the tree
//     } else if (prev === null) {
//         // f is a new file
//     } else if (curr.nlink === 0) {
//         // f was removed
//     } else {
//         console.log(`File changed:\n ${f}\nRestarting server`);
//         child.restart();
//     }
// });

