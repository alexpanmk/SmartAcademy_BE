const course = require('../daos/course');

module.exports = {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
    }

async function getCourses(req, res) {
    try {
        const courseData = await course.getCourses(req.query);
        res.json({courses: courseData})
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

async function getCourse(req, res) {
    try {
        const courseData = await course.getCourse(req.params.id);
        res.json({course: courseData})
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

async function createCourse(req, res) {
    try {
        const courseData = await course.createCourse(req.body);
        res.json(courseData);
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

async function updateCourse(req, res) {
    try {
        const courseData = await course.updateCourse(req.params.id, req.body);
        res.json(courseData);
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

async function deleteCourse(req, res) {
    try {
        const courseData = await course.deleteCourse(req.params.id);
        res.json(courseData);
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}
