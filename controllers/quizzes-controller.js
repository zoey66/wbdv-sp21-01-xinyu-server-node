const quizzesService = require("../services/quizzes/quizzes-service")

module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        // const quizzes = quizzesService.findAllQuizzes()
        // res.send(quizzes)
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                res.send(quizzes)
            })
    }
    const findQuizById = (req, res) => {
        const quizId = req.params['qid']
        // const quiz = quizzesService.findQuizById(quizId)
        // res.send(quiz)
        quizzesService.findQuizById(quizId)
            .then((quiz) => {
                res.send(quiz)
            })
    }

    app.get("/api/quizzes", findAllQuizzes)
    app.get("/api/quizzes/:qid", findQuizById)
}



// const quizzesService = require('../services/quizzes/quizzes-service')
// module.exports = function (app) {
//     app.get('/api/quizzes', (req, res) =>
//         quizzesService.findAllQuizzes()
//             .then(allQuizzes => res.json(allQuizzes)))
//     app.get('/api/quizzes/:qid', (req, res) =>
//         quizzesService.findQuizById(req.params['qid'])
//             .then(quiz => res.json(quiz)))
// }



