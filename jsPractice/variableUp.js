//复制到控制台查看
(function() {
    a = 5;
    console.log(window.a);
    var a;
    a = 10;
    console.log(a)
})();
// (function(){
//     var a;
//     a = 5;
//     console.log(window.a);
//     a = 10;
//     console.log(a);
// })

(function(){
    console.log(1, foo);
    console.log(2, bar);
    var foo = 'hello';
    var bar = function(){
        return 'this is bar'
    };
    console.log(3, foo);
    function foo() {
        return 'this is foo'
    }
    console.log(4, bar);
})()

// (function(){
//     function foo(){
//         return 'this is foo'
//     }
//     //function 会被提升到最上面，高于变量，且不会被单纯的声明不赋值所替换
//     var foo,bar;
//     console.log(1, foo);
//     //此时foo还是原函数，没有赋值的声明var不影响输出foo()
//     console.log(2, bar);
//     //ba由于不是function 直接声明，所以不存在提升函数，只有一个空变量声明
//     foo = 'hello';
//     console.log(3, foo);
//     bar = function() {
//         return 'this is bar'
//     }
//     console.log(4,bar)
// })
var t = 10;
(function() {
    console.log(t,window.t);
    //输出undefined 10，var提升到最前面，先找最近的局部变量t,window里的t不是一个东西了
    t = 11;
    console.log(t,window.t);
    //输出11 10
    var t = 12;
    console.log(t,window.t);
    //输出12 10
})()