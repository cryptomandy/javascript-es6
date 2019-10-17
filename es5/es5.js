var a = 'test';

var a = {
  name: 'name',
  fun: function() {
    // 箭头函数时 this 指向定义它的对象；而不是执行时的对象
    console.log(this.a);
  }
};
// console.log(a.fun().);
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
console.log(i);

