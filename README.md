大标题
====
此处加了等号\=，大于0个；

中标题
---
此处加了减号\-，大于0个；

# 一级标题
## 二级标题 
（此处正常文本）：大标题和中标题是分别和一级标题和二级标题对应
### 三级标题
#### 四级标题
##### 五级标题
标题对比


### 1. 换行显示和列表
- 换行不能直接按enter键<br>（此处有换行）
换行要加\<br>

- 此处是 1个减（\-） 号
* 此处是 1个星（\*）号     
1个星号（\*）和1个减号（-）的作用相同，带有圆点列表可用；正常显示星号需要加左斜杠\\转义;

**此处前后都有2个星号（星号和文字之间没有“间隔”），否则不会标黑**


### 2. 高亮和单（多）行文本
```
var name = '定义一个变量，此处为高亮';
```
<br>

```javascript
var name = '此处 ``` 后面加了javascript，可以看到var变颜色';
class BaseClass{
    //构造方法, 类的默认方法
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    toString(){
        console.log(this);
        return this.x + "，" + this.y;   
    }
} 
```

```css
.test{
  color: #333;
  font-size: 24px;
}
```

```html
<p>此处" `` "后加了html</p>
```
`此处文字高亮显示，加了一对" `` "键，react推崇的是单向数据流，自上而下进行数据的传递，但是由下而上或者不在一条数据流上的组件之间的通信就会变的复杂。解决通信问题的方法很多，如果只是父子级关系，父级可以将一个回调函数当作属性传递给子级，子级可以直接调用函数从而和父级通信。 `


### 3. tab键
  此处加了2个tab键；
    此处加了4个tab键 
    
    
### 4. 树格式的缩进
> 第1级
>> 第2级
>>> 第3级
<br>

> 加个小于号" > "： 用脚本进行DOM操作的代价很昂贵。有个贴切的比喻，把DOM和JavaScript各自想象为一个岛屿，它们之间用收费桥梁连接，js每次访问DOM，都要途径这座桥，并交纳“过桥费”,访问DOM的次数越多，费用也就越高。

加载资源
---
加超链接：加中括号，中括号中可以为描述，小括号为地址, eg: \[baidu](http://baidu.com), 
[baidu](http://baidu.com)  

加图片：同加超链接，在最前面加！，eg：\!\[baidu](http://www.baidu.com/img/bdlogo.gif)  
![baidu](http://www.baidu.com/img/bdlogo.gif)   


### 测试缩进
```
├── config
|—— src
│   ├── assets
│   ├── components
│   │   ├── index
│   │   ├──list
│   ├── page
│   ├── style
├── index

```

```
|—— config
|—— src
|   |—— components
|   |—— page
|—— index
```


