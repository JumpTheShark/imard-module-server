const markdown = require("markdown-it"),
    fs = require("fs");

const Importer = function (path) {
    const md = new markdown();

    let metaJson = null,
        readmeRaw = "",
        contentRaw = "",
        readme = "",
        content = "";

    // Loading module meta
    try {
        metaJson = require(`${path}/module.json`);
    } catch (e) {
        console.log(e);
    }

    // Loading module data
    try {
        contentRaw = fs.readFileSync(`${path}/module.md`, 'utf8')
    } catch (e) {
        console.log(e)
    }

    // Loading module readme
    try {
        readmeRaw = fs.readFileSync(`${path}/README.md`, 'utf8')
    } catch (e) {
        console.log(e)
    }

    content = md.render(contentRaw);
    readme = md.render(readmeRaw);

    return {
        getMeta: () => metaJson,
        getReadme: () => readme,
        getContent: () => content
    }
}

module.exports = Importer;