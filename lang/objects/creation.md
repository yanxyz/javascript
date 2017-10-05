# 创建 Objects

创建 Objects 的方法

- Object literals
- Object constructor
- Object.create() method，[见这里](../prototypes/Object.create.md)

## Object literals

```js
var obj = {
  a: 1,
  b: 2
}
```

Objects 的键名为 String 或 Symbol。键名不是标识符，可以是任意的字符串（包括空字符串）。通常不需要引号。如果字符串包括空格，连字符等需要引号，ES3下（IE<9) 保留字（比如 delete）也需要引号。

```js
var obj = {
  1: 'a',
  foo_bar: 2000,
  'foo bar': 3000,
  delete: function() {}
}
```

对象直接量是表达式，每次运行都会新建一个对象，在循环语句中注意优化一下。

ES6 增强了 Object literal

```js
var o = {
  [Symbol()]: 0,
  a: 1,

  // method
  m() {
    console.log('method')
  },

  // generator
  *n() {
    yield 'hi'
  }

  // getter
  get name() {
    return this._name
  },
  // setter
  set name(value) {
    this._name = value
  }
}
```

accessors（getter 和 setter），跟函数类似，不过不使用 function 关键字，而是使用 get 和 set 关键字。

## Object constructor

```js
var o = new Object()
```

Object constructor

- 没有参数时，或者参数为 undefined, null 时，返回一个新的 object
- 传入参数时，会把参数转为 object，然后返回这个 object

下面结果一样

```js
Object()
new Object()
new Object(undefined)
new Object(null)
```

参数为原始类型

```js
new Object(1)    // 等价于 new Number(1)
new Object(true) // 等价于 new Boolean(true)
```
