弹层 Poper
----

## 基本信息

* 仅支持 一个按键 以及 两个按键 两种情况；
* 仅可同时存在一个弹层；

## Author Dxl

## Useage

#### 安装
* bower install -save poper

#### 引用
```html
<script type="../js/poper.js"></script>
```
## API

#### create poper
```js
poper.open({
	content: 'your describe',
	btn: ['',''],  // Array, max two child, when have not set this item, it will be one btn 'OK'
	shadeClose: boolean, // touch empty area close the poper or not (default false)
	yes: function() {}, // when touch the btn[0] to do function (default not close the poper)
	no: function() {} // when touch the btn[1] to do function (default to close the poper)
})
```
#### close poper
```js
poper.close();
```

## demo

#### one btn
```js
var a = 'hello world!<br>',
    b = 'to be or not to be<br>',
    c = '<input style="width: 2rem; height: 2rem;" type="checkbox">';
poper.open({
  content: a + b + c,
  yes: function() {
    console.log('confess OK')
  }
});

```
#### two btn

```js
poper.open({
  content: '确认消费？',
  shadeClose: true,
  btn: ['确认','取消'],
  yes: function() {
    poper.close();
    console.log("got it!");
  },
  no: function() {
    console.log('well~~')
  }
});
```
