const express = require('express');
const router = express.Router();

// nap function handler 'SiteController' vao
const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
