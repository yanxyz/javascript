# 箭头函数

## 语法

箭头函数

```js
() => {}
```

`=>` 后面不能换行。

### 参数

只有一个参数时可以省略 `()`

```js
[1, 2, 3].map(x => x * x)
```

这个参数不是简单参数，比如有默认值，则不能省略 `()`
#
```js
[1, undefined, 3].map((x = 0) => x * x)
```

箭头函数不可以有重名参数，普通函数在非严格模式可以有重名参数。

### 函数体

当函数体只有一个表达式时，可以省略 `{}`

```js
[1, 2, 3].map(x => x * x)

// 相当于
[1, 2, 3].map(x => {
  return x * x
})

Promise.reject('Oops', err => { throw err }) // throw 是语句，不是表达式，不能省略 `{}`
```

当返回一个对象字面量时

```js
const f = x => {
  return { value: x}
}
```

若想省略 `{}` 这么做

```js
const f = x => ({ value: x }) // 表达式
```

### 即时调用

即时调用箭头函数（IIAF, Immediately Invoked Arrow Function）

```js
;(() => {
  console.log('hello')
})()
```

箭头函数必须放在 `()` 里面。

## 特点

在箭头函数内，这些变量取静态的值（词法），而不是动态的值

- this
- arguments
- new.target
- super

```js
btn.onclick = () => {
  // this 为外部环境的 this, 不是 btn
  console.log(this)
}
```

箭头函数不能以 `new` 调用，即不能用作 constructor，自然也没有 prototype 属性。


## 参考

- <http://exploringjs.com/es6/ch_arrow-functions.html>
