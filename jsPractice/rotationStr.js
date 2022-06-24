var str1 = 'abcdeffedcba';
var str2 = 'abcdefdcba';

function rotationStr1(str){
    if (str.length<=1) {
        return false
    } else {
        str = str.toLowerCase().split("");
        var start = 0;
        var end = str.length - 1;
        while(start<end){
            if(str[start] === str[end]){
                start++;
                end--;
            }else{
                return false
            }    
        }
    return true
    }
}

function rotationStr2(str){
    if(str.length<=1){
        return true
    }else{
        str = str.toLowerCase();
        if(str[0] === str[str.length-1]){
            return rotationStr2(str.slice(1,str.length-1))

        }else{
            return false
        }
        return true
    }
}


function rotationStr3(str){
    str = str.toLowerCase();
    var reverStr = str.split('').reverse().join('');
    console.log(str,reverStr)
    return str===reverStr
}

console.log(rotationStr3(str1));
console.log(rotationStr3(str2));