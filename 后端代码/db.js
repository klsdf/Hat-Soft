const sqlite3 = require('sqlite3').verbose()



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
    db.run(`CREATE TABLE IF NOT EXISTS  Visited(visitedNum INTEGER);`, function (err) {
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

    // 检查 Visited 表是否为空
    db.get(`SELECT COUNT(*) as count FROM Visited;`, function (err, row) {
        if (err) {
            return console.log(err.message);
        }

        if (row.count === 0) {
            // 当表为空时才插入记录
            db.run(`INSERT INTO Visited (visitedNum) VALUES (0);`, function (err) {
                if (err) {
                    return console.log(err.message);
                }
                console.log('成功插入 visitedNum 值为 0 的记录！');
            });
        } else {
            console.log('Visited 表不为空，无需插入记录。');
        }
    });

});

module.exports = db