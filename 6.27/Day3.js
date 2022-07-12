var div1 = document.getElementById("div1");
div1.onclick = function()
{
    console.log("this is div1.");
    stopBubble();
}

var div2 = document.getElementById("div2");
div2.onclick = function()
{
    console.log("this is div2.");
    stopBubble();
}

var stopBubble = function(event)
{
    if (event && event.stopPropagation)
    {
        event.stopPropagation();
    }
    else
    {
        window.event.cancelBubble = true;
    }
}

var a = document.getElementById("a");
a.onclick = function ()
{
    stopDefault();
}

// 阻止浏览器的默认行为
function stopDefault(event) {
    if (event && event.preventDefault) {
        // 阻止默认浏览器动作(W3C)
        event.preventDefault();
    } else {
        // IE中阻止函数器默认动作的方式
        window.event.returnValue = false;
    }
    return false;
}

var al = document.querySelectorAll(".al");

for (var i =0;i<al.length;i++)
{
    al[i].onclick = function ()
    {
        stopDefault();
    }
}


var ul = document.getElementById("ul");
ul.onclick = function(event)
{
    event = event;
    if (event.target.className == "al")
    {
        console.log("点到链接辣");
    }
    else
    {}
}