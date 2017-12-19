# 相等

相等判断逻辑：

- loose equality `==`
- strict equality `===`
- SameValueZero
- SameValue

## loose equality

[Abstract Equality Comparison](https://tc39.github.io/ecma262/#sec-abstract-relational-comparison)

`x == y` 如果两者类型一样，结果同 `===`；不然先转换类型

- null == undefined 返回 true
- 其中一个 a 为 Boolean，则 ToNumber(a)
- 一个 a 为 Number, 另一个 b 为 String, 则 ToNumber(b)
- 一个 a 为 Number 或 String 或 Symbol，另一个 b 为 Object，则 ToPrimitive(b)
- 返回 false

注：[ToNumber, ToPrimitive](data-types.md)

结论

- null，undefined 不等于它们之外的值
- NaN 不等于其它值，包括它自己
- 跟 `+` 相反，String 和 Number 比较，String 转为 Number

下面表达式的结果都为 true

```js
null == undefined
null != false
null != 0
NaN != false

true == 1
true == '1'

({} != '1')
([1] == '1')
```

## strict equality

`===` 如果类型不一致结果为 `false`。

- NaN 不等于 NaN
- +0 等于 -0

用于：

- `Array.prototype.indexOf()`, `Array.prototype.lastIndexOf()` 等方法，它们不能查找 NaN。

## SameValueZero

- NaN 等于 NaN
- +0 等于 -0

用于：

- Map
- Set
- `Array.prototype.includes()` 等方法。

## SameValue

- NaN 等于 NaN
- +0 不等于 -0

用于：

`Object.is()`

## 参考

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness>
