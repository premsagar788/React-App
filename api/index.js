const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://premsaagar:s1SVgGol56zQZU3z@cluster0.fmbc2qk.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.create({username, password});
    res.json({ requestData: { username, password } });
});

app.listen(4000);


// 