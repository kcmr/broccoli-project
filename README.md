# Bundle web components made with LitElement using Rollup, Babel and Broccoli

⚠️ This is an experimental project for learning purposes.

## Challenges

- [x] Generate a bundle that can be consumed by legacy browsers.
- [x] Include in the bundle the required transpiled dependencies (node_modules).
- [x] Minify the output.
- [x] Include sourcemaps.
- [ ] Generate two bundles for legacy and modern browsers and use `<script type="module">` and `<script nomodule>`.
- [ ] Allow to import `.css` files in components.
- [ ] Support dynamic imports.
- [ ] Use env variables to serve or build with Broccoli to avoid using BrowserSync when building.

## Resources and inspiration

- [Eat Your Greens - A Broccoli.js Tutorial](https://www.oligriffiths.com/2018/04/27/eat-your-greens-broccolijs-tutorial/)
- [Polymer 3 WebPack Starter](https://github.com/web-padawan/polymer3-webpack-starter)
- [LitElement with Rollup, Babel and Karma](https://43081j.com/2018/09/polymer-lit-with-rollup)
- [Open WC - building-rollup package - modern-and-legacy-config.js](https://github.com/open-wc/open-wc/blob/master/packages/building-rollup/modern-and-legacy-config.js)
- [rollup-plugin-inline-lit-element](https://www.npmjs.com/package/rollup-plugin-inline-lit-element)
- [rollup-plugin-lit-css](https://www.npmjs.com/package/rollup-plugin-lit-css)
- [Lit Components](https://github.com/web-padawan/lit-components)
- [Aybolit - UI components made with LitElement](https://github.com/web-padawan/aybolit)
