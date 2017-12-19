# Array-like objects

Array-like objects，有数字索引属性和 length 属性

```js
var obj = {
  0: 'a',
  1: 'b',
  length: 2
}
```

Array-like objects 不是数组，没有数组方法，不过可以间接使用数组方法。

```js
Array.isArray(obj)  // false
```

将 Array-like objects 转为数组

```js
Array.prototype.slice.call(obj)
Array.from(obj)
```

常见的 array-like objects

- 函数 [arguments](../functions/arguments.md) object
- DOM collections
- jQuery object
