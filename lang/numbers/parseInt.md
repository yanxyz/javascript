---
permalink: /lang/numbers/parseint/
---

# JavaScript parseInt parseFloat

全局函数 `parseInt()`, `parseFloat()` 也可以将字符串转为数字，它们的转换规则跟 `Number()` 很不同。

ES6 出于模块化的考虑，将这两个方法添加到 Number

```js
Number.parseInt === parseInt      // true
Number.parseFloat === parseFloat  // true
```

## parseInt

`parseInt(str, radix?)`

- `str`, 非 string 先转为 string
- `radix`, 可选，指定数字进制，范围是 [2, 36]，默认为 10。

非 string 先转为 string

```js
parseInt(null) // NaN
parseInt(Infinity) // NaN
```

将 string 开头的数字部分解析为数字。

```js
parseInt('1e+2') // 1
parseInt('') // NaN
parseInt('123abc') // 123
```

只支持十进制，十六进制前缀

```js
parseInt('0b10') // 0
parseInt('0o10') // 0
parseInt('0xA')  // 10
parseInt('1A')   // 1
```

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

## parseFloat

```js
parseInt(3.14)   // 3
parseFloat(3.14) // 3.14
```
