const express = require('express');
const router = express.Router();

// nap function handler 'SiteController' vao
const siteController = require('../app/controllers/SiteController');


router.use('/search', siteController.search);
router.use('/', siteController.index);



module.exports = router;
