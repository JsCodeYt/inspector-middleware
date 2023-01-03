const jwt = require('jsonwebtoken')

class inspertor {
    constructor(option) {
        this.username = option.admin.username
        this.password = option.admin.password
        console.log(option)
    }
    validate_user(req, res, next) {
        if (req.body.username && req.body.password) {
            if (req.body.username == this.username && req.body.password == this.password) {
                const admin_token = jwt.sign({
                    username: req.body.username,
                    password: req.body.password,
                }, "admin_secret_dir")
                return res.status(200).json({
                    status: "🆗",
                    message: "👮 you are the administrator of this platform",
                    token: admin_token
                })
            }
            next()
        } else {
            return res.status(403).json({
                status: "validate error ! && bad",
                message: "🟥 rows not filled or no data available!"
            })
        }
    }
}

module.exports = inspertor