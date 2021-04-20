const questionsModel = require('../models/questions/questions-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
const findQuestionsForQuiz = (qzid) => questionsModel.findById(qzid)
const updateAnswer = (qid, answer) =>
    questionsModel.findByIdAndUpdate(qid, {$set:{answer:answer}})
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz,updateAnswer }