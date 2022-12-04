const express = require('express')
const app = express();
var os = require("os");

app.use(express.json());

app.get('/info', (req, res) => {
    res.send({"name":os.hostname(), "hora":new Date().toLocaleString()})
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en el puerto ${port} ....`));
