const express = require('express');

const router = express.Router();

const votesController = require('../controllers/votes');
const res = require('express/lib/response');
const con = require('../utils/db');

let voting_ended = false
let voting_started = false

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
router.post('/login', (req, res) => {

    if (!voting_ended)
        votesController.castVote(req, res);
    else
        res.redirect('/result');


    if (!voting_started && !voting_ended) {
        startVote()
    };
});

router.post('/restart', (req, res) => {
    res.redirect('/');
    voting_ended = false
})

module.exports = router;

function startVote() {
    console.log('voting has started')
    voting_ended = false
    voting_started = true
        // timer for voting perioud 300000
    setTimeout(function() {

        let query = `CALL tulemus();`;
        con.query(query, (err, result) => {
            if (err) throw err;
        });
        voting_ended = true
        voting_started = false
        console.log("voting ended");

    }, 300000);
}