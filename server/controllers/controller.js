const AdminModel = require('../models/model');
const AdminController = {
    loginAdmin: (req, res) => {
     const { username, password } = req.body;
        AdminModel.findAdminByUsername(username, (err, admin) => {
            if (err) return res.status(404).json({ error: err.message });
            if (!admin) return res.status(404).json({ message: 'Admin not found' });
            if (admin.password !== password) {
                return res.status(401).json({ message: 'Incorrect password' });
            }
            res.json({ message: 'Login successful!', admin });
        });
    },
};

module.exports = AdminController;
