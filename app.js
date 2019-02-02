const express = require('express');
const app = express();
const db = require('./db');
const AuthController = require('./auth/AuthController');
const UserController = require('./user/UserController');

app.use('/users', UserController);
app.use('/api/auth', AuthController);

module.exports = app;
