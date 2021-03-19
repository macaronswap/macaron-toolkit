# 🥞 Macaron UIkit

[![Version](https://img.shields.io/npm/v/@macaronswap-libs/uikit)](https://www.npmjs.com/package/@macaronswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@macaronswap-libs/uikit)](https://www.npmjs.com/package/@macaronswap-libs/uikit)

Macaron UIkit is a set of React components and hooks used to build pages on Macaron's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @macaronswap-libs/uikit`

## Setup

### Theme

Before using Macaron UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@macaronswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@macaronswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://macaronswap.github.io/macaron-uikit/)
