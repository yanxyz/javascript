# API

RegExp object 两个方法 test(), exec()

`regex.test(str)`

测试字符串是否匹配 pattern。若匹配则返回 true，不然返回 false。

`regex.exec(str)`

匹配字符串。如果有匹配，返回一个数组 `[match, p1, p2, ...]`（和 [replace 方法](../strings/replace.md) 回调函数的参数类似）；如果没有匹配，返回 null。

当 regex 使用了 `g` 时，每次匹配会修改 regex 的 lastIndex 属性，下次查询从 lastIndex 开始。
