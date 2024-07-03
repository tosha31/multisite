import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Admin UI');
});

app.listen(port, () => {
    console.log(`Admin UI listening at http://localhost:${port}`);
});