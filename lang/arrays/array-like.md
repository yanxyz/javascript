# Array-like object

Array-like object，有数字索引属性和 length 属性

```js
var obj = {
  0: 'a',
  1: 'b',
  length: 2
}
```

Array-like object 不是数组，没有数组方法，不过可以间接使用数组方法。

```js
Array.isArray(obj)  // false
```

将 Array-like object 转为数组

```js
Array.prototype.slice.call(obj)
Array.from(obj)
```

## 常见的 array-like object

函数 arguments object

```js
function f() {
  const args = Array.prototype.slice.call(arguments)
  console.log(args)
}
```

DOM collections

```js
document.body.children // collections
```
