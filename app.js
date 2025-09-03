const express = require('express');
const app = express();

const path = require('path');
const PORT = process.env.PORT || 8080;

// Routes
const indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log(`http://localhost:${PORT}`);
})