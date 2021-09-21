// 默认情况下，module.exports=空对象
module.exports.username='何超'
module.exports.say=function(){
console.log('hello');
}
const age=20
module.exports.age=age

// 指向新对象
// module.exports={
//     name:'欧力',
//     age:18
// }