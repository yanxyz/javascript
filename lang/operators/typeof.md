# typeof

typeof operator 用于判断数据类型

```js
typeof 'abc' // 'string'
```

typeof 只适合于判断原始类型。详细见 [data types](../data-types/is.md)

下面写法：

```js
typeof('abc')
```

看着像是函数调用，实际不是。这里 `()` 不是函数调用，而是括号表达式。不建议这样写。
