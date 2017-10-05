# XHR

XMLHttpRequest(XHR)

Non-IE 浏览器，不建议使用 XHR 应当使用 [fetch](fetch.md)。

## API

- [API](./api/)

## synchronous XMLHttpRequest

在 worker 中使用 synchronous request，跟 asynchronous request 差不多，因为 worker 在后台运行，不会阻塞 main thread。

网站统计代码在页面关闭前（unload or beforeunload event)，使用 asynchronous request 没有意义，只能用 synchronous request


## 文章

- [你真的会使用XMLHttpRequest吗？](https://segmentfault.com/a/1190000004322487)
