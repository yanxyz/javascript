# Unicode

## Unicode Identifiers

Unicode 标识符，下面几种方式等效：

```js
var a = "abc"
console.log(a)

// Unicode escape sequences
var \u0061 = "abc"
console.log(\u0061)

// Unicode code point escape sequences
var \u{61} = "abc"
console.log(\u{61})
```

下面以 🐎 horse emoji `\u{1f40e}` 为例说明。

## String

JavaScript 内部使用 utf-16 编码，在处理 non-BMP symbols 时会有问题

```js
var a = 'a'
a.length // 1

var horse = '🐎'
horse.length // 2
```

不只是 length, `indexOf()`, `charAt()`, `charCodeAt()` 等传统方法都受到影响。只有新方法 `codePointAt()`, `for...of` 等支持 unicode。

```js
const str = 'a🐎'
for (const char of str) {
  console.log(char)
}
```

## RegExp

unicode flag `u`

一，不必要的转义将抛出异常

```js
/\a/.test('ab') // true
/\a/u.test('ab') // SyntaxError: Invalid regular expression: /\a/: Invalid escape
```

二，regexp 可以使用 `\u{}`。如果不使用 unicode flag，`\u{}` 将视为 `\u` + `{}`，而 `\u` 是非必要转义，结果为 `u`。

```js
/\u{1f40e}/.test('🐎') // false
/\u{1f40e}/.test('u{1f40e}') // true
/\u{1f40e}/u.test('🐎') // true
```

三，`.` 的范围扩大

```js
/^.$/.test('🐎') // false
/^.$/u.test('🐎') // true
```
