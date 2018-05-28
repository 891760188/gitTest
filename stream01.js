var fs = require("fs");
var data = '';
// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error  当有数据可读时触发。
readerStream.on('data', function(chunk) {
	console.log('data='+chunk);
   data += chunk;
});
//没有更多的数据可读时触发。
readerStream.on('end',function(){
	console.log('end')
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});
//所有数据已被写入到底层系统时触发。
readerStream.on('finish ', function(err){
   console.log(finish );
});

console.log("程序执行完毕");