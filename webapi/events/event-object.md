# Event object

事件处理器在调用时接受一个参数，Event object，它是 Event 的实例

```js
document.body.onclick = function (event) {
  console.log(event instanceof MouseEvent)
  // 所有的 DOM events 都继承自 Event
  console.log(event instanceof Event)
}
```

## Event

`bubbles`（boolean）是否可以冒泡。 用 `stopPropagation()` 阻止冒泡。

`cancelable` 是否可以取消，`preventDefault()` 阻止默认行为。 defaultPrevented


在事件处理器内 this 始终等于 event.currentTarget。它与 event.target 的区别是，
前者是事件的绑定者，后者是事件触发者。

```js
// 单击 body 内的 button
document.body.onclick = function (event) {
  console.log(this === event.currentTarget) // true
  console.log(this === event.target) // false，此时是 button
}
```


except for mouseover events, where the return value has to be true to cancel the event). With beforeunload events, the value is instead used to determine the message to show the user.



this 始终等于 event.currentTarget，event.target 是事件目标。如果是绑定到事件目标上，这三者值一样。如果是绑定到冒泡或捕获阶段中的元素上，两者值不一样。

