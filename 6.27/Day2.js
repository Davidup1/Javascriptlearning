// //根据ID查找
// var res1 = document.getElementById("btn");
// console.log(res1);
// //根据标签名查找
// var res2 = document.getElementsByTagName("button");
// console.log(res2);
// //根据类名查找
// var res3 = document.getElementsByClassName("btn");
// console.log(res3);
// //用选择器查找
// var res1 = document.querySelector(".btn");
// console.log(res1);
// //创建一个列表用于存储所有符合的元素
// var res2 = document.querySelectorAll("ul li");
// console.log(res2);

// var res1 = document.getElementById("btn");
// var result = res1.innerText;
// console.log(result);
// var result = res1.innerHTML;
// console.log(result);

// var res2 = document.getElementById("body");
// var result = res2.innerHTML;
// console.log(result);

// var res3 = document.getElementById("a");
// console.log(res3.href);

// var res1 = document.getElementById("vital");
// //仅用于内联式的
// console.log(res1.style.width);
// //这种则用于另外两种形式
// console.log(getComputedStyle(res1,null).width);

// var btn = document.getElementById("btn");
// btn.innerText = "这个按钮已经被杀手皇后摸过了！";

// var a = document.getElementById("a");
// a.href = "https://www.baidu.com";
// console.log(a.href);

var ul = document.createElement("ul");

var li1 = document.createElement("li");
var text1 = document.createTextNode("列表1");
li1.appendChild(text1);

var li2 = document.createElement("li");
var text2 = document.createTextNode("列表2");
li2.appendChild(text2);

ul.appendChild(li1);
ul.appendChild(li2);

var uL = document.getElementById("a");
var b = document.getElementById("body");
b.insertBefore(ul,uL);