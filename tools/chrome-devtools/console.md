# Chrome DevTools Console

- [docs](https://developers.google.com/web/tools/chrome-devtools/)

## Console API

### console.log

console.log, console.error, console.warn 这几个方法用法一样，不同的是

- 样式不一样，比如 console.error 的输出为红色
- output stream 不一样，在 Console 面板可以选择显示哪种

多个参数以一个空格合并

```js
console.log('a', 'b')
```

空行

```js
console.log('a')
console.log()  // Chrome 无空行，其它为空行
console.log('b')
console.log('') // 空行
console.log('c')
```

参数为 Error 对象，和 console.error 的输出一样，即包含 error.stack。Edge/IE 不包含。

```js
console.log(error)
```

[String substitution and formatting](https://developers.google.com/web/tools/chrome-devtools/console/console-write#string_substitution_and_formatting)

```js
console.log('%o', document.body)
console.log('%O', [{ name: 'yan' }, { name: 'ivan' }])
console.log('%cgreen text', 'color: green')
```

Edge/IE 不支持。

### console.log


## Command Line

