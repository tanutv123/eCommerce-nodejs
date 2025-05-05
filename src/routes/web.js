const express = require('express');
const { getHomepage, getSamplePage } = require('../controllers/homeController');
const router = express.Router();

// router.get('/', getHomePage);

router.get('', getHomepage);

router.get('/sample', getSamplePage);

module.exports = router;