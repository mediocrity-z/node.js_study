// 定义格式化时间的函数
function dateFormat(t){
const dt=new Date(t)
const y=dt.getFullYear()
const m=pad(dt.getMonth()+1)
const d=pad(dt.getDate())
const h=pad(dt.getHours())
const minute=pad(dt.getMinutes())
const s=pad(dt.getSeconds())
return `${y}-${m}-${d} ${h}:${minute}:${s}`
}

// 对月日时分秒补0
function pad(n){
return n>9?n:'0'+n
}
module.exports={
    dateFormat
}