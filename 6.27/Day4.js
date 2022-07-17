// if(confirm("真的要进入这个网站吗？"))
// {
//     console.log("欢迎欢迎");
// }
// else
// {
//     console.log("拜拜了您内！");
// }
// var person = prompt("请输入你的名字","爱吃炸鱼的薯条");
// if(person != null)
//     {
//         console.log(person);
//     }

// var btn = document.getElementById("btn");

// btn.onclick = function()
// {
//     var timer = setInterval(function(){
//         console.log("hello world");
//     },1000);
// }

// window.resizeTo(100,100);

// var ua = navigator.userAgent;
// console.log(ua);

// if(/chrome/i.test(ua))
// {
//     console.log("谷歌浏览器");
// }

// try 
// {
//     console.log(a);
// }
// catch(error)
// {
//     console.log(error);
// }
// finally
// {
//     console.log("不管怎么样都会执行");
// }


// var json = '{"name":"David","age":20,"location":"Beijing"}';

// console.log(json);

// var obj = JSON.parse(json);
// console.log(obj);

// var json1 = JSON.stringify(obj);
// console.log(json1);

// var ajax = new XMLHttpRequest();
// //准备好哟啊发送的请求，第一个参数是请求类型，第二个参数是数据的url
// ajax.open("get","./Day4.json");
// //在此处发送请求
// ajax.send();
// //然后看状态，状态量变化的时候执行函数
// ajax.onreadystatechange = function ()
// {
//     console.log(ajax.readyState);
//     if(ajax.readyState == 4||ajax.status == 200)
//     {
//         console.log(ajax.responseText);
//     }
// }


// var ajax = new XMLHttpRequest();
// //准备好哟啊发送的请求，第一个参数是请求类型，第二个参数是发送的目标地址
// ajax.open("post",url);
// //post请求还要加上请求头
// ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// //在此处发送请求,参数为要发送的内容
// ajax.send("");
// //然后看状态，状态量变化的时候执行函数
// ajax.onreadystatechange = function ()
// {
//     if(ajax.readyState == 4||ajax.status == 200)
//     {
//         console.log(ajax.responseText);
//     }
// }

document.cookie = "username=zhangsan; expires=Thu, 18 Dec 2043 12:00:00 GMT";
var cookies = document.cookie;
console.log(cookies);
document.cookie = "username=David";
var cookies = document.cookie;
console.log(cookies);

var timer = new Date();
timer.setTime(timer.getTime());
console.log(timer.getTime());
console.log(timer.toGMTString());
