function Animal(){
    this.showName = function() {
        // console.log(this);
        console.log(this.name)
    }
    this.eat = function(food1, food2){
        // console.log(this);
        console.log('我喜欢吃'+food1+food2);
    }
}


let cat = {
    name: '芝麻'
}

//由于Animal构造函数没有name,所以指向window的name属性，这里是没有undefined
let dog = new Animal();
dog.showName();
console.log('--------------------------');


//call函数能改变原函数的this指向,这里将本来window的指向改变为了cat，cat有name属性如果没有就是undefined
dog.showName.call(cat,1);
console.log('--------------------------');

//call改变了eat的指向，参数可跟在后面一个个写，逗号分隔，这里改变了dog.eat的this指向，然后传了两个参数给它
dog.eat('猪', '肉');
dog.eat.call(cat, '鱼', '肉');
console.log('--------------------------');

//apply和bind的作用和call类似，apply只是接受参数的形式不同，需要传入一个数组，bind返回值不同
//bind不会直接调用这个指向函数，而是返回一个函数体，需要你再去调用

//这里是等于call的，只是传入参数的方式不一样
dog.eat.apply(cat, ['鱼', '肉']);
console.log('--------------------------');

//这里两行就等于上面的dog.eat.call(cat, '鱼', '肉');
let nfa = dog.eat.bind(cat, '鱼', '肉');
nfa();
console.log('--------------------------');