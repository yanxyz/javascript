# Number literals

- 十进制（decimal），可用数字为 0-9
- 十六进制（hexadecimal），前缀为 `0x`，可用数字为 0-9A-F，如 `0xFF`。
- 二进制数（binary），前缀为 `0b`，可用数字为 0 和 1，如 `0b10`。
- 八进制数（octal），前缀为 `0o`，可用数字为 0-7，常用于 linux 文件权限，如 `0750`（旧八进制）。

前缀不区分大小写。

在严格模式下

- 不可以使用旧八进制（前缀为 `0`, 比如 `0750`）
- 十进制不可以有前缀 `0`（IE 不支持这条限制）

```js
;(function () {
  console.log(078) // 78
  console.log(077) // 63
})()

;(function () {
  'use strict'
  console.log(078) // SyntaxError
  console.log(077) // SyntaxError
})()
```

不同进制之间如何转换？

```js
(10).toString(8) // '12'，十进制转为八进制
(0b10).toString(8) // '2'，二进制转为八进制
parseInt(10, 8)  // 8，八进制转为十进制
```
