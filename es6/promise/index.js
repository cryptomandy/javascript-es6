var funP = new Promise((resolve, rejected) => {
  console.log('start', 1);
  setTimeout(() => {
    console.log(2);
    resolve();
  }, 6000);
  //   resolve(); //  promise中的 settimeout执行顺序，注意resolve
}).then(res => {
  console.log(res, 3);
});

console.log(4);
setTimeout(() => {
  console.log(5);
}, 2000);

// console.log('**************************************');

// console.log(1);
setTimeout(function() {
  console.log(2);
  let promise = new Promise(function(resolve, reject) {
    console.log(7);
    resolve();
  }).then(function() {
    console.log(8);
  });
}, 1000);
setTimeout(function() {
  console.log(10);
  let promise = new Promise(function(resolve, reject) {
    console.log(11);
    resolve();
  }).then(function() {
    console.log(12);
  });
}, 0);
let promise = new Promise(function(resolve, reject) {
  console.log(3);
  resolve();
})
  .then(function() {
    console.log(4);
  })
  .then(function() {
    console.log(9);
  });
console.log(5);

//  1, 3,5,4,9, 10,11,12, 2,7,8

