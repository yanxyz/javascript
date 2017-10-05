# 日期

`Date` 以普通函数调用，忽略参数，返回当前时间。

```js
Date(2016, 1)
```

以构造函数调用，方法签名比较多，容易出错

```js
new Date() // 没有参数，返回当前时间。
new Date("1949-10-01") // 一个 string 参数，为 dateString
new Date(0) // 一个 number 参数, 为 unix timestamp

// 多个 number 参数
// new Date(year, month, date?, hours?, minutes?, seconds?, milliseconds?)
new Date(2016，1)
```

参数 `date` 范围为 1-31，从 1 开始。其它为从 0 开始。

[解析 dateString 兼容性](http://dygraphs.com/date-formats.html) 。

`Date` 和 `Date.prototype.setMonth()` 等方法，如果参数超出范围（溢出），会自动调整

```js
new Date(2016, 1, 0) // 2016-01-31
```



## modules

- [moment.js](https://momentjs.com/)
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) 将 ms 转为 string `1337000000 → 15d 11h 23m 20s`
