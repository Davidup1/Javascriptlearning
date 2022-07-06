// var age; //声明age变量
// // 弹出输入框
// prompt('请输入你的年龄：');
// // 弹出警示框
// alert('那么计算的年龄是');
// // 控制台输出
// console.log('我是程序员看到的');
// myname = prompt('请输入你的名字：');
// alert('欢迎你，'+myname+'！');
// str = prompt(myname+'，请输入你的年龄：');
// age = 2022-Number(str)+1;
// alert(myname+'，你今年'+String(age)+'岁了。');
// myname = prompt('来着何人？');
// gender = prompt('男的女的？');
// age = prompt('今年几岁啊?');
// alert('你的名字是：'+myname+'\n'+'你的性别是：'+gender+'\n'+'你的年龄是：'+age);
// if (gender == '男的')
// {
//     alert('hjh,是男的');
// }
// alert('喂！才几岁啊，就来网吧！');
// var age = prompt('到底几岁啊？');
// if (Number(age)>=18)
// {
//     alert('请进请进！');
// }
// if (Number(age)<18)
// {
//     alert('铁咩，等毛长齐了再来！');
// }

// var person = new Object();
// person.name = 'David';
// person.weight = 53;
// console.log(person);
// delete person['weight'];
// console.log(person);

// var person =
//     {
//         name:'David',
//         weight:53,
//         height:172
//     };
// for (var personAttr in person )
//     {
//         var personValue = person[personAttr];
//         console.log(personAttr+':'+personValue+'\n');
//     }
// person2 = person;
// person2.name = 'Zed';
// for (var personAttr in person )
//     {
//         var personValue = person[personAttr];
//         console.log(personAttr+':'+personValue+'\n');
//     }

// 工厂方法创建对象
// function createperson(name,age)
// {
//     var obj =new Object();
//     obj.name = name;
//     obj.age = age;
//     obj.printperson = function()
//     {
//         console.log(this.name+'\n');
//     }
//     return obj;
// }

// person1 = createperson('David',20);
// person2 = createperson('Zed',20);
// person3 = createperson('PJ',20);

// person1.printperson();
// person2.printperson();
// person3.printperson();

//构造函数来创建对象
// function Person(name,age)
// {
//     this.name = name;
//     this.age = age;
//     this.printperson = function()
//     {
//         console.log(this.name+'\n');
//     }
// }

// person1 = new Person('David',20);
// person2 = new Person('Zed',20);
// person3 = new Person('PJ',20);

// console.log(person1.toString());
// console.log(person2.toString());
// console.log(person3.toString());
// console.log(person1 instanceof Person);

// 字符串
// var str = "Hello";
// console.log(str.toString());

// // 数字
// var num = 15.26540;
// console.log(num.toString());

// // 布尔
// var bool = true;
// console.log(bool.toString());

// // Object
// var obj = {name: "张三", age: 18};
// console.log(obj.toString());

// // 数组
// var array = ["CodePlayer", true, 12, -5];
// console.log(array.toString());

// // 日期
// var date = new Date(2013, 7, 18, 23, 11, 59, 230);
// console.log(date.toString());

// // 错误
// var error = new Error("自定义错误信息");
// console.log(error.toString());

// // 函数
// console.log(Function.toString());

function Person(name,age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.Setgender = function(gender)
{
    this.gender = gender;
}

function Student(name,age,score)
{
    Person.call(this,name,age);
    this.score = score;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;
Student.prototype.setScore = function(score)
{
    this.score = score;
}

var s = new Student('David',20,89.0);
console.log(s);
s.Setgender('M');
s.setScore(100);
console.log(s);

s = null;