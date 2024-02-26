const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course');
const clerkSDK = require('@clerk/clerk-sdk-node');

const ClerkExpressRequireAuth = clerkSDK.ClerkExpressRequireAuth;

// GET /course
router.get('/', courseController.getCourse);

// POST /course
router.post('/', courseController.createCourse);

// PUT /course
router.post('/:id', courseController.updateCourseData);

// DELETE /course
router.delete('/:entryId', courseController.deleteCourse)

module.exports = router;


// //TODO: Remember to add middleware to check JWT permission
// router.get("/:entryId",securityMiddleware.checkPermission, journalController.getJournalEntry); // Specific entry by ID
// router.get("/", securityMiddleware.checkPermission, journalController.getJournalEntry); // General search or get all entries
// router.post("/create-journal-entry", securityMiddleware.checkPermission, journalController.createJournalEntry);
// //delete journal entry by id
// router.put("/:entryId",securityMiddleware.checkPermission, journalController.updateJournalEntry);
// router.delete("/:entryId",securityMiddleware.checkPermission, journalController.deleteJournalEntry);

