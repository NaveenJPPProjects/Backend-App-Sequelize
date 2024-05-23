// server.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/routes');

app.use(express.json());
app.use(userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});