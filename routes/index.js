const { Router } = require('express');
const indexRouter = Router();
const { renderDashboard, getMessage, addMessage, getForm } = require('../controllers/messageController');

indexRouter.get('/', renderDashboard);
indexRouter.get('/new', getForm);
indexRouter.get('/message/:id', getMessage);
indexRouter.post('/new', addMessage);

module.exports = indexRouter;