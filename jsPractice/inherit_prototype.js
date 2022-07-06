//Es6的类继承
class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    login() {
        console.log('Es6登录'); 
    }
}

class Admin extends User {
    deleteUser() {
        console.log('Es6删除成员');
    }
}

var admin = new Admin('张三', '123456');
console.log(admin.username, admin.password);
admin.login();
admin.deleteUser();

//Es5的继承，Es5没有类，只有构造函数
function User1(username, password) {
    this.username = username;
    this.password = password;
    this.login = function() {
        console.log('Es5登录');
    }
}

function Admin1() {
    this.deleteUser = function() {
        console.log('Es5删除成员');
    }
}

//如果原型最顶端Object上定义了一个函数，如果该构造函数的原型链上没有该函数，会自动往上
//一直找，知道Object上位置，比如这里的show
Object.prototype.show = function() {
    console.log('给所有原型的方法');
}
Admin1.prototype = new User1('李四', '456789');
var admin1 = new Admin1();
console.log(admin1.username, admin1.password);
admin1.login();
admin1.deleteUser();
admin1.show();

//call继承，call可以改变函数的指向，所以也能改变构造函数的指向，用于继承

function User2(username, password) {
    this.username = username;
    this.password = password;
    this.login = function() {
        console.log('call登录');
    }
}

function Admin2(charactor, username, password) {
    this.charactor = charactor;
    User2.call(this, username, password);
    this.deleteUser = function() {
        console.log('call删除成员');
    }
}

var admin2 = new Admin2('超级管理员', '王二', '123789')
console.log(admin2.charactor ,admin2.username, admin2.password);
admin2.login();
admin2.deleteUser();
