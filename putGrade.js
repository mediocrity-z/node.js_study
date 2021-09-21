const fs = require('fs')
fs.readFile('./grade.txt', 'utf8',function (err, data) {
    if (err) {
        return console.log('文件读取失败' + err.message);
    }
    console.log('文件读取成功 ' + data);
    const res = data.split(' ')
    const arr=[]
    res.forEach((item)=>{
        arr.push(item.replace('=',': '))
    })
    const arr2= arr.join('\r\n')


    // 将整理好的成绩写入到新文件中
    fs.writeFile('./grade-ok.txt',arr2,'utf8',function(err){
   if(err){return console.log('文件写入失败'+err.message);}
   console.log('文件写入成功');
    })
})
