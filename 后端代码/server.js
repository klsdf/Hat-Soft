
// npm install express --save
// npm install sqlite3 --save
// npm install cookie-parser --save

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3000

let app = express()

app.use(cors()) 
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(require("./router"))


app.use((err, req, res, next) => {
    res.status(500).send('发生错误喵')
})

app.listen(PORT, () => {
    console.log(`服务器启动喵，端口为 ${PORT}`)
})


