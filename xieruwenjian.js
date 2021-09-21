const fs=require('fs')
// 也可以直接创建出一个文件,但是不能创建路径;重复使用方法写入同一个文件，新写入的内容会覆盖旧内容
// 参数：文件路径，写入内容，编码格式，回调函数
fs.writeFile('./1.txt','欧力',function(err){
    if(err==null){return console.log('文件写入成功');}
    console.log('文件写入失败'+err.message);
})