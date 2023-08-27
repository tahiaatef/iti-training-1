// task1

let a = 5, b = 6;
document.write(`a is ${a} ,b is ${b}`)
var temp=a
a=b
b=temp
document.writeln(`a is ${a} b is ${b}`);

// //task2

// let x=[3,1,6,2,10,0]
// document.writeln(`max is ${Math.max(...x)}`);
// document.writeln(`min is ${Math.min(...x)}`);

//task3

// var fruits = ["apple", "strawberry", "banana", "orange","mango"]
// for ( const i of fruits){
//     if (typeof(i)=="string"){
//         document.writeln("string")
//     }
//     else{
//         document.writeln("not string")
//     }
// }
// for (const i of fruits){
//     if (i[0].startsWith("a")){
//         document.writeln(i+" start with a")
//     }
// }
// let x =fruits.filter(i=>i.startsWith("b")||i.startsWith("s"))
// document.writeln(x)
// //new array
// var arr=fruits.map((i)=>{
//     return `I like ${i}`
// })

// arr=arr.forEach(i => {
//     document.writeln(i)
// });