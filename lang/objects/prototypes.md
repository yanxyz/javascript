# JavaScript 原型

## constructor

函数以 `new` 调用时，跟一般调用大相径庭，此时函数被用作 constructor，

- 将根据函数的 prototype 创建一个对象 instance，函数的 this 绑定到 instance。
- 如果函数没有 return 语句，则 `return this`;
  如果函数 return 一个原始类型的值，则以  `return this` 取代；
  如果函数 return 另一个对象 obj，则返回 obj。obj 不是 instance。

```js
function A() {
  this.label = 'a'
}
var a = new A()
console.log(a instanceof A) // true
```

涉及到三个对象 A, A.prototype, a，它们的关系

```js
A.prototype.constructor === A
a.__proto__ === A.prototype
a instanceof A
```

原型链 A.prototype > Object.prototype > null

```js
console.dir(a)
```

## `__proto__`

`__proto__` 获取对象的原型（不要与 constructor 的 `.prototype` 属性混了）。它不是标准属性，不过现在浏览器都实现了。它是一个 accessor，读相当于 `Object.getPrototypeOf()`，写相当于 `Object.setPrototypeOf()`。

- 在对象字面量中只能指定一次，多次指定抛出错误
- 没有计算属性形式，`['__proto__']` 按普通属性处理

## Object.create()

```js
Object.create({}, {
    prop: { value: undefined, writable: false, enumerable: false, configurable: false }
})

Object.create(null)
```
