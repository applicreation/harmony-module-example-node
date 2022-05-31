const express = require('express');

const app = express();
const port = 80;

app.get('/module/example-node', async (req, res) => {
    res.send('<div class="p-3"><h1>Example module (Node)</h1></div>');
});

app.get('/module/example-node/module.json', async (req, res) => {
    res.send({
        name: "Example (Node)",
        description: "Harmony example Node module.",
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
