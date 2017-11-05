# Symbols

Symbols 是 ES6 引入的原始类型。

Symbols 无字面量，通过 `Symbol()` constructor 创建， `Symbol()` 接受一个可选的 string 参数，用于描述这个 symbol。

```js
const s = Symbol('a symbol')
typeof s // "symbol"
s        // Symbol(a symbol)
```

每次调用 `Symbol()` 都创建一个**唯一的**的 symbol，比较适合用作 object keys。

## Well-known symbols

### Symbol.iterator

iterable 的标识是 `[Symbol.iterator]` 属性。

```js
var str = 'abc'
typeof str[Symbol.iterator] // "function"
```

### Symbol.toStringTag

对象的 `[Symbol.toStringTag]` 属性为 class tag。

```js
var m = new Map()
Object.prototype.toString.call(m) // "[object Map]"
m[Symbol.toStringTag] // "Map"
```

为自定义 class 添加 tag

```js
class A {
  get [Symbol.toStringTag]() {
    return 'A'
  }
}

const a = new A()
Object.prototype.toString.call(a) // "[object A]"
a[Symbol.toStringTag] // "A"
```

## 参考

- http://exploringjs.com/es6/ch_symbols.html
