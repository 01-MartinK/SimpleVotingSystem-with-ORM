const con = require('../utils/db');

// add certain person and see if he exists
const addPerson = (req, res) => {
    let firstName = req.body.firstName;
    let familyName = req.body.familyName;
    let email = req.body.email;
    let cur_time = new Date();

    let query = `INSERT;`
    con.query(query, (err, result) => {
        if (err) throw err;
        console.log('Succesfuly added person to people table');
    })
}

// log when he started and last vote
const logPerson = (req, res, vote) => {
    let firstName = req.body.firstName;
    let familyName = req.body.familyName;
    let email = req.body.email;
    let vote = vote;
    let cur_time = new Date();

    let query = `INSERT;`
    con.query(query, (err, result) => {
        if (err) throw err;
        console.log('Succesfuly logged person to people table');
    })
}

// get persons time and see if he can still vote
const getPersonTime = (req, res) => {
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
    getPersonTime
};