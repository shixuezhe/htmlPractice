var str1 = 'abc';
function repeat1(target, n){
    if(n===1){
        return target
    }else{
        return target + repeat1(target, n-1)
    }
}
console.log(repeat1(str1, 3));


var str2 = 'hjk';
function repeat2(target, n){
    return Array(n+1).join(target)
}

console.log(repeat2(str2, 4));

var str3 = 'xyz';
function repeat3(target, n){
    return Array.prototype.join.call({length: n+1}, target)
}

console.log(repeat3(str3, 5));


