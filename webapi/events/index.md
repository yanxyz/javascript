# Events

## DOM events

有许多 [DOM Events](https://developer.mozilla.org/en-US/docs/Web/Events)。
也可以创建自定义事件，[CustomEvent](customevent.md)。

在 DOM tree 中，event 是如何抵达 event target 呢？[事件流](event-flow.md)

开发者给事件绑定事件处理器

- [on-event](on-event-handlers.md)
- [addEventListener](addEventListener.md)

用户某个操作，比如单击按钮，浏览器触发一个单击事件。
开发者也可以自主触发事件，[dispatchEvent](dispatchEvent.md)

事件在发生时，调用绑定的事件处理器。事件处理器收到一个参数，[Event object](event-object.md)。

### Event types

UI Events

- [Spec](https://w3c.github.io/uievents)
- [Mouse Events](mouse.md)
- [Keyboard Events](keyboard.md)
- [Wheel Event](wheel.md)
- [Focus Events](focus.md)

[Drag and Drop](dnd.md)

## Event system

我们也可以自己实现一个事件系统



## 资料

