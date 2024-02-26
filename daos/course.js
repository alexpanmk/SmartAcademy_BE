const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// Define a schema for Quiz Questions
const QuestionSchema = new Schema({
  questionText: {
    type: String,
    required: true
  },
  //MCQ, YoutubeLink, Text
  questionType: {
    type: String,
    required: true
  },
  options: [{
    type: String,
    required: true
  }],
  correctAnswer: {
    type: String,
    required: true
  }
});

// Define the main Quiz Schema
const CourseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // createdBy: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  questions: [QuestionSchema] // Embedding questions directly in the quiz document
});

// Compile the schema into a model
const Quiz = mongoose.model('Question', QuestionSchema);

module.exports = mongoose.model('Course', CourseSchema);
  



