# if

if 语句块只有一个表达式时可以省略 `{}`

```js
var i = 1
if (i > 0) console.log('haha')

// JavaScript 是动态类型语言，这里 if condition 自动转为 boolean
if (i) console.log('hehe')
```

if...else

```js
var n = 1
if (n > 0) {
  console.log('positive')
} else if (n === 0) {
  console.log('zero')
} else {
  console.log('negative')
}
```

if 分支比较多时可考虑用 [switch](switch.md) 语句。
