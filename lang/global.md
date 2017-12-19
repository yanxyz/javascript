# global

global object

- browser 中为 `window`
- worker 中为 `self`
- Node.js 中为 `global`

脚本的顶层作用域为全局环境，模块的顶层作用域不是。Node.js 的模块实际是包装到一个函数中，模块的顶层作用域是这个函数的作用域，并不是全局环境。
