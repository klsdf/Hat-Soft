const crypto = require("crypto")


module.exports = function md5(data) 
{
    return crypto.createHash('md5')
    .update(data)
    .digest("hex")
}