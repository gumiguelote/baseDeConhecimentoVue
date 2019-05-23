//sem consign
//const user = require('../api/user')

module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
}