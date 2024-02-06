const express = require("express")
const nodemailer = require('nodemailer');
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const md5 = require('../util/md5')
const db = require('../db')

router.delete('/user/:name', (req, res) => {
    const userName = req.params.name;

    if (!userName) {
        return res.status(400).json({ error: '没有找到名字捏' });
    }

    let sql = 'DELETE FROM User WHERE user_name = ?';

    db.run(sql, [userName], (err) => {
        if (err) {
            throw err;
        }
        res.json({ success: true });
    });
});


router.get('/get_all_user', (req, res) => {

    db.get(`SELECT * FROM User; `, (err, row) => {
        if (err) {
            return res.status(500).send('发生了错误');
        }
        return res.status(200).send(row);
    });
});


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