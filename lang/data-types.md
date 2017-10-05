---
toc: true
---

# JavaScript 数据类型

JavaScript 有 6 个原始类型和 1 个引用类型。

[MDN Data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

| 类型      | 真值             | 假值                     | typeof      |
| --------- | ---------------- | ------------------------ | ----------- |
| Undefined |                  | undefined                | "undefined" |
| Null      |                  | null                     | "object"    |
| Boolean   | true             | false                    | "boolean"   |
| Number    | 例如 1，Infinity | 0, +0, -0, NaN           | "number"    |
| String    | 例如 "hello", 'hi' | 空字符串 "" 和 '', length 为 0 | "string" |
| Symbol    | 都是真值。例如 Symbol() |                   | "symbol"    |

Undefined 和 Null 类型都是只有一个值。变量如果没有初始化，它的值是 undefined。

## 判断类型

用操作符 typeof 判断数据类型。原始类型的结果见上表。其中 null 比较特殊，返回的是 "object"。

```js
function isNull (val) {
  return val === null
}
```

对于引用类型，函数和生成器返回 "function", 其它都是返回 "object"，怎么区分这些对象？以数组为例：

```js
Array.isArray = Array.isArray || function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}
```

## 类型转换

JavaScript 是弱类型语言，不用声明变量的类型；也是动态语言，在运行时根据需要转换类型。例如：

```js
var a
// 自动将 a 转为 false
if (a) {
  console.log('Hi')
} else {
  console.log('Ooh')
}
```

那么不同的类型之间是如何转换的？

- [Spec](https://tc39.github.io/ecma262/#sec-type-conversion)

由 JavaScript 引擎自动转换类型是隐式类型转换，下面是转换规则。如果是相同类型直接返回，不进行类型转化。

### ToBoolean(argument)

[`ToNumber(argument)`](https://tc39.github.io/ecma262/#sec-toboolean) 将 argument 转为 Boolean 类型：

| Argument Type | Result
| ------------- | ------
| Undefined     | 返回 false。
| Null          | 返回 false。
| Boolean       | 返回 argument（不进行转换）。
| Number        | 返回 false 若 argument 是 +0, −0, NaN; 不然返回 true。
| String        | 返回 false 若 argument 是空字符串( length 为 0); 不然返回 true。
| Symbol        | 返回 true。
| Object        | 返回 true。


可以转换为 true 的值是真值（truthy)，可以转换为 false 的值是假值（falsy)。原始类型的假值见开始的表。对象都是真值，特别是：

- 空对象都是转为 true，例如：空数组 `[]`, 空对象 `{}`。
- 包装对象都是转为 true，不管它对应的原始值是不是假值，例如：`new Boolean(false)`, `new Number(0)`。

Boolean，Number, String 函数，以 new 调用时（此时它们是构造函数）生成对应的包装对象。

```js
var bool = new Boolean()
typeof bool // "object"

// if 语句期望一个 Boolean 值，JavaScript 引擎在这里自动转换类型
// Boolean(bool) 返回 true
if (bool) console.log('Hi') // "Hi",

// 因为 new Boolean() 的参数是 undefined, 所以 bool 对应的原始值是 false
// 二元运算符 +， bool 先转为原始值 false, 因为是和数字相加，所以再转为数字 0。
bool + 1 // 1

// 和字符串相加，则转为字符串。
"I'm " + bool // "I'm false"
```

这也是为什么它们作为原始值却可以如对象那样拥有属性和方法，JavaScript 引擎在背后自动装箱卸箱。实际应用中应当避免这种用法。

当直接调用它们时（此时它们是普通函数），是显式转换类型。

```js
var bool = Boolean()
typeof bool // "boolean"
if (bool) console.log('Hi') // 不打印
```

Symbol 不能以 new 调用，不能直接生成它的包装对象，使用 Object() 可以将它转为它的包装对象。

undefined, null 没有包装对象, 它们没有属性和方法：

```js
null.toString() // TypeError
```

### ToNumber

[`ToNumber(argument)`](https://tc39.github.io/ecma262/#sec-tonumber) 将 argument 转为 Number 类型：

| Argument Type | Result
| ------------- | --------
| Undefined     | 返回 NaN。
| Null          | 返回 +0。
| Boolean       | 返回 1 若 argument 是 true；返回 +0 若 argument 是 false。
| Number        | 返回 argument（不进行转换）。
| String        | 转换规则见下。
| Symbol        | 抛出一个 TypeError 异常。
| Object        | 1. primValue = [`ToPrimitive(argument, hint Number)`](#toprimitive)，<br> 2. `ToNumber(primValue)`。

`Number()` 将 String 转为 Number，先删掉字符串头尾的空白，然后

- 空字符串转为 0

```js
Number('') // 0
```

- 数字字符串（numberic string）转为数字，返回相应的数字。

```js
Number('123') // 123
Number('Infinity') // Infinity
Number('1e+2') // 100

// 正负号
Number('-123') // -123

// 数字前缀
Number('0b10') // 2
Number('0o10') // 8
Number('0xA') // 10

// 十进制可以有多个前缀 0
Number('010') // 10
Number('0010') // 10

// 浮点数
Number('3.14') // 3.14
Number('03.14') // 3.14
```

- 非数字字符串，返回 NaN

```js
Number('123abc') // NaN
```

全局函数 `parseInt()`, `parseFloat()` 也可以将字符串转为数字，它们的转换规则跟 `Number()` 很不同。详细见 [parseInt](numbers/parseInt.md)。

### ToPrimitive

[`ToPrimitive(input, [PreferredType])`](https://tc39.github.io/ecma262/#sec-toprimitive) 将 `input`转为 Primitive。如果 `input` 是 Primitive 则返回它。

PreferredType 是 type hint。hint 默认值是 `"default"`。内置对象当中 Date 类型将 `"default"` 按 `"string"` 处理，其它的按 `"number"` 处理。

如果 hint 是 `"string"`：

1. 先使用 object 的 `toString()` 方法，若结果不是 Object 则返回这个值，否则进行下一步。
2. 再使用 object 的 `valueOf()` 方法，若结果不是 Object 则返回这个值，否则抛出 TypeError 异常。

如果 hint 是 `"number"`，先使用对象的 `valueOf()` 方法，再使用 `toString()` 方法。

JavaScript 所有的 object 都继承自 Object.prototype，它有两个方法 `toString()`，`valueOf()`，所以所有的 object 都可以使用这两个方法。不过 Array, Function, Date, RegExp 等定义了自己的 `toString()` 方法；Date 定义了自己的 `valueOf()` 方法。

```js
Number([]) // 0
```

怎么理解？设 `a = []`

1. ToPrimitive(a, "number") 返回 `''`
    1. a.valueOf() 返回 a
    1. a.toString() 返回 ''
1. ToNumber('') 返回 0

现在想一想下面表达式的值

```js
Number([1])          // ?
Number([1, 2])       // ?
Number(new Date(1))  // ?
```

### ToString

[`ToString(argument)`](https://tc39.github.io/ecma262/#sec-tostring) 将 `argument` 转为 String 类型：

| Argument Type | Result
| ------------- | -------
| Undefined     | 返回 "undefined"。
| Null          | 返回 "null"。
| Boolean       | 如果 argument 是 true, 返回 "true"。 如果 argument 是 false, 返回 "false"。
| Number        | 转换规则见下。
| String        | 返回 argument（不进行转换）。
| Symbol        | 抛出一个 TypeError 异常。
| Object        | 先让 primValue 为 [`ToPrimitive(argument, hint String)`](#toprimitive)，再 `ToString(primValue)`。

Number 类型转为 String 类型：

- NaN 转为 "NaN"；+0，-0 转为 "0"；+∞ 转为 "Infinity"
- 负数转换后添加前缀 "-"。

还可以用 Number 类的方法转为特定格式的字符串。如 toFixed(), toExponential(), toPrecision() 等。

### ToObject

[`ToObject(argument)`](https://tc39.github.io/ecma262/#sec-toobject) 将 `argument` 转为 Object 类型：

| Argument Type | Result
| ------------- | ------
| Undefined     | 抛出一个 TypeError 异常。
| Null          | 抛出一个 TypeError 异常。
| Boolean       | 返回一个 Boolean 包装对象。
| Number        | 返回一个 Number 包装对象。
| String        | 返回一个 String 包装对象。
| Symbol        | 返回一个 Symbol 包装对象。
| Object        | 返回 argument（不进行转换）。

`Object()` 跟 `ToObject` 有一点不一样，`Object()` 参数为 undefined 或 null 时，返回一个空对象。


## 判断类型

[typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

Array.isArray() 判断数组

Object.prototype.toString
