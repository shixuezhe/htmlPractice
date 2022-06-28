var obj = {
    name: 'jack',
    age: 18,
    sex: 'man'
}

for (i in obj){
    console.log(i)
}

for (j of Object.keys(obj)){
    console.log(obj[j]);
}

var arrs = ['a','b','c','d'];
for (k in arrs){
    console.log(k);
}

for (h of arrs){
    console.log(h);
}