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

// //结构赋值
// let person = ["David","PJ","Zed","Stella"];
// let [p1,p2,p3,p4] = person;
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);

// //标准字符串
// let str = 
//     		`<ul>
//     <li>沈腾</li>
//     <li>玛丽</li>
//     <li>魏翔</li>
//     <li>艾伦</li>
// </ul>`;
// console.log(str);

// //spread扩展字符
// //展开数组
// let name = "David";
// let res = `来了来了，${name}走来了！`;
// console.log(res);

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [...arr1,...arr2];
// console.log(arr3);

// // 展开对象
// let skillOne = {
//     q: "致命打击"
// };
// let skillTwo = {
//     w: "勇气"
// };
// let skillThree = {
//     e: "审判"
// };
// let skillFour = {
//     r: "德玛西亚正义"
// };
// let gailun = {...skillOne, ...skillTwo, ...skillThree, ...skillFour};
// console.log(gailun);

// //创建 Symbol
// let s1 = Symbol();
// console.log(s1);
// console.log(typeof s1);

// //添加标识的 Symbol
// let s2 = Symbol("张三");
// let s2_2 = Symbol("张三");
// console.log(s2);
// console.log(s2_2);
// console.log(s2 === s2_2);

// //使用 Symbol for 定义
// let s3 = Symbol.for("张三");
// let s3_2 = Symbol.for("张三");
// console.log(s3);
// console.log(s3_2);
// console.log(s3 === s3_2);

// //在方法中使用 Symbol
// let game = {
//     name: "狼人杀",
//     [Symbol('say')]: function () {
//         console.log("我可以发言")
//     },
//     [Symbol('zibao')]: function () {
//         console.log('我可以自爆');
//     }
// };
// console.log(game);

// const arr = [1,2,3,4];

// for (let i of arr)
// {
//     console.log(i);
// }

// console.log("===================");

// let iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// function * gen() {
//     /*代码1开始执行*/
//     console.log("代码1执行了");
//     yield "一只没有耳朵";
//     /*代码2开始执行*/
//     console.log("代码2执行了");
//     yield "一只没有尾巴";
//     /*代码3开始执行*/
//     console.log("代码3执行了");
//     return "真奇怪";
// }

// let iterator = gen();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log("===============");

// //遍历
// for (let v of gen()) {
//     console.log(v);
// }

// let s = new Set([1,2,3]);
// console.log(s);

// console.log(s.size);
// console.log(s.has(1));

// //集合的操作执行
// console.log(s.add(4));//将参数添加到集合中并返回集合
// console.log(s.add(1));
// console.log(s.delete(1));//删除某元素并返回boolean值
// console.log(s.delete(5));
// console.log(s.clear());//清除集合并返回undefined

class fruit{
    constructor (color,juicy)
    {
        this.color = color;
        this.juicy = juicy;
    }
}

class apple extends fruit{
    constructor(color,juicy,name,price)
    {
        super(color,juicy);
        this.name = name;
        this.price = price;
    }
    buy()
    {
        console.log(`买一个${this.name}，价格为${this.price}元一斤。`);
    }
}

const apple1 = new apple("红色",true,"苹果",5);
apple1.buy();