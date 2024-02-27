const sendResponse = require('../helpers/sendResponse');
const courseModel = require('../models/course');


module.exports = {
    getCourse,
    getCourseById,
    createCourse,
    updateCourseData,
    deleteCourse
    }

async function getCourse(req, res) {
   
    try {
        const courseData = await courseModel.getCourse(req.query);
        res.json({courses: courseData})
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

async function getCourseById(req, res) {
    console.log("FindbyID")

    try {
        const courseData = await courseModel.getCourseById(req.params.entryId);
        res.json(courseData);
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

async function updateCourseData(req, res) {
    console.log(req.param)
    const { id } = req.params;
    try {
        const courseData = await courseModel.updateCourse(id, req.body);
        res.json(courseData);
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

async function deleteCourse(req, res) {
    try {
        const courseData = await courseModel.deleteCourse(req.params.entryId);
        res.status(204).json(courseData);
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

