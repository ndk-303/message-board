const { Router } = require('express');
const indexRouter = Router();
const { getAllMessages, getMessage, getForm } = require('../controllers/messageController');

indexRouter.get('/', getAllMessages);
indexRouter.get('/new', getForm);
indexRouter.get('/message/:id', getMessage);

module.exports = indexRouter;