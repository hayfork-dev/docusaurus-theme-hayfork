# docusaurus-theme-hayfork

[Hayfork](https://hayfork.dev) search for Docusaurus. Adds a search box to your navbar that searches your Hayfork collection, with results that link straight to the right page and section. It is a drop-in replacement for Algolia DocSearch, with no application and no crawler config to maintain.

- Hybrid keyword and semantic search, so visitors find the page even when they don't use your exact words.
- Opens with ⌘K, Ctrl K or `/`, with arrow keys and Enter to move through results.
- Draws inside a shadow root, so your site's CSS is untouched.
- No cookies, and nothing stored in the visitor's browser.

## Setup

1. [Sign up for Hayfork](https://app.hayfork.dev/signup) (free plan, no card) and add your docs site as a website source. Hayfork crawls it, reading `llms.txt` and Markdown pages where you have them.
2. Create a collection that searches that source, and a website key for it. A website key can only search, only that collection, and only from the sites you list. See [Create a website key](https://hayfork.dev/docs/widget/#website-key).
3. Install the theme:

   ```bash
   npm install docusaurus-theme-hayfork
   ```

4. Add it to `docusaurus.config.js`:

   ```js
   export default {
     themes: [
       [
         "docusaurus-theme-hayfork",
         {
           key: "YOUR_WEBSITE_KEY",
           collection: "COLLECTION_ID",
         },
       ],
     ],
   };
   ```

If you already use `@docusaurus/theme-search-algolia` or another search theme, remove it, because only one theme can provide the search bar.

The search box appears where Docusaurus puts search, at the right of the navbar. To place it elsewhere, add `{ type: "search", position: "left" }` to `themeConfig.navbar.items`.

## Options

| Option | Default | Notes |
|--------|---------|-------|
| `key` | required | A website key. It is visible in your page source, which is what website keys are for. |
| `collection` | required | The collection id to search. It must be one of the key's collections. |
| `placeholder` | `Search` | Text in the search box and the dialog. |
| `theme` | `auto` | `light`, `dark`, or `auto` to follow the visitor's system setting. |
| `results` | `8` | Results to show, 1 to 20. |
| `shortcut` | `true` | `false` turns off the ⌘K, Ctrl K and `/` shortcuts. |

Add `http://localhost:3000` to the key's websites while you build, and create a production key without it before you deploy.

## Troubleshooting

See [Troubleshooting](https://hayfork.dev/docs/widget/#troubleshooting) in the widget docs. The message "This search box is not set up for this website" means the page's exact address, with `https://` and any `www.`, is missing from the key's websites.

## License

MIT
