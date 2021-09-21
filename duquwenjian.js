const fs=require('fs')
// 调用fs.readFile()读取文件
// 形参1文件的存放路径,形参2读取文件时的编码格式,形参3回调函数，拿到读取成功和失败的结果
// fs.readFile('./1.txt','utf8',function(err,data){
//     console.log(err);
//     console.log(data);
// })
// 若读取成功，err的值为null，data值正常显示
// 若读取失败，err的值为错误对象，data值为undefined

// 判断读取文件是否成功
// fs.readFile('./1.txt','utf8',function(err,data){
// if(err){
//     // return 结束后面的语句执行
//     return console.log('文件读取失败');
// }
// console.log('文件读取成功'+data);
// })

// 如果提供的操作路径是以./或../开头的相对路径，代码会在运行时执行node命令时所处的目录，动态拼接出操作文件的完整路径
// 解决方法：使用完整路径代替相对路径..\\..\\..

// 还有种解决方法是__dirname，表示当前文件的所处目录
console.log(__dirname);

fs.readFile(__dirname+'/1.txt','utf8',function(err,data){
if(err){return console.log('读取文件失败'+err.message);}
console.log('读取文件成功 '+data);
})