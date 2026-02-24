const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { message: "Hello From Node.js" });
});

app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
});

app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
});


app.get('/*splat', (req, res) => {
    res.status(404).render('index', { message: "Not Found" });
});

// ONLY start the server if this file is run directly (node src/index.js)
// This prevents Jest from starting a real server during tests
if (require.main === module) {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;

