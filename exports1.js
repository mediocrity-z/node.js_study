// module:每个.js自定义模块中都有一个module对象，存储了和当前模块有关的信息
// 在自定义模块中，可以使用module.exports对象，把模块中的成员共享出去供外界使用，默认情况下module.exports指向一个空对象
// 外界用require导入自定义模块时，得到的就是module.exports指向的对象
// exports对象是简化版，默认情况下它和module.exports指向的是同一个对象
// 但是最终向外共享的依然是module.exports指向的那个对象，以module.exports指向的对象为准

// exports和module.exports指向同一个对象
// console.log(exports===module.exports);
//true
const name='小明'
exports.name=name
module.exports.say=function(){
    console.log('hello');
}
exports.sex='男'



// 情况一
// exports.name='zs'
// module.exports={
// sex:'男',
// age:20
// }
// console.log(module.exports);
// 输出module.exports指向的对象，{ sex: '男', age: 20 }

// 情况二
// module.exports.name='zs'
// exports={
//     sex:'男',
//     age:20
// }
// console.log(module.exports);
// 输出{ name: 'zs' }

// 情况三
// exports.name='zs'
// module.exports.age=20
// console.log(module.exports);
// 输出{ name: 'zs', age: 20 }

// 情况四
// exports={
//     name:'zs',
//     sex:'男'
// }
// module.exports=exports
// module.exports.age=20
// console.log(module.exports);
// 输出{ name: 'zs', sex: '男', age: 20 }