const express = require("express")
const nodemailer = require('nodemailer');
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
db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS  MessageBoard (message TEXT)");
    db.run(`CREATE TABLE IF NOT EXISTS  User(
	user_name    TEXT PRIMARY KEY,
	user_password   TEXT NOT NULL,
    user_email TEXT NOT NULL);`, function (err) {
        if (err) {
            return console.log(err.message)
        }
    })
    db.run(`
    CREATE TABLE IF NOT EXISTS VerifyCodeTable(
        email TEXT PRIMARY KEY, 
        code TEXT NOT NULL
      );
    `)
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
    let userEmail = req.body.user_email;
    let email_verification_code = req.body.regist_email_verification_code;

    db.get(`SELECT code FROM VerifyCodeTable WHERE email = ?`,
    [userEmail], (err, row) => {
      if (err) {
        return res.status(500).send('发生了错误');
      }
      // 若查找不到结果或者验证码不一致
      if (!row || row.code !== email_verification_code) {
        return res.status(500).send('验证码错误或不存在');
      }
      userPassword = md5(userPassword);
      // 向数据库中添加用户数据
      let sql = `INSERT INTO User (user_name, user_password,user_email) VALUES (?,?,?)`
      db.run(sql, [userName, userPassword,userEmail], (err) => {
          if (err) {
              return res.status(500).send('注册时发生错误喵'+err);
          }
          return res.status(200).send('成功');
      });
    });
});

router.get('/', (req, res) => {
    // console.log();

        res.send('你好喵');



})

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
            
            res.cookie('test', "我是cookie的value");
            res.send(`用户${userName}登录成功喵`)


        } else {
            res.status(500).send(); 
        
        }
    });
});


// 发送留言的接口
router.post('/liuyan', (req, res) => {
    let msg = req.body.message;
    console.log(`Received: ${msg}`);
    db.run(`INSERT INTO MessageBoard(message) VALUES(?)`, msg, function (err) {
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
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row.message);
        });
        res.json(rows);
    });
});



//邮件
router.post('/youjian', (req, res) => {

    let email = req.body.regist_email
    //发送前先随机一个验证码，存到邮箱里面
    let verifyCode = parseInt(Math.random() * 10000)

    //INSERT OR REPLACE 是 SQLite 数据库中的一种特殊语法。它属于 INSERT INTO 语句的一种扩展用法。
    db.run(`INSERT OR REPLACE  INTO VerifyCodeTable(email, code) VALUES(?, ?)`,[email, verifyCode], function (err) {
            if (err) {
                return console.log(err.message);
            }
            console.log('验证码已存入数据库');
        });


    // 创建可重用的邮件传输器
    let transporter = nodemailer.createTransport({
        service: 'qq', // 你的邮件服务提供商
        auth: {
            user: '1796655849@qq.com',    // 你的邮箱
            pass: 'caxbscfpcyrichge'  // 你的密码
        }
    });

    // 设置邮件选项
    let mailOptions = {
        from: '1796655849@qq.com',
        to: email,
        subject: '帽子社：请验收您的验证码',
        text: `欢迎登录帽子社！您的验证码是${verifyCode}`
    };

    // 发送邮件
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return res.status(500).send('邮件发送失败');
        } else {
            console.log('邮件状态' + info.response);
            return res.send('验证码已发送到你的邮箱');
        }
    });

});




module.exports = router