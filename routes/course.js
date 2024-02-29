const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course');
const clerkSDK = require('@clerk/clerk-sdk-node');

const ClerkExpressRequireAuth = clerkSDK.ClerkExpressRequireAuth;

// GET /course
router.get('/', courseController.getCourse);

router.get('/:entryId', courseController.getCourseById);

// POST /course
router.post('/', courseController.createCourse);

// PUT /course
router.post('/:id', courseController.updateCourseData);

// DELETE /course
router.delete('/:entryId', courseController.deleteCourse)

module.exports = router;


