# 严格模式

ES5 引入严格模式，限制某些语法的使用。

`'use strict'` 声明严格模式，有两种使用方式：

- 放在脚本开头，整个脚本将使用严格模式。
- 放在函数开头，此函数将使用严格模式。

**开头**的意思是 `'use strict'` 是第一行非注释代码。

class 和 module 默认使用严格模式。

## 重要限制

- [变量](variables.md)
- [`arguments`](functions/arguments.md)
- [`eval`](eval.md)
- 不可以使用 `with` 语句。

随着 ES 的更新，严格模式也可能变化。

ES5 严格模式不可以使用八进制 `0n`, ES2015 严格模式可以使用新的八进制 `0on`。

ES2015 函数只有当它使用简单参数时才可以使用 `'use strict'`。

## 参考

- <https://docs.microsoft.com/en-us/scripting/javascript/advanced/strict-mode-javascript>
