---
permalink: /webapi/events/addeventlistener/
---

# addEventListener

```
target.addEventListener(type, listener, [useCapture])
target.addEventListener(type, listener, [options])
```

同一种 event type 可以绑定多个 event listeners，这些 listeners 按绑定的先后次序调用。

同一种 event type 如果多次绑定同一个 listener, 只有第一次生效。

### options

[Passive event listeners](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md)


## removeEventListener

```
target.removeEventListener(type, listener, [useCapture])
target.removeEventListener(type, listener, [options])
```

addEventListener 绑定的 event listeners 由 removeEventListener 删除。而且参数要跟传给 addEventListener 的参数一致，否则无效。

匿名事件处理器，由于无法引用，故无法解绑。

