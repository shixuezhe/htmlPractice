var str = 'abcadsafkasdadafafasdadaasfasfajgjj';
function getMaxcountStr1(str){
    let max = 1;
    let target = str[0];
    let obj = {};
    for(var i = 0;i<str.length;i++){
        const char = str[i];
        if(obj[char]){
            obj[char] += 1;
            max += obj[char]>max?1:0;
            target == obj[char]>max?'ttt':char;
        }else{
            obj[char] = 1;
        }
    }
    return `出现最多的字符是：${target}，次数是：${max}`
}

// console.log(getMaxcountStr1(str));

function getMaxcountStr2(str){
    let sortStr = str.split('').sort().join('');
    let max = 1;
    let target = sortStr[0];
    for (var i=0;i<sortStr.length;i++){
        let nums = sortStr.lastIndexOf(sortStr[i]) - i;
        if(nums>max){
            max = nums;
            target = sortStr[i];
        };
        i = sortStr.lastIndexOf(sortStr[i]);
    }
    return `出现最多的字符是：${target}，次数是：${max}`
}

// console.log(getMaxcountStr2(str));;

function getMaxcountStr3(str){
    let max = 1;
    let target = str[0];
    while(str){
        let oldLength = str.length;
        let char = str[0];
        let reg = new RegExp(char, 'g');
        str = str.replace(reg, '');
        if((oldLength - str.length) > max){
            max = (oldLength - str.length);
            target = char;
        }
    }
    return `出现最多的字符是：${target}，次数是：${max}`
}

console.log(getMaxcountStr3(str));