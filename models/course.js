const course = require('../daos/course');

module.exports = {
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
    }

async function getCourse(queryFields) {
   return course.find(queryFields);
}



async function createCourse(courseData) {
    return course.create(courseData)
}

async function updateCourse() {
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
