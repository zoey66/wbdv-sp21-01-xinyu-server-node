// const questions = require("./questions.json")
const questionsModel = require("../../models/questions/questions-model")

const createQuestion = () => {}
const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
    return questionsModel.find()
    // return questions
}

const findQuestionsForQuiz = (qzid) => {
    return questionsModel.find({quizId: qzid})
    // return questions.filter((question) => {
    //     return question.quizId === qzid;
    // })
}
const findQuestionById = (qid) => {
    return questionsModel.findById(qid)
    // return questions.find((question) => {
    //     return question._id === quid;
    // })
}

const updateAnswer = (qzid, answer) => {
    return questionsModel.findByIdAndUpdate(qzid, {$set: {answer: answer}})
}
const deleteQuestion = () => {}

module.exports = {

    findAllQuestions, findQuestionById,
    findQuestionsForQuiz,
    updateAnswer
}

// const questionsDao = require('../../daos/questions-dao')
// const findAllQuestions = () => questionsDao.findAllQuestions()
// const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
// const findQuestionsForQuiz = (qzid) => questionsDao.findQuestionsForQuiz(qzid)
// const updateAnswer=(qid,answer)=>questionsDao.updateAnswer(qid,answer)
// module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz,updateAnswer }