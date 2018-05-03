const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
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
    shoes.push(req.body);
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});
