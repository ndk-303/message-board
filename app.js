const express = require('express');
const app = express();

const path = require('path');
const assetPath = path.join(__dirname, 'public');

// Routes
const indexRouter = require('./routes/index');

// middleware: parse form data into req.body
app.use(express.urlencoded({ extends: true }));

// Config view engine: EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use(express.static(assetPath));

//Error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(process.env.PORT || 500).send(err.message);
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log(`http://localhost:${PORT}`);
})