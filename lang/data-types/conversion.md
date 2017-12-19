---
toc: true
---

# 类型转换

JavaScript 是弱类型语言，不用声明变量的类型；也是动态语言，在运行时根据需要转换类型。例如：

```js
var a
// a 是 undefined, 自动转为 false
if (a) {
  console.log('Well')
} else {
  console.log('Oops')
}
```

那么不同的类型之间是如何转换的？

- [Spec](https://tc39.github.io/ecma262/#sec-type-conversion)

由 JavaScript 引擎自动转换类型是隐式类型转换，下面是转换规则。如果是相同类型直接返回，不进行类型转化。

## ToBoolean

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

另外注意 [Wrapper objects](wrapper.md)

## ToNumber

[`ToNumber(argument)`](https://tc39.github.io/ecma262/#sec-tonumber) 将 argument 转为 Number 类型：

| Argument Type | Result
| ------------- | --------
| Undefined     | 返回 NaN。
| Null          | 返回 +0。
| Boolean       | 返回 1 若 argument 是 true；返回 +0 若 argument 是 false。
| Number        | 返回 argument（不进行转换）。
| String        | [见这](../numbers/conversion.md)。
| Symbol        | 抛出一个 TypeError 异常。
| Object        | 1. primValue = [`ToPrimitive(argument, hint Number)`](#toprimitive)，<br> 2. `ToNumber(primValue)`。


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

## ToString

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

## ToObject

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
