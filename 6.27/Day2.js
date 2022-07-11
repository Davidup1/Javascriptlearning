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

// var ul = document.createElement("ul");

// var li1 = document.createElement("li");
// var text1 = document.createTextNode("列表1");
// li1.appendChild(text1);

// var li2 = document.createElement("li");
// var text2 = document.createTextNode("列表2");
// li2.appendChild(text2);

// ul.appendChild(li1);
// ul.appendChild(li2);

// var uL = document.getElementById("a");
// var b = document.getElementById("body");
// b.insertBefore(ul,uL);

// window.onload = function () {
//     alert("hello world!");
// }

// window.onresize = function () {
//     alert("窗口大小正在改变。");
// }
//当文本框获取焦点，文本框背景为红色，当文本框失去焦点，文本框背景为白色
// var text = document.getElementById("text");
// text.onfocus = function ()
// {
//     text.style.backgroundColor = "red";
// }

// text.onblur = function ()
// {
//     this.style.backgroundColor = "white";
// }
// // //文本框内容改变时，鼠标离开文本框（所谓的离开文本框也就是文本框失焦），自动将文本框的内容输出到控制台
// // text.onchange = function ()
// // {
// //     console.log(this.value);
// // }
// // //当文本框内容改变时，立即将改变的内容输出到控制台
// // text.oninput = function ()
// // {
// //     console.log(this.value)
// // }
// //
// var sub = document.getElementById("submit");

// sub.onclick = function ()
// {
//     if( text.value == "")
//     {
//         alert("喂，什么都不写总不太好的");
//     }
//     else 
//     {
//         console.log(text.value);
//         alert("表单已提交");
//     }
// }

// window.onkeydown = function (event)
// {
//     var speed = 100;
//     var event = event;
//     if (event.keyCode == 37)
//     {
//         if(event.ctrlKey)
//         {
//             alert("松开‘ctrl’");
//         }
//         box.style.left = box.offsetLeft - speed +"px";
//     }
//     if (event.keyCode == 39)
//     {
//         if(event.ctrlKey)
//         {
//             alert("松开‘ctrl’");
//         }
//         box.style.left = box.offsetLeft + speed +"px";
//     }
//     if (event.keyCode == 38)
//     {
//         if(event.ctrlKey)
//         {
//             alert("松开‘ctrl’");
//         }
//         box.style.top = box.offsetTop - speed +"px";
//     }
//     if (event.keyCode == 40)
//     {
//         if(event.ctrlKey)
//         {
//             alert("松开‘ctrl’");
//         }
//         box.style.top = box.offsetTop + speed +"px";
//     }

// }

var box = document.getElementById("vital");
box.onmouseenter = function()
{
    box.style.backgroundColor = "green";
}

box.onmouseleave = function ()
{
    box.style.backgroundColor = "red";
}

box.onmousedown = function(event)
{
    var event = event;

    var ol = event.clientX - box.offsetLeft;
    var ot = event.clientY - box.offsetTop;

    box.onmousemove = function (event)
    {
        var event = event;
        var left = event.clientX - ol;
        var top = event.clientY - ot;

        box.style.left = left + "px";
        box.style.top = top + "px";
    };
    box.onmouseup = function()
    {
        box.onmousemove = null;
    }  //防止松开之后还能拖动
}
