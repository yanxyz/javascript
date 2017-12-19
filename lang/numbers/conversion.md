# 将其它类型转为 Number

有下面方法

- `Number()`
- `parseInt()`, `parseFloat()`

全局函数 `parseInt()`, `parseFloat()`, 它们的转换规则跟 `Number()` 很不同。
ES6 出于模块化的考虑，将这两个方法添加到 Number

```js
Number.parseInt === parseInt      // true
Number.parseFloat === parseFloat  // true
```

## Number

`Number(value)`

一个可选参数，不传入参数时返回 0。
传入参数时，通过 [ToNumber](../data-types/conversion.md#ToNumber) 把它转为 Number。

注意，如果以 new 调用 Number，返回一个 number wrapper object

```js
var x = Number()
typeof x

var y = new Number()
typeof y
```

若 value 是 String，先删掉它头尾的空白。

- empty string 返回 0
- numberic string 返回相应数字
- 其它情况返回 NaN

[和 parseInt 的对比](Number-parseInt.html)

## parseInt

`parseInt(value, radix?)`

- `value`, 可选，视为 undefined
- `radix`, 可选，指定数字进制，范围是 [2, 36]，默认为 10。

首先通过 [ToString](../data-types/conversion.md#ToString) 把 value 转为 string

- 忽略 string 开始部分的空白
- 将 string 开头的数字部分解析为数字，若没有则返回 NaN
- 只支持十进制前缀 `0` 和 十六进制前缀 `0x`

### radix

radix 默认为 10，不过

```js
parseInt('010') // ES5 为 10, ES3 为 8
```

如果 radix 是 1 或者大于 36 则返回 NaN。

```js
parseInt('10', 1)   // NaN
parseInt('10', 37)  // NaN
```

在指定 radix 时，数字字面量前缀可以省略。

```js
parseInt('A', 16)  // 10
```

- [为什么parseInt(0.0000008) === 8？ - 简书](http://www.jianshu.com/p/4eea34b69aaa)


## parseFloat

```js
parseInt(3.14)   // 3
parseFloat(3.14) // 3.14
```
