const express = require("express")
const nodemailer = require('nodemailer');
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const md5 = require('../util/md5')
const db = require('../db')

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

router.delete("/allLiuYan", (req, res) => {
    let sql = `DELETE FROM MessageBoard;`;

    db.run(sql, (err) => {
        if (err) {
            throw err;
        }
        res.json({ success: true });
    });
});
module.exports = router
