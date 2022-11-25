const express = require('express');
const router = express.Router();

// nap function handler 'NewsController' vao
const courseController = require('../app/controllers/CourseController');

router.get('/:slug', newsController.show);
// router.get('/', newsController.index);

module.exports = router;
