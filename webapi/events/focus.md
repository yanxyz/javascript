# Focus Events

接口为 FocusEvent，有下面 events

- focusin 在收到焦点前触发
- focus 在收到焦点后触发
- focusout 在失去焦点前触发
- blur 在失去焦点后触发

以上 events 都不可取消（cancelable 为 false）。
focus 和 blur 不冒泡，focusin 和 focusout 冒泡。

Chrome, Firefox

- 需要用 addEventListener 绑定 focusin 和 focusout，on-event handler 无效。
- events 触发顺序和 Spec 不一样，focus > focusin > blur > focusout。IE 跟 Spec 一致。

event.relatedTarget

- 对于 focusin, focus 是失去焦点的 element
- 对于 focusout, blur 是收到焦点的 element

以上 events 只在 focusable element 上触发。


## 资料

- [Spec](https://w3c.github.io/uievents/#events-focusevent)
- [说说 focus /focusin /focusout /blur 事件](https://segmentfault.com/a/1190000003942014)
