const express = require("express")

const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const md5 = require('../util/md5')

// Step 3: 配置数据库
let db = new sqlite3.Database('database.db', (err) => {
    if (err) {
        return console.error(err.message)
    }

    console.log('数据库已连接')
})

//serialize用于确保数据库操作（如执行SQL语句）按照顺序执行。
db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS  MessageBoard (message TEXT)");
    db.run(`CREATE TABLE IF NOT EXISTS  User(
	user_name    TEXT PRIMARY KEY,
	user_password   TEXT NOT NULL); `, function (err) {
    if (err) {
        return console.log(err.message)
    }
})
});






router.get('/test', (req, res) => {
    // console.log();
    if (req.cookies.test) {
        
        res.send('欢迎登录');
      } else {
        // 如果不存在，则要求用户登录
        res.send('请登录');
      }
    

})


router.post('/register', (req, res) => {
    let userName = req.body.user_name;
    let userPassword = req.body.user_password;
    userPassword = md5(userPassword)
    // 向数据库中添加用户数据
    let sql = `INSERT INTO User (user_name, user_password) VALUES (?, ?)`
    db.run(sql, [userName, userPassword], (err) => {
        if (err) {
           return res.status(500).send('注册时发生错误喵');
        }
    });
    console.log('注册成功喵')
    res.status(200).send('成功');
});

// 登录请求
router.post('/login', (req, res) => {
    let userName = req.body.user_name;
    let userPassword = req.body.user_password;
    userPassword = md5(userPassword)
    // 从数据库中查找用户
    let sql = `SELECT * FROM User WHERE user_name = ? AND user_password = ?`;
    db.get(sql, [userName, userPassword], (err, row) => {
        if (err) {
           return res.status(500).send('An error occurred during login.');
        }
        if (row) {
            console.log(`用户${userName}登录成功喵`)
            res.cookie('test', "我是cookie的value");
            res.send('登录成功')
            
           
        } else {
            res.send('无此人，用户名或者密码出错')
        }
    });
});


// 发送留言的接口
router.post('/liuyan', (req, res) => {
    let msg = req.body.message;
    console.log(`Received: ${msg}`);
    db.run(`INSERT INTO MessageBoard(message) VALUES(?)`, msg, function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Message saved with rowid ${this.lastID}`);
    });
    res.send("Message received");
});

// 查看留言的接口
router.get('/liuyan', (req, res) => {
    let limit = req.query.limit || 100; // 默认值为100，如果没有提供
    let offset = req.query.offset || 0; // 默认值为0，如果没有提供
    let sql = `SELECT * FROM MessageBoard ORDER BY rowid ASC LIMIT ? OFFSET ?`;
    
    db.all(sql, [limit, offset], (err, rows) => {
        if(err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row.message);
        });
        res.json(rows);
    });
});


module.exports = router