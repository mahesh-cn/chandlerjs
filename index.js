const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("<h1>Could I BE more useless</h1>");
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
