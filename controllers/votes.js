const con = require('../utils/db');

const castVote = (req, res) => {
    let firstName = req.body.firstName;
    console.log('eesnimi: ' + firstName)
    let familyName = req.body.familyName;
    console.log('perenimi:' + familyName)
    let vote = req.body.vote;
    console.log('otsus: ' + vote)



    let query = `SELECT eesnimi FROM HAALETUS WHERE eesnimi = "${firstName}" && perenimi = "${familyName}";`
    con.query(query, (err, result) => {
        if (result.length > 0) {
            query = `UPDATE HAALETUS SET otsus = "${vote}" WHERE eesnimi = "${firstName}" && perenimi = "${familyName}";`
            console.log("has voted already")
        } else {
            console.log("hasn't voted yet")
            query = `INSERT INTO HAALETUS(eesnimi,perenimi,haale_aeg,otsus) VALUES ("${firstName}","${familyName}",NOW(),"${vote}");`
        }
        con.query(query, (err, result) => {
            if (err) throw err;
            console.log('Succesfuly added persons vote');
            res.redirect('/')
        })
    });
}

// get all votes with respectable opposite
const getAllVotes = (req, res) => {
    let query = `SELECT haaletanute_arv, poolt, vastu FROM TULEMUSED ORDER BY id DESC LIMIT 1;`;
    con.query(query, (err, result) => {
        if (err) throw err;

        res.render('tulemus', {
            title: 'Tulemus',
            allVotes: result[0].haaletanute_arv,
            againstPerson: result[0].vastu,
            withPerson: result[0].poolt
        });

    });
};

module.exports = {
    getAllVotes,
    castVote
};