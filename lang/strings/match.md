# 查找子串

## match

获取匹配子串。

`str.match(regexp)`

如果参数不是 RegExp 则转为 RegExp。

如果有匹配则返回一个数组，否则返回 null。

没有使用 `g`, 返回的结果同 exec

没有 ‘g’，;
有 ‘g’，若无匹配则返回 null; 若有匹配则返回一个数组，包含所有的匹配，不包含捕获。
'hello world'.match(/(o)/g) // ["o", "o"]

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

## search

获取匹配的索引。

`str.search(regexp)`

- 如果参数不是 RegExp 则转为 RegExp

返回第一个匹配（忽略标志 `g`）的索引，没有匹配则返回 -1

```js
'hello world'.search(/o/g) // 4
```

`indexOf`, `lastIndexOf` 跟 search 的作用类似，不过它们的参数是 String。

如果只是检测 pattern 是否存在，用 `RegExp#test()`

```js
/o/.test('hello world') // true
```

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)

