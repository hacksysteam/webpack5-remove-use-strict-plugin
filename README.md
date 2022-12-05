# webpack5-remove-use-strict-plugin for Webpack 5

[![npm version](https://badge.fury.io/js/webpack5-remove-use-strict-plugin.svg)](https://badge.fury.io/js/webpack5-remove-use-strict-plugin)

Webpack 5 plugin to remove "use strict" from the generated code.

## Installation

This plugin requires **Webpack 5**.

Install the plugin with **NPM** and add it to your `devDependencies`:

`npm install --save-dev webpack5-remove-use-strict-plugin`

## Usage

```js
var Webpack5RemoveUseStrictPlugin = require("webpack5-remove-use-strict-plugin");

// ...

// webpack plugins array
plugins: [
    new Webpack5RemoveUseStrictPlugin()
]
```
