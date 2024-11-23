const express = require('express');
const router = express.Router();
const { postLogin } = require('../controllers/listControllers');

router.post('/api/login', postLogin);

module.exports = router