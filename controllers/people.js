const con = require('../utils/db');

// add certain person and see if he exists
const addPerson = (req, res) => {

}

// log when he started and last vote
const logPerson = (req, res) => {

}

// get persons time and see if he can still vote
const getPersonTimeAndVote = (req, res) => {
    let query = `???`;
    let time;
    con.query(query, (err, result) => {
        if (err) throw err;
        time = result;
        console.log(time)
        if (time != 0) {
            res.render('/voting', {
                title: 'vote',
                time: time
            });
        }
    });
}

module.exports = {
    addPerson,
    logPerson,
    getPersonTimeAndVote
};