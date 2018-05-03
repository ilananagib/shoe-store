const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool({
    database: 'shoe_store', //name of database
    host: 'localhost', //wheres your database
    port: 5432, //port in postgres
    max: 10, // max conections
    idleTimeoutMillis: 30000 // 30 seconds to try to connect

});

pool.on('connect', () => {
    console.log('Postgres connected');
});

pool.on('error', (error) => {
    console.log('error with postgres', error)
})
    ;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var shoes = [{
    name: 'Nike',
    cost: 30,
}];


app.get('/shoe', (req, res) => {
    res.send(shoes);
});

app.post('/shoe', (req, res) => {
    //shoes.push(req.body);
    const shoe = req.body;
    pool.query(`INSERT INTO "shoes" ("name", "cost")
                VALUES ($1, $2)`, [shoe.name, shoe.cost]) 
    .then((results) => {
        res.sendStatus(200);
    })
   .catch((error) => {
       console.log('error with sql insert on shoe post');
       res.sendStatus(500);
   });
});

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});
