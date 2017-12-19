# Strings

JavaScript 字符串单引号和双引号没有区别。为了方便操作 HTML 通常用单引号——HTML 的 attribute 使用双引号。

```js
var html = '<a href="https://github.com/yanxyz">My Github</a>'
```

使用 `\\` 转义，[列表](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation)。对普通字符转义结果仍然为普通字符。

```js
'\n' === 'n' // false
'\a' === 'a' // true
```

## String()

String 作为 constructor 调用时（即以 new 调用）创建一个 String object

```js
new String()
```

String 作为普通函数调用时，将参数转为 string



## API

- [slice, substring, substr](slice.md) 提取子串
- [split](split.md)
- search
  - [indexOf, lastIndexOf](index.md)
  - [match, search](match.md)
  - [startsWith, includes, endsWidth](includes.md)
- [replace](replace.md)
- [padStart, padEnd]

