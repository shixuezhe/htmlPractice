var arr1 = new Array(100).fill(0).map((i,index) => index+1);
// console.log(arr1);

var arr2 = Array.from(Array(100),(i,index) => index+1);
// console.log(arr2);

var arr3 = [...Array(100).keys()].map(i => i+1);
console.log(arr3);