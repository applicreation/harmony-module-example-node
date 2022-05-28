const express = require('express');

const app = express();
const port = 80;

app.get('/module/example-node', async (req, res) => {
    res.send('<div class="p-3"><h1>Example module (Node)</h1></div>');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
