# JavaScript 模块

模块（modules）与脚本（scripts）的区别

- <http://exploringjs.com/es6/ch_modules.html#_browsers-scripts-versus-modules>

## 语法

export 语句导出变量，import 语句导入变量，在 MDN 了解它们的用法。

export 和 import 只能用在模块顶层（top level scope）。


### export


export default 两种风格：

```js
export default function foo() {} // no semicolon!
export default expression; // variable
```

#### Re-exporting

```js
export { default } from 'lib'
```

### import

import 会提升。

```js
foo()
import { foo } from 'lib'
```

Empty import, 比较适合 shim

```js
import 'lib'
```

## Browser

```html
/* inline module */
<script type="module">
  import lib from './lib.js' // 注意不能省略为 'lib.js'
</script>

/* external module */
<script type="module" src="lib.js">
```

module 不能像 node.js 那样可以省略扩展名，不然 404。

module 如果扩展名为 `.mjs`，server 应当将 mine type 设为 javascript。

module 行为同 `defer` attribute。

module 只运行一次，即使包含多次。

module 有跨域限制。Chrome file: 视为跨域，应在 server 下测试。

- <https://jakearchibald.com/2017/es-modules-in-browsers/>

## Node.js

- <https://nodejs.org/api/esm.html>

module 文件扩展名为 `.mjs`。
