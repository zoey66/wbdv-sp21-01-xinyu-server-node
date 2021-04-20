module.exports = (app) => {
    const questionService = require("../services/questions/questions-service")

    const findAllQuestions = (req, res) => {
        // const questions = questionService.findAllQuestions()
        // res.send(questions)
        questionService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionsById=(req,res)=>{
        const qid=req.params['qid']
        questionService.findQuestionById(qid)
            .then(question => res.json(question))
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.qzid;
        // const questions = questionService.findQuestionsForQuiz(quizId);
        // res.send(questions);
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
    }

    const updateAnswer=(req,res)=>{
        questionService.updateAnswer(req.params.qzid,req.body)
            .then((answer)=>{
                res.send(answer)
            })
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
    app.get('/api/questions/:qid',findQuestionsById);
    app.put('/api/questions/:qid',updateAnswer)
}


// const questionsService = require('../services/questions/questions-service')
// module.exports = function(app) {
//     app.get('/api/quizzes/:qzid/questions', (req, res) =>
//         questionsService.findQuestionsForQuiz(req.params.qzid)
//             .then(questions => res.json(questions)))
//     app.get('/api/questions', (req, res) =>
//         questionsService.findAllQuestions()
//             .then(allQuestions => res.json(allQuestions)))
//     app.get('/api/questions/:qid', (req, res) =>
//         questionsService.findQuestionById(req.params['qid'])
//             .then(question => res.json(question)))
//     app.put('api/questions/:qid', (req,res)=>
//     questionsService.updateAnswer(req.params['qid'],req.params['answer'])
//         .then((answer)=>
//         res.send(answer)))
// }

