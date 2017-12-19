# 判断类型

## typeof

用操作符 typeof 判断数据类型。

原始类型

```js
typeof undefined // "undefined"
typeof null      // "object"
typeof true      // "boolean"
typeof 1         // "number"
typeof 'hello'   // "string"
typeof Symbol()  // "symbol"
```

其中 null 比较特殊，返回的是 "object"。

```js
function isNull (val) {
  return val === null
}
```

引用类型

```js
var noop = function () {}
typeof noop

var arr = []
typeof arr

var obj = {}
typeof obj
```



函数和生成器返回 "function", 其它都是返回 "object"，怎么区分这些对象？以数组为例：

```js
Array.isArray = Array.isArray || function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}
```

[typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

## Array.isArray()

Array.isArray() 判断数组

## Object.prototype.toString


