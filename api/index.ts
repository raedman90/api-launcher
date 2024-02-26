import express from 'express';
import path from 'path';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(cors())
app.use(express.json())

// Middleware para servir arquivos estáticos
app.use(express.static('public'));


app.get('/mobile/api.json', function (req, res) {
	res.sendFile(path.join(__dirname, '..', 'components', 'api.json'));
});

app.get('/mobile/servers.json', function (req, res) {
	res.sendFile(path.join(__dirname, '..', 'components', 'servers.json'));
});

app.get('/mobile/stories.json', function (req, res) {
	res.sendFile(path.join(__dirname, '..', 'components', 'stories.json'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
