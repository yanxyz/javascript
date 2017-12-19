# var

以 `var` 声明的变量

一，声明提前（hosited）

```js
function func() {
  // 声明提前，不会出现 ReferenceError；初始化不会提前
  console.log(tmp) // undefined
  var tmp = 123
  console.log(tmp) // 123
}

// 相当于
function func() {
  var tmp
  console.log(tmp) // undefined
  tmp = 123
  console.log(tmp) // 123
}
```

二，没有块作用域（块语句没有作用域）

```js
function func() {
  if (true) {
    var tmp = 123
  }
  console.log(tmp) // 123
}
```

三，在同一作用域内可以重复声明。

四，在顶级域内以 `var` 声明的变量，会添加到全局对象上，作为全局对象的一个属性。

```js
var a = 1
window.a // 1
```
