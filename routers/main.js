const express = require('express');

const router = express.Router();

const votesController = require('../controllers/votes');
const res = require('express/lib/response');
const con = require('../utils/db');

let voting_ended = false

// getttt
router.get('/', (req, res) => {
    if (voting_ended == false)
        res.render('index', {
            title: 'login'
        });
    else
        res.redirect('/result');
});

router.get('/result', votesController.getAllVotes)

// requests
router.post('/login', votesController.castVote);
router.post('/restart', (req, res) => {
    res.redirect('/');
    startVote()
})

module.exports = router;

function startVote() {
    voting_ended = false
        // timer for voting perioud 300000
    setTimeout(function() {

        let query = `CALL tulemus();`;
        con.query(query, (err, result) => {
            if (err) throw err;
        });
        voting_ended = true
        console.log("voting ended");

    }, 50000);
}

startVote();