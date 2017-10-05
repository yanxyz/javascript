# offset

## viewport

视口尺寸 window.innerWidth/innerHeight，包括 scrollbar。

页面滚动距离 window.scrollX/scrollY。

滚动页面 window.scrollTo(), window.scrollBy()。

## element

### scroll

element 的 padding-box 左上角在 scroll area 中的位置。

scrollTop/scrollLeft 可以赋值，实际上会调用 scrollTo()。

### client

element 的 padding-box 左上角在 border-box 中的位置。

如果有滚动条，滚动条出现在 padding 和 border 之间，占用 content 的尺寸（即 content 的尺寸减小）。

- clientTop/clientLeft, 要加上滚动条，不过实际中没有上滚动条和左滚动条。
- clientWidth/clientHeight，要减去滚动条。

### offset

element 的 border-box 左上角在 offsetParent padding-box 中的位置。

IE < 11, element display: none offsetParent 不为 null。

### html/body

在 html, body 上，clientProp, scrollProp 比较特殊：

- 在 standard 模式下 html 反映的是 viewport;
- 在 quirks 模式下 body 反映的是 viewport。

不过浏览器的实现，有的是在 html 上，有的是在 body 在。

```js
// clientHeight 不包含 scrollbar
var viewportHeight = (document.compatMode === 'CSS1Compat'
  ? document.documentElement : document.body).clientHeight

var pageHeight = Math.max(document.documentElement.scrollHeight,
  document.body.scrollHeight)

var pageY = document.documentElement.scrollTop || document.body.scrollTop
```
