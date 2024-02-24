const express = require('express');
const router = express.Router();

// GET /courses
router.get('/', (req, res) => {
  // Logic to fetch all courses
  res.send('Get all courses');
});

// GET /courses/:id
router.get('/:id', (req, res) => {
  // Logic to fetch a specific course by ID
  res.send(`Get course with ID ${req.params.id}`);
});

// POST /courses
router.post('/', (req, res) => {
  // Logic to create a new course
  res.send('Create a new course');
});

// PUT /courses/:id
router.put('/:id', (req, res) => {
  // Logic to update a specific course by ID
  res.send(`Update course with ID ${req.params.id}`);
});

// DELETE /courses/:id
router.delete('/:id', (req, res) => {
  // Logic to delete a specific course by ID
  res.send(`Delete course with ID ${req.params.id}`);
});

module.exports = router;
