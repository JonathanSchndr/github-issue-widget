> Currently work in progress! Please do not use productively.

# GitHub Issue Widget

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> GitHub Issue Widget for your Website

- [✨ &nbsp;Release Notes](https://github.com/JonathanSchndr/github-issue-widget/releases)
- [🔴 Demo](https://codesandbox.io/s/example-github-issue-widget-7khslb)

## Features

GitHub Issue Widget bring your issue tracking to your website.

- [GitHub's form schema](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)
- [Primer CSS](https://primer.style/) support
- TypeScript Support


## Setup

```sh
yarn add github-issue-widget # yarn
npm i github-issue-widget # npm
```

1. Create your own GitHub OAuth App (https://github.com/settings/developers)
   1. Application name: name of the website
   2. Homepage URL: url of the page in which the widget was integrated
   3. Authorization callback URL: url of the page in which the widget was integrated
2. Generate a new client secret
3. Copy client id and client secret

## Basic usage

```html

```

```javascript

```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Change vite.confg.js to `mode:'development'` / `minify:false` / `sourcemap:true`
4. Start development server using `yarn dev && yarn build:watch` or `npm run dev && npm run build:watch`

## License

Copyright (c) 2022 Jonathan Schneider
[MIT License](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/github-issue-widget/latest.svg
[npm-version-href]: https://npmjs.com/package/github-issue-widget
[npm-downloads-src]: https://img.shields.io/npm/dt/github-issue-widget.svg
[npm-downloads-href]: https://npmjs.com/package/github-issue-widget
[license-src]: https://img.shields.io/npm/l/github-issue-widget.svg
[license-href]: https://npmjs.com/package/github-issue-widget
