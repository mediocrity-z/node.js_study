const http=require('http')
const path = require('path')
const fs=require('fs')
const server=http.createServer()
server.on('request',function(req,res){
    console.log('someone visits this server');
    const url=req.url
    // 请求的url地址
    const fpath=path.join(__dirname,url)
    res.setHeader('Content-type','text/html; charset=utf-8')

    // 读取文件的内容并响应给客户端
    fs.readFile(fpath,'utf8',function(err,data){
        if(err){return res.end('404')}
        // 读取文件成功
        res.end(data)
    })
})
server.listen(7900,()=>{
    console.log('server running at 127.0.0.1:7900');
})