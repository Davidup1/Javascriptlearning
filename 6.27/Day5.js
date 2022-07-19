// //点击区域循环变色功能实现
// let d1 = document.getElementById("d1");
// let d2 = document.getElementById("d2");
// let d3 = document.getElementById("d3");
// let d4 = document.getElementById("d4");

// let cal1 = 0;
// d1.onclick = function()
// {
//     let color = ["green","red","white"];
//     cal1 = (0 + cal1)%3;
//     d1.style.backgroundColor = color[cal1];
//     cal1 = cal1 + 1;
// }

// let cal2 = 0;
// d2.onclick = function()
// {
//     let color = ["green","red","white"];
//     cal2 = (0 + cal2)%3;
//     d2.style.backgroundColor = color[cal2];
//     cal2 = cal2 + 1;
// }

// let cal3 = 0;
// d3.onclick = function()
// {
//     let color = ["green","red","white"];
//     cal3 = (0 + cal3)%3;
//     d3.style.backgroundColor = color[cal3];
//     cal3 = cal3 + 1;
// }

// let cal4 = 0;
// d4.onclick = function()
// {
//     let color = ["green","red","white"];
//     cal4 = (0 + cal4)%3;
//     d4.style.backgroundColor = color[cal4];
//     cal4 = cal4 + 1;
// }

//结构赋值
let person = ["David","PJ","Zed","Stella"];
let [p1,p2,p3,p4] = person;
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

//标准字符串
let str = 
    		`<ul>
    <li>沈腾</li>
    <li>玛丽</li>
    <li>魏翔</li>
    <li>艾伦</li>
</ul>`;
console.log(str);

//spread扩展字符
//展开数组
let name = "David";
let res = `来了来了，${name}走来了！`;
console.log(res);

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];
console.log(arr3);

// 展开对象
let skillOne = {
    q: "致命打击"
};
let skillTwo = {
    w: "勇气"
};
let skillThree = {
    e: "审判"
};
let skillFour = {
    r: "德玛西亚正义"
};
let gailun = {...skillOne, ...skillTwo, ...skillThree, ...skillFour};
console.log(gailun);

