const db = require('../db');
const NotFoundError = require('../errors/NotFoundError');

async function getAllMessages(req,res) {
    const messages = await db.getAllMessages();

    res.render('index', {title: 'Message Dashboard',messages: messages});
}
async function getMessage(req, res) {
    const { id } = req.params;
    const message = await db.getMessage(id);

    if(!message) {
        throw new NotFoundError('Message Not Found!');
    }

    res.render('message', { title: 'Detail', message });
}

async function getForm(req, res) {
    res.render('new', {title: 'New Message'});
}

async function addMessage(req, res) {
    const message = {
        user: req.body.user,
        text: req.body.text,
        added: new Date()
    }

    db.addMessage(message);
    res.redirect('/');
}

module.exports = { getAllMessages, getMessage, addMessage,getForm };