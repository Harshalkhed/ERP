const db = require('../configuration/db');

const AdminModel = {
    findAdminByUsername: (username, callback) => {
        const query = 'SELECT * FROM Admin WHERE username = ?';
        db.query(query, [username], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results[0]); 
        });
    },
};

module.exports = AdminModel;
