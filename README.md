# webpack5-remove-use-strict-plugin for Webpack 5

![npm version](https://img.shields.io/npm/v/webpack5-remove-use-strict-plugin)
![npm downloads](https://img.shields.io/npm/dt/webpack5-remove-use-strict-plugin)

Webpack 5 plugin to remove `"use strict"` from the generated code.

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
