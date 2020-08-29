const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.write("<h1>Could I BE anymore usefull</h1>");
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
