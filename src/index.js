const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.send("Hello from Node.js");
});

app.get('/contact', (req, res) => {
    res.send("The Contact Page");
});

app.get('/about', (req, res) => {
    res.send("The About Page");
});

app.use((req, res, next) => {
    res.status(404).send("Not Found");
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

