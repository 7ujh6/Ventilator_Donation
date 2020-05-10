const express =  require('express');
const cors = require(cors);
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = proccess.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

//const stripe = require('stripe');
//So in order to use the stripe library in the backend, you needed to add the stripe backpage in that environment too
//which means in order to access firebase on the backend, we'll probably have to include firebase on the backend

//maybe just using a fetch on the frontend would be easier would be easier

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port' + port);
})

// app.post('/payment', (req, res) => {
//     const body = {
//         source: req.body.token.id,
//         amount: req.body.amount,
//         currency: usd
//     };

//     stripe.charges.create(body, (stripeErr, stripeRes) => {
//         if (stripeErr) {
//             res.status(500).send({error: stripeError})
//         } else {
//             res.status(200).send({successs: stripeRes});
//         }
//     })
// });