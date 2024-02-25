const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course');

// GET /courses
router.get('/', courseController.getCourse);

// POST /courses
router.post('/', courseController.createCourse);

module.exports = router;
