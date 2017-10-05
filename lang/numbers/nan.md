# NaN

NaN，Not a Number，非数字。

```js
Number('hi')
parseInt('hi')
```

下面表达式的结果都是 NaN:

```js
Infinity / Infinity
0 / 0
Math.sqrt(-1)
NaN + 1
```

NaN 跟自身不相等：

```js
NaN == NaN // false
NaN === NaN // false
```

怎么判断 NaN 呢？

- `isNaN(value)`，将 value 转换为 number，若转换结果为 NaN 则返回 `true`。
- `Number.isNaN(value)` 不转换 value 类型，若 value 不是 number 则返回 `false`。

```js
isNaN('abc') // true
Number.isNaN('abc') // false
```
