const express = require('express');
const router = express.Router();

// nap function handler 'NewsController' vao
const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
