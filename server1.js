// 导入http模块
const http=require('http')
// 创建web服务器实例
const server=http.createServer()
// 绑定request事件监听客服端发送的请求，如果有人请求该服务器就会执行该回调函数
//1. req请求对象，包含了与客户端相关的数据和属性，req.url是客户端请求的url地址，req.method是客户端的method请求类型

// 2.res响应对象，包含了与服务器相关的数据和属性，例如res.end()方法可以向客户端发送指定的内容，并结束这次请求的处理过程
server.on('request',function(req,res){
console.log('someone visits our webserver');
console.log(req.url,req.method);

// 为了防止中文乱码的问题，需要手动设置响应头content-type值为text/html; charset=utf-8
res.setHeader('Content-type','text/html; charset=utf-8')
res.end('何超的爸爸，中午好')
})
// 启动服务器
server.listen(8080,()=>{
    console.log('server running at 127.0.0.1:8080');
})