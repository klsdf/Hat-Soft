
// npm install express --save
// npm install sqlite3 --save
// npm install cookie-parser --save
//npm install nodemailer --save

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


    res.status(err.status || 500);
    // // 渲染错误处理页
    // res.render('error', {
    //     message: err.message,
    //     error: err,
    //     layout: false
    // });
    
    res.send(err.message)

})

app.listen(PORT, () => {
    const serverAddress = app._router.stack[0].handle
   
    console.log(`服务器启动喵，端口为 ${PORT}`)
})


