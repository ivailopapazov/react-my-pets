const express = require('express');
const admin = require("firebase-admin");
const cors = require('cors');

const isAuthenticated = require('./authMiddleware');

var serviceAccount = require("./react-my-pets-firebase-adminsdk-u026e-1066f624a0.json");

const app = express();

app.use(cors());

app.get('/', isAuthenticated, (req, res) => {

    if (req.user.email != 'pesho@abv.bg') {

    }
    res.json({ ok: true });
});

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

app.listen(5001, console.log.bind(console, 'Server is running...'));
