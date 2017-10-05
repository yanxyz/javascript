# 替换

替换子串。

`replace(subString, newString)`


没有匹配则
没有 ‘g’，则替换第一个匹配;
有 ‘g’，若替换所有的匹配l; 若有匹配则返回一个数组，包含所有的匹配，不包含捕获。
'hello world'.replace(/o/g) // 4



- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
