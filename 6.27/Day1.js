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

// function Person(name,age)
// {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.Setgender = function(gender)
// {
//     this.gender = gender;
// }

// function Student(name,age,score)
// {
//     Person.call(this,name,age);
//     this.score = score;
// }

// Student.prototype = new Person();
// Student.prototype.constructor = Student;
// Student.prototype.setScore = function(score)
// {
//     this.score = score;
// }

// var s = new Student('David',20,89.0);
// console.log(s);
// s.Setgender('M');
// s.setScore(100);
// console.log(s);

// s = null;

// var arr = [1,2,3];
// var result = arr.push(4,5,6);
// console.log(arr);
// console.log(result);

// var arr = [1,2,3];
// var result = arr.pop();
// console.log(arr);
// console.log(result);
// console.log(typeof result);

// forEach()方法演示
// var arr = [1,2,3,4,5,6,7,8];
// arr.forEach(function(value,index,obj){
//     console.log(value+'###'+index+'###'+obj);
// });
// var returnValue = arr.splice(0,2,'David','Zed');
// console.log(arr);
// console.log(returnValue);

// var arr = [2,6,1,3,11,7];
// arr.sort(function (a,b){
//     return a-b;
// });
// // 这个回调函数里面只要返回值大于零，就会发生一次左右调换。
// console.log(arr);

// function fun(a, b) {
//     console.log("a = " + a);
//     console.log("b = " + b);
//     console.log("fun = " + this);
// }

// var obj = {
//     name: "obj",
//     sayName: function () {
//         console.log(this.name);
//     }
// };

// fun(2, 3);
// console.log("===============");
// fun.call(obj, 2, 3);

// function fun(a,b)
// {
//     //打印两个参数
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     //打印参数的个数
//     console.log(arguments.length);
//     //打印调用这些参数的函数
//     console.log(arguments.callee);
//     console.log(arguments.callee==fun);
// }

// fun("a","b");

// //能够获取参数值对应索引值的字符
// var str = "hello world.";
// console.log(str.charAt(1));
// //能够获取参数值对应索引字符的Unicode编码
// var str = "abd";
// console.log(str.charCodeAt(0));
// //能够返回第一次出现指定字符的位置的索引值
// var str = "hello hello";
// console.log(str.indexOf("e"));
// //能够返回最后一次出现指定字符的位置的索引值
// var str = "hello hello";
// console.log(str.lastIndexOf("e"));
// //切片，对原字符串不造成影响
// var str = "abcdefghijk";
// console.log(str.slice(1,3));
// //分割，以参数里面的字符为界，分割后的结果存在一个数组里面
// var str = "hello,world.";
// console.log(str.split(","));
// //toUpperCase()将小写的字符全部转化为大写，toLowerCase()方法将所有字符都转为小写。
// var str = "hello,world";
// var STR = str.toUpperCase();
// var str = STR.toLowerCase();
// console.log(str);
// console.log(STR);

// // 这个正则表达式可以来检查一个字符串中是否含有a
// var exp = new RegExp("a","i");
// var str = "abcd";
// var result = exp.test(str);
// console.log(result);
// //字面量创建
// var exp = /a/i;
// var str = "abcd";
// var result = exp.test(str);
// console.log(result);
// //进阶的筛查方式
// var exp = /a|b/;
// var str = "Abc";
// var reg = /a/;
// var res1 = exp.test(str);
// var res2 = reg.test(str);
// console.log(res1);
// console.log(res2);
// var exp = /[A-z]/;
// var str = "a123";
// var res = exp.test(str);
// console.log(res);
// var reg = /[^0-9]/;
// var str = "abcd";
// var res = reg.test(str);
// console.log(res);

// var str = "1a2b3d4";
// var res = str.split(/[A-z]/);
// console.log(res);
// var str = "1a2a3a4a5e6f7A8B9C";
// var res = str.replace(/[A-z]/ig,"@_@");
// console.log(res);

// var str = "abbc";

// var reg1 = /[A-z]{3,}/;
// var res1 = reg1.test(str);
// var reg2 = /a{1}/;
// var res2 = reg2.test(str);

// console.log(res1);
// console.log(res2);

// var str = "abbc";

// var reg1 = /[A-z]+c?/;
// var res1 = reg1.test(str);
// var reg2 = /a*c?/;
// var res2 = reg2.test(str);

// console.log(res1);
// console.log(res2);

// var str = "abba";
// var reg1 = /^a/;
// var reg2 = /a$/;

// var res1 = reg1.test(str);
// var res2 = reg2.test(str);

// console.log(res1);
// console.log(res2);

// //创建一个正则表达式，去除掉字符串中的前后的空格
// var str = "  hello child  "
// var reg = /^\s*|\s*$/g;
// console.log(str);
// str = str.replace(reg, "");
// console.log(str);

// //创建一个正则表达式，检查一个字符串中是否含有单词child
// var str = "hello world";
// var reg = /child+/;
// var j = str.search(reg);
// if (j == -1)
// {
//     console.log("木大！");
// }
// else
// {
//     console.log("欧拉！");
// }