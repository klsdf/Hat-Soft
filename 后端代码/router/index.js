const express = require("express")
const nodemailer = require('nodemailer');
const router = express.Router()

const md5 = require('../util/md5')
const db = require('../db')

router.get('/userAccess', (req, res) => {
    
    db.run(`UPDATE Visited SET visitedNum = visitedNum + 1;`, function (err) {
        if (err) {
            return console.log(err.message);
        }
        console.log('成功增加 visitedNum 元素的值！');
        

    });
    db.get(`SELECT * FROM Visited;`, function(err, row) {
        if (err) {
            return console.log(err.message);
        }
        console.log(row)
        res.json({ visitedNum: row.visitedNum});
    });
})

router.get('/test', (req, res) => {
    // console.log();
    if (req.cookies.test) {

        res.send('欢迎登录');
    } else {
        // 如果不存在，则要求用户登录
        res.send('请登录');
    }


})


module.exports = router