var express = require('express');
var router = express.Router();

// sample messages to send

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello world!',
        user: 'Charles',
        added: new Date(),
    },
];
/* GET home page. */
router.get('/', function (req, res, next) {
    //make sure to pass messages as well to the rendering engine
    res.render('index', { title: 'Express', messages: messages });
});

router.get('/new', function (req, res, next) {
    res.render('form');
});
router.post('/new', function (req, res, next) {
    // extract form data
    const text = req.body.text;
    const user = req.body.user;
    const added = new Date();

    // create new message object
    const newMessage = {
        text: text,
        user: user,
        added: added,
    };

    // push new message to array
    messages.push(newMessage);

    //return to index page
    res.redirect('/');
});
module.exports = router;
