const courseModel = require('../models/course');

module.exports = {
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
    }

async function getCourse(req, res) {
    console.log(req.query)
    try {
        const courseData = await courseModel.getCourse(req.query);
        res.json({courses: courseData})
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}



async function createCourse(req, res) {

    console.log(req.body)
    try {
        const courseData = await courseModel.createCourse(req.body);
        res.json(courseData);
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

async function updateCourse(req, res) {
    try {
        const courseData = await courseModel.updateCourse(req.params.id, req.body);
        res.json(courseData);
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

async function deleteCourse(req, res) {
    try {
        const courseData = await courseModel.deleteCourse(req.params.id);
        res.json(courseData);
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

