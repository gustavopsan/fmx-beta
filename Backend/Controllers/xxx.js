const sql = require('../database.js');

const Form = (form) => {
    this.date = form.date;
    this.id = form.id;
};

Form.findByDate = (dateForm, result) => {
    sql.query(`SELECT * FROM fmxxx WHERE date = '${dateForm}'`, (err, res) => {
        if (err) {
            console.log(err);
        }

        if (res.length) {
            console.log('Found form: ', res[0]);
            return;
        };

    });
};

module.exports = Form;