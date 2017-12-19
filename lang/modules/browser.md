# 在浏览器中使用 ES 模块

## script type="module"

```html
/* inline module */
<script type="module">
  import lib from './lib.js' // 注意不能省略为 'lib.js'
</script>

/* external module */
<script type="module" src="lib.js">
```

module id 不能省略扩展名，不然 404。
如果扩展名为 `.mjs`，server 应当添加 mine type。

module 行为同 `defer` attribute。

module 只运行一次，即使包含多次。

module 有跨域限制。Chrome file:// 视为跨域，应在 server 下测试。

- <https://jakearchibald.com/2017/es-modules-in-browsers/>

## import.meta

import.meta 是一个 plain object

```js
{
  url: string, //
  entryUrl: string, //
  scriptElement:
}
```

Chrome 64

- <http://2ality.com/2017/11/import-meta.html>

## link rel=modulepreload

```

```

- [Chrome 64](https://www.chromestatus.com/feature/5762805915451392)
