const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    //console.log('at the main route');

    let query = "SELECT * FROM tbl_main_page;";

    sql.query(query, (err, result) => {
        if (err) { //throw err; console.log(err);
            console.log(err);
        }

        console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
        res.render('home', { sections: result });
    })
})

router.get('/objects/:id', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously

    let query = `SELECT * FROM tbl_main_page WHERE ID="${req.params.id}"`;

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result[0]); // should see objects wrapped in an array

        // render the home view with dynamic data
        res.json(result[0]);
    })
})

module.exports = router;