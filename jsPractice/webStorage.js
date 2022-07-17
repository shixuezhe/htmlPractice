// 添加本地储存，接受的值只能是字符串
window.localStorage.setItem('person1', JSON.stringify({name:'jack', age:18}));

//读取本地储存，返回的值都是字符串
window.localStorage.getItem('person1');


// 删除本地储存
window.localStorage.removeItem('person1')


//删除所有的本地储存
window.localStorage.clear()

//根据索引找本地储存值，可以用localStorage.length匹配
window.localStorage.key(0)


//localStorage需要在有主动事件的时候才会清除(如清空缓存，或者调用了清除函数等),
//这是sessionStorage的区别,sessionStorage则是在关闭页面的时候就会被清除了


// 添加会话储存，接受的值只能是字符串
window.sessionStorage.setItem('person2', JSON.stringify({name:'rose', age:18}));

//读取会话储存，返回的值都是字符串
window.sessionStorage.getItem('person2');


// 删除会话储存
window.sessionStorage.removeItem('person2')


//删除所有的会话储存
window.sessionStorage.clear()

//根据索引找会话储存值，可以用sessionStorage.length匹配
window.sessionStorage.key(0)