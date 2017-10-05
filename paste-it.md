---
permalink: /post-it/
---

# 小纸条

## Language

ES6

- <http://kangax.github.io/compat-table/es6/>
- <https://github.com/es-shims/es6-shim>
- babel

### Promise

IE 不支持，补丁

- Bluebird
- <https://github.com/jakearchibald/es6-promise>
- <https://github.com/taylorhakes/promise-polyfill>

## DOM

### classList

IE10+ 支持，不过

- add, remove, toggle 只支持一个参数。
- 不支持 SVGElement。IE 将 classList 放在 HTMLElement 上，而不是 Element 上，所以 SVGElement 不支持。

<https://github.com/eligrey/classList.js>

### data-*

dataset 读写 data-* attributes。

data-* attributes 名字为 dash-style，全小写。
dataset properties 名字为 camelCase。

IE11 支持，不过不支持 SVGElement

### hidden attribute

隐藏元素。IE11 支持。

```css
[hidden] {
  display: none
}
```

## Events

### CustomEvent

- <https://github.com/krambuhl/custom-event-polyfill> IE9+

## Network

Request

- <https://github.com/github/fetch> IE10+
- <https://github.com/axios/axios> IE9+

Cookie

- <https://github.com/js-cookie/js-cookie>

