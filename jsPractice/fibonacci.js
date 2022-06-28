function pf(n){
    if(!(typeof n === 'number' && n%1 === 0 && n>=1)) return '请输入大于1整数';
    n = parseInt(n);
    function fb(m){
        if(m<=1){
            return 1
        }else{
            return fb(m-2) + fb(m-1)
        }
    };
    return fb(n)
}

console.log(pf(2))
