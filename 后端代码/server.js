
// npm install express --save
// npm install sqlite3 --save
// npm install cookie-parser --save


let express = require('express')
let sqlite3 = require('sqlite3').verbose()
const cookieParser = require('cookie-parser');

let app = express()

// let cors = require('cors')
// app.use(cors()) // 使用 CORS 中间件

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // 允许所有来源的访问
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // 允许的请求头
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // 允许的请求方法
    next();
});
app.use(cookieParser());
// Step 3: 配置数据库
let db = new sqlite3.Database('database.db', (err) => {
    if (err) {
        return console.error(err.message)
    }

    console.log('Connected to the in-memory SQlite database.')
})

// Step 4: 为Express的应用设置端口
const PORT = 3000

// Step 5: 创建数据库表
db.run(`
CREATE TABLE YingxueUser(
	user_name    TEXT PRIMARY KEY,
	user_password   TEXT NOT NULL);`, function(err) {
    if (err) {
        return console.log(err.message)
    }

    console.log('Table created successfully!')
})



// Step 6: 配置中间件
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Step 7: 配置路由处理器
// GET请求
app.get('/', (req, res) => {
    // console.log();
    if (req.cookies.test) {
        // 如果存在，则返回欢迎消息
        // res.send('欢迎登录，' + req.cookies.test);
        res.redirect('http://127.0.0.1:5500/%E5%89%8D%E7%AB%AF/index.html');

      } else {
        // 如果不存在，则要求用户登录
        res.send('请登录');
      }
    

})

// POST请求
app.post('/register', (req, res) => {
    let userName = req.body.user_name;
    let userPassword = req.body.user_password;

    // 向数据库中添加用户数据
    let sql = `INSERT INTO YingxueUser (user_name, user_password) VALUES (?, ?)`
    db.run(sql, [userName, userPassword], (err) => {
        if (err) {
           return res.status(500).send('An error occurred during registration.');
        }
    });
    res.send("User registered successfully.")
});

// 登录请求
app.post('/login', (req, res) => {
    let userName = req.body.user_name;
    let userPassword = req.body.user_password;
    
    // 从数据库中查找用户
    let sql = `SELECT * FROM YingxueUser WHERE user_name = ? AND user_password = ?`;
    db.get(sql, [userName, userPassword], (err, row) => {
        if (err) {
           return res.status(500).send('An error occurred during login.');
        }
        if (row) {
            res.cookie('test', "我是cookie的value");
            // res.send('Login successful!')
            console.log('Login successful!')
            res.redirect('http://127.0.0.1:5500/%E5%89%8D%E7%AB%AF/index.html');
        } else {
            res.send('Invalid username or password.')
        }
    });
});
// Step 8: 启动服务
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// Step 9: 错误处理
app.use((err, req, res, next) => {
    res.status(500).send('Something broke!')
})

// 你是一位职业nodejs程序员，你现在需要竭力为我服务，帮我写一个nodejs的服务器程序。你需要尽可能注释代码。