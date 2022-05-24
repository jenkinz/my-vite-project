# Vue 3 + Vite (+ Tailwind CSS)

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Project Setup

**References:**

- https://tailwindcss.com/docs/guides/vite
- https://levelup.gitconnected.com/vue-3-composition-with-vite-and-tailwind-css-221358b4d7b5
- https://github.com/vitejs/vite/discussions/4065#discussioncomment-1359932

**Prerequisites:** Install `node.js` (`brew install node`)

1.  To setup this project from a clean slate, run the following. If you cloned this project, skip to step 2.

        $ npm init vite my-vite-project

    - Select `vue` as the framework
    - Select variant `vue`

2.  Install dependencies:

        $ npm install

3.  Run the development server:

        $ npm run dev

    - Visit http://localhost:3000 to test it out

4.  Install Tailwind CSS:

        $ npm install --save-dev tailwindcss postcss autoprefixer
        $ npx tailwindcss init --postcss

5.  Install other plugins for development:

        $ npm install --save-dev eslint eslint-plugin-vue
        $ npm install --save-dev eslint-config-prettier
        $ npm install --save-dev eslint-plugin-prettier
        $ npm install --save-dev --save-exact prettier
        $ npm install --save-dev prettier-plugin-tailwindcss

6.  To debug from VS Code using Google Chrome:

    - Run `npm run dev` as usual
    - Open Run and Debug (Cmd+Shift+D) and click "Launch Chrome"
    - Set some breakpoints in `.vue` files and reload Chrome to hit

7.  Activate `pre-commit`:

        $ pre-commit install
