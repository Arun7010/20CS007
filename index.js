const express = require('express');
const app = express();
const PORT = 3000;

app.use( express.json() )

app.get('/numbers',(req, res) => {
    res.status(200).send({
        "numbers":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    })
});

app.get('/numbers/primes',(req, res) => {
    res.status(200).send({
        "primes":[2,3,5,7,11,13,17,19]
    })
});

app.get('/numbers/fibo',(req, res) => {
    res.status(200).send({
        "fibo":[0,1,1,2,3,5,8,13]
    })
});

app.get('/numbers/odd',(req, res) => {
    res.status(200).send({
        "odd":[1,3,5,7,9,11,13,15,17,19]
    })
});

app.get('/numbers/even',(req, res) => {
    res.status(200).send({
        "even":[2,4,6,8,10,12,14,16,18,20]
    })
});


/*
app.post('/numbers/:id', (req,res) => {
const { id } = req.params;
const { val } = req.body;
const { val1 } = req.body;
const { val2 } = req.body;
const { val3 } = req.body;

if (!val) {
    res.status(418).send({message:'primes:[2,3,5,7,11,13,17,19]'}) 
}
res.send({
    numbers:`hello one node`,
});

if (!val1) {
    res.status(418).send({message:'fibo:[0,1,1,2,3,5,8,13]'}) 
}
res.send({
    numbers:`hello one node`,
});

if (!val2) {
    res.status(418).send({message:'odd:[1,3,5,7,9,11,13,15,17,19]'}) 
}
res.send({
    numbers:`hello one node`,
});

if (!val3) {
    res.status(418).send({message:'even:[2,4,6,8,10,12,14,16,18,20]'}) 
}
res.send({
    numbers:`hello one node`,
});

});
*/

app. listen(
    PORT , 
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
