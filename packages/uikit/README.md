# 🥞 Pancake UIkit

[![Version](https://img.shields.io/npm/v/@metaswap/uikit)](https://www.npmjs.com/package/@metaswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@metaswap/uikit)](https://www.npmjs.com/package/@metaswap/uikit)

Pancake UIkit is a set of React components and hooks used to build pages on Pancake's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @metaswap/uikit`

***Note**: In case you want to use the older version of the Pancake UIkit, you should install @metaswap-libs/uikit, instead, but we recommend using the latest version of the UIkit.*


## Setup

### Providers

Before using Pancake UIkit, you need to provide the theme file to uikit provider.

```
<<<<<<< HEAD
import { UIKitProvider, light, dark } from '@pancakeswap/uikit'
=======
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@metaswap/uikit'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973
...
<UIKitProvider theme={isDark ? dark : light}>...</UIKitProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@metaswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://metaswap.github.io/pancake-uikit/)
