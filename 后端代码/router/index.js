const express = require("express")
const nodemailer = require('nodemailer');
const router = express.Router()

const md5 = require('../util/md5')



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