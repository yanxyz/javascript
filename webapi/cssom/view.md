# CSSOM-View

## viewport

视口尺寸 window.innerWidth/innerHeight，包括 scrollbar。

页面滚动距离 window.scrollX/scrollY。

滚动页面 window.scrollTo(), window.scrollBy()。


## scroll

element 的 padding-box 左上角在 scroll area 中的位置。

###

scrollTop/scrollLeft 既是 getter 也是 setter。
用作 setter 时在背后调用 scrollTo()。

在 standards mode 下用 html, 在 quirks mode 下用 body。

Chrome < 61 始终用 body，[chromestatus](https://www.chromestatus.com/features/6386758136627200)

```js
// clientHeight 不包含 scrollbar
var viewportHeight = (document.compatMode === 'CSS1Compat'
  ? document.documentElement : document.body).clientHeight

var pageHeight = Math.max(document.documentElement.scrollHeight,
  document.body.scrollHeight)

var pageY = document.documentElement.scrollTop || document.body.scrollTop
```


## offset

element 的 border-box 左上角在 offsetParent padding-box 中的位置。

IE < 11, element display: none offsetParent 不为 null。


## client

element 的 padding-box 左上角在 border-box 中的位置。

如果有滚动条，滚动条出现在 padding 和 border 之间，占用 content 的尺寸（即 content 的尺寸减小）。

- clientTop/clientLeft, 要加上滚动条，不过实际中没有上滚动条和左滚动条。
- clientWidth/clientHeight，要减去滚动条。


## 资料

- [CSS Object Model (CSSOM) Specification](https://drafts.csswg.org/cssom/)
