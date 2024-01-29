// 引入 http 模块
const http = require('http');

// 创建一个服务器并定义对每个请求的响应
const server = http.createServer((req, res) => {
  // 设置响应头
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // 发送响应数据
  res.end('Hello, World!\n');
});

// 指定服务器监听的端口和所有可用的网络接口
const port = 3000;
const host = '0.0.0.0';

// 服务器开始监听
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
//直接可以用ipv4 来访问服务器