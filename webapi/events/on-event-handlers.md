# on-event handlers

有两种方式

一，HTML attribute

```html
<button id="" onclick="alert(event.type)">
```

二，JavaScript object property

```js
document.querySelector('button').onclick = function (event) {
  alert(event.type)
}
```

一种事件只能绑定一个事件处理器，后面的覆盖前面的。

只支持冒泡，不支持冒泡。

删除事件处理器

```js
document.querySelector('button').onclick = null
```

##

jQuery has it’s own event-handling layer. It wraps over the handler, and if the handler returns false, then both bubbling is stopped and the default action is prevented.
That differs from normal browser behavior, sometimes causing confusion.
Normally, the browser only cancels the default action, but the event continues to bubble. That’s the difference.


## HTML attribute

作用域链特殊

document 与此元素的属性可以像本地变量一样访问，
甚至对于表单控件，所属表单的 elements 都可以像本地变量一样访问。
等效于：

```js
function () {
  with(document) {
    with(this.form) {
      with(this) {
        // 特性值
      }
    }
  }
}
```

绑定给 window 的事件处理器写在 `<body>` 上。比如 "onload"。

注意在特性内 `&, ", < >` 等字符需要转义，可以用下面方式。

```html
<script>
  function inspect (event, context) {
    console.log('clicked')
    console.log(event)
    console.log(context)
  }
</script>
<button onclick="inspect(event, this)">点我</button>
```

或许你注意了 inspect 函数必须在元素之前定义。
如果在元素后面定义，会出错。为避免出错，可以：

```html
<button onclick="try{inspect()}catch(e){}">点我</button>
```
