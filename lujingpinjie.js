const path=require('path')
// path.join方法可以拼接路径的字符串
// ../会抵消前面的路径
const str1=path.join('/a','../','/b','/c')
console.log(str1);
//\b\c

const str2=path.join(__dirname,'/1.txt')
console.log(str2);
// C:\Users\ASUS\Desktop\node\1.txt