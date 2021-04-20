
const quizzesModel = require('../models/quizzes/quizzes-model')
const findAllQuizzes = () => quizzesModel.find()
const findQuizById = (qid) => quizzesModel.findById(qid).populate('questions').exec()
module.exports = { findAllQuizzes, findQuizById }

