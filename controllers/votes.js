const con = require('../utils/db');

// get all votes with respectable opposite
const getAllVotes = (req, res) => {
    let query = `???`;
    let votes_with = 0;
    let votes_againt = 0;
    let allvotes = 0;
    con.query(query, (err, result) => {
        if (err) throw err;

        else {
            res.render('/voting', {
                title: 'vote',
                allVotes: allvotes,
                againstPerson: votes_againt,
                withPerson: votes_with
            });
        }
    });
};

// log vote
const logVote = (req, res) => {
    let query = `log vote`;
    con.query(query, (err, result) => {
        if (err) throw err;
        else console.log(result);
    });
};

module.exports = {
    getAllVotes,
    logVote
};