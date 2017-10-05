# Cookie

Cookie 保存少量数据。

## 格式

在 Chrome DevTools 的 Network 面板查看 header

- request header `Cookie`，只有一条
- response header `Set-Cookie`，可以有多条

因为 request header 包含 cookie，cookie 不能太大。

```
Set-Cookie: {name}={value}; Expires={GMT}; Secure; HttpOnly
```

cookie attributions 在 Application 面板查看

- Secure，要求 https。
- HttpOnly，客户端脚本 document.cookie 不可以读取

[PHP: Cookies - Manual](http://php.net/manual/en/features.cookies.php)

```php
setcookie("name", "value", time() + 3600);   // 1h 后过期
setcookie("name", "value", time() - 1);    // 已过期
```

Expires 为 0 或者没有值，Cookie 在 session 结束后（浏览器关闭后）失效。

## 读写

document.cookie 读写 cookies，但不能访问 HttpOnly cookies。

跟 header 类似，读是全部读取，写是只写一条。读写不对称。

```js
document.cookie = ''
```

domain 采用 endsWith 比较，sub.domain.com 页面可以将 domain 设为 domian.com，不能设为 google.com。

Path 是绝对路径，默认是当前页面 pathname 的 parent。

## 限制

<http://browsercookielimits.squawky.net/>

每个域名不超过 50 个，总的大小不超过 4093 bytes，注意是总的大小，不是每个的大小。

navigator.cookieEnabled 检测是否启用 cookie。最稳妥的还是用 document.cookie 测试读写

## Lib

<https://github.com/js-cookie/js-cookie>

subcookie
<https://github.com/jonlabelle/cookie-js/blob/master/Cookie.js>
