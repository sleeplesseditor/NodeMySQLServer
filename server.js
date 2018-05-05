const express = require('express');
const mysql = require('mysql2');

//MySQL Database Connection
const connection = mysql.createConnection({
    //Place connection details here
    host: '',
    user: '',
    password: '',
    database: ''
});

//MySQL Connection Query
function getData() {
    return new Promise((resolve, reject) => {
        connection.query(
            //Place query here
            '',
            function(err, rows, fields) {
                if (err) {
                    reject(err);
                    return
                }
    
                resolve(rows);
            }
        );
    })
}

//Express Server Setup
const app = express();
const port = process.env.PORT || 3001;

//Stringify data and push
app.get('/getData', (req, res) => {
    getData()
    .then((results => {
        const preparedData = JSON.stringify(results); 
        res.send(preparedData);
    }))
})

app.listen(port, () => console.log(`Example app listening on port ${port}`));