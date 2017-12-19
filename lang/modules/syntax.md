# 语法

export 语句导出变量，import 语句导入变量，在 MDN 了解它们的用法。

export 和 import 只能用在模块顶层（top level scope）。

## export

export default 两种风格：

```js
export default function foo() {} // no semicolon!
export default expression; // variable
```

#### Re-exporting

```js
export { default } from 'lib'
```

## import

import 会提升。

```js
foo()
import { foo } from 'lib'
```

Empty import, 比较适合 shim

```js
import 'lib'
```

## 资料

- <http://exploringjs.com/es6/ch_modules.html>
