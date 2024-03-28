const express = require('express');
const router = express.Router();
const { getList, getItemDetail, } = require('../controllers/listControllers');

router.get('/api/get', getList);

module.exports = router