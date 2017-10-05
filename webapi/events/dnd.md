# Drag and Drop

- [Spec](https://html.spec.whatwg.org/multipage/interaction.html#dnd)


## Events

### dragstart

target: dragged element

images，links, selections 等默认可以拖动，其它 element 需要指定 draggable attribute。

DataTransfer.effectAllowed 指定

### drag

target: dragged element

频繁发生

### dragenter

target: drop target

此时可以检查 drop target 是否接受 drop。

event.preventDefault() 接受 drop。

modifier keys 可以改变 dropEffect。

### dragover

target: drop target

DataTransfer.dropEffect 指定 drop feedback。

modifier keys 可以改变 dropEffect。

event.preventDefault() 接受 drop。

### dragleave

target: drop target

### drop

target: drop target

event.preventDefault() 接受 drop。

### dragend

target: dragged element

通过 DataTransfer.dropEffect 判断 drop 是否成功，'none' 表示 drop 失败。

从 OS 拖动文件到 Browser, 没有 dragstart dragend events

## 资料


