const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// Define a schema for Quiz Questions
const ContentItemSchema = new Schema({
  
  questionType:{
    type: String,
    required: true
  },

  questionText: {
    type: String,
    required: false
  },
  options: [{
    type: String,
    required: false
  }],
  correctAnswer: {
    type: String,
    required: false
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
  //Learner score for the quiz, if score exist learner completes the course
  score: {
    type: Number,
    required: false
  },
  // createdBy: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  questions: [ContentItemSchema] // Embedding questions directly in the quiz document
});

// Compile the schema into a model
const Quiz = mongoose.model('Question', ContentItemSchema);

module.exports = mongoose.model('Course', CourseSchema);
  



