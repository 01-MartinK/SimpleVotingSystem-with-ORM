const express = require('express');

const router = express.Router();

const votesController = require('../controllers/votes');
const peopleController = require('../controllers/people')

// getttt
router.get('/', (req, res) => {
    res.render('index', {
      title: 'login'
    });
});
router.get('/voting', peopleController.getPersonTimeAndVote);
router.get('/result', votesController.getAllVotes)


// requests
router.post('/login', peopleController.addPerson, peopleController.logPerson);
router.post('/answer',  votesController.logVote, peopleController.logPerson)

module.exports = router;