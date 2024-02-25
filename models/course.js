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
    return course.create(courseData);
}

async function updateCourse(entryID, entryData) {
    console.log(entryID);
    return course.findByIdAndUpdate(entryID, entryData, {new: true});
}

// Update a journal entry
// function updateJournalEntry(entryId, entryData) {
//     return JournalEntry.findByIdAndUpdate(entryId, entryData, { new: true }); // { new: true } returns the updated document
// }

async function deleteCourse(courseId) {
  

       return course.findByIdAndDelete(courseId);

}
