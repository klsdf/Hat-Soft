const express = require('express');
const app = express();
const PORT = 3000;

// 创建一个GET路由处理程序
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器启动，端口为 ${PORT}`);
});