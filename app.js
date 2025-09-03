const express = require('express');
const app = express();

const path = require('path');
const assetPath = path.join(__dirname, 'public');

// Routes
const indexRouter = require('./routes/index');

app.use(express.urlencoded({ extends: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.use(express.static(assetPath));

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log(`http://localhost:${PORT}`);
})