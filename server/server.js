const express = require('express');

const cors = require('cors');
const adminRoutes = require('./routes/route');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', adminRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
