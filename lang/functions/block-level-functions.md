# 块级函数

块级函数（block-level function），即在语句块中声明的函数。各浏览器的实现不一致，因此 ES5 在严格模式中禁止了块级函数。到了 ES6，有了块作用域，块级函数在严格模式下

- 只存在于块作用域
- 提升到块作用域的顶部

```js
'use strict'

if (true) {
  console.log(typeof func)    // "function"

  // ES5 严格模式报错
  function func (x, y) {
  }
}

console.log(typeof sum)    // "undefined"
```

在非严格模式下块级函数在块级作用域下仍然存在。

[ESLint no-inner-declarations](http://eslint.org/docs/rules/no-inner-declarations)

