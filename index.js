const path = require("path");

const NAME = "docusaurus-theme-hayfork";

module.exports = function hayforkTheme(context, options) {
  if (!options || !options.key || !options.collection) {
    throw new Error(`[${NAME}] Set both "key" (a website key) and "collection" (the collection id) in the theme options.`);
  }
  return {
    name: NAME,
    // Docusaurus renders theme/SearchBar in the navbar; providing it here replaces the default.
    getThemePath() {
      return path.resolve(__dirname, "src/theme");
    },
    async contentLoaded({ actions }) {
      actions.setGlobalData({
        key: options.key,
        collection: options.collection,
        placeholder: options.placeholder || "Search",
        theme: options.theme || "auto",
        results: options.results || 8,
        shortcut: options.shortcut !== false,
        scriptUrl: options.scriptUrl || "https://hayfork.dev/widget.js",
      });
    },
  };
};
