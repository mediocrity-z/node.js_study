const path=require('path')
// path.basename()可以获取路径中的文件名，参数1表示一个路径的字符串，参数2可选，表示拓展名
const fpath='/Desktop/node/1.txt'
const fn=path.basename(fpath)
console.log(fn);
// 1.txt
const fn2=path.basename(fpath,'.txt')
console.log(fn2);
// 1

// path.extname方法可以获取文件的拓展名
const ext=path.extname(fn)
console.log(ext);
// .txt