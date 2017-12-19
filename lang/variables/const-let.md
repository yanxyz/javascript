# const 和 let

const, let 声明变量

一，有块作用域

```js
function func() {
  if (true) {
    const tmp = 123
  }
  console.log(tmp) // ReferenceError: tmp is not defined
}
```

在同一作用域内不可以重复声明。

在顶级域内以 let 或 const 声明的变量，不是全局对象的属性。

```js
let c = 3
window.c // undefined
```

#### 声明不会提前

```js
function func() {
  console.log(i) // ReferenceError
  const tmp = 123
  console.log(tmp)
}
```

## const

const 声明常量，在声明的时候必须初始化。按惯例，常量名字的格式为 `CONST_NAME`。

当常量的值为 object type 时，虽然不可以改变值（引用），但是可以修改属性。

```js
const o = {}
o.name = 'Ivan Yan'

const arr = []
arr.push(1)
```

## TDZ

上面说了，let 和 const 声明不会提前

```js
function func() { // TDZ starts
  console.log(tmp) // ReferenceError
  const tmp = 123 // TDZ ends
  console.log(tmp)
}
```

TDZ (temporal dead zone)，从进入作用域到变量声明，这个运行过程当中不可以访问变量。

声明的同时初始化，初始化算在 TDZ 内

```js
function func() { // TDZ starts
  const tmp = console.log(tmp) // TDZ ends，ReferenceError
  console.log(tmp)
}
```

TDZ 与时间相关，与位置无关

```js
function func() { // TDZ starts
  function output() {
    console.log(tmp)
  }
  const tmp = 123 // TDZ ends
  output() // 123
}
```

对于在 TDZ 内的变量，`typeof` 抛出 `ReferenceError`

```js
function func() { // TDZ starts
  console.log(typeof foo) // undefined，`foo` 是未声明的变量，不在 TDZ 内
  console.log(typeof tmp) // ReferenceError，`tmp` 不是未声明的变量，在 TDZ 内
  const tmp = 123 // TDZ ends
}
```

## for

```js
// i++ 导致 TypeError: Assignment to constant variable.
for (const i=0; i<3; i++) {
  console.log(i)
}
```

如果不修改变量的值，const 但用无妨

```js
for (const x of 'abc') {
  console.log(x)
}
```

## loop

const 的问题

在讲到闭包时，常常列举下面例子

```js
var arr = []
for (var i = 0; i < 3; i++) {
  arr.push(() => i)
}
arr.map(x => x()) // ？
```

let, const 在每次循环时重新绑定

```js
var arr = []
for (let i = 0; i < 3; i++) {
  arr.push(() => i)
}
arr.map(x => x()) // ？
```

## switch



## 参考

- <http://exploringjs.com/es6/ch_variables.html>
