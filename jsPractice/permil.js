var num = 1234567.891011;

function permil(num){
    const nums = num.toString().split('.');
    const ints = nums[0].split('');
    const floats = nums[1]?nums[1].split(''):[];
    function getInt(snum){
        return (snum.reduce((total,value,index) => {
            return total +''+(index%3?value:','+`${value}`)
        },'')).replace(/^,/g,'')
    }
    const intRes = getInt(ints);
    function getFloat(snum){
        return (snum.reduceRight((total,value,index) => {
            return total + '' + (index%3?value:`${value}`+',')
        },'')).replace(/,$/g,'')
    };
    const floatRes = getFloat(floats);
    const result = intRes + '.' + floatRes;
    console.log(result);
}
permil(num);
