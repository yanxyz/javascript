# HTTP headers


- [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

header 名字不区分大小写。

- [Cookie, Set-Cookie](cookie.md)
- [cookie](csp.md)


### X-Frame-Options

response header，是否允许页面显示在 iframe, object, frame 中。

```
X-Frame-Options: SAMEORIGIN
```

值：

- DENY 不可以
- SAMEORIGIN 同源网页可以
- ALLOW-FROM https://example.com/

