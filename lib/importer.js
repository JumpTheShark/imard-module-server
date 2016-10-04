const markdown = require("markdown-it");

const Importer = function (path) {
    let metaJson = null,
        readmeRaw = null,
        contentRaw = null;

    try {
        metaJson = require(`${path}/module.json`);
    } catch (e) {
        console.log(e);
    }

    return {
        getMeta: () => metaJson,
        getReadme: () => {},
        getContent: () => {}
    }
}

module.exports = Importer;