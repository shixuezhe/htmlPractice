var str = 'helloyellow';
function removeDuplicateStr1(str) {
    var result = Array.prototype.filter.call(str,function(char,index,arr){
        return arr.indexOf(char) === index;
    })
    return result.join('')
}

console.log(removeDuplicateStr1(str));
//输出：heloyw

console.log('-------------------------')

function removeDuplicateStr2(str){
    var set = new Set(str.split(''));
    return [...set].join('')
}
console.log(removeDuplicateStr2(str))

console.log('-------------------------')

function removeDuplicateStr3(str){
    var result = '';
    for(var i=0;i<str.length;i++){
        if(result.indexOf(str[i])<0){
            result += str[i]
        }
    }
    return result;
}

console.log(removeDuplicateStr3(str))
