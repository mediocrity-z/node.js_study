// const dt=new Date()
// console.log(dt);
// 2021-09-20T14:13:47.344Z

// 1.自定义模块的格式化时间的方法
// const time=require('./dateFormat')
// 调用dateFormat方法后
// const dt1=time.dateFormat(dt)
// console.log(dt1);
// 2021-09-20 22:15:07

// 2.安装moment包对时间进行格式化
const moment=require('moment')
// 使用api
const dt=moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt);
// 2021-09-20 22:21:51