const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Client } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Adicionando a rota para a raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo ao Feedback ADS!');
});

// MongoDB connection
mongoose.connect('mongodb://admin:faat@mongo:27017/feedback_ads', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Feedback = mongoose.model('Feedback', {
    aluno: String,
    satisfacao: Number,
});

// PostgreSQL connection
const pgClient = new Client({
    user: 'admin',
    host: 'postgres',
    database: 'feedback_ads',
    password: 'faat',
    port: 5432,
});

const tryConnectPostgres = async (retries = 5) => {
    while (retries) {
      try {
        await pgClient.connect();
        console.log('Conectado ao PostgreSQL!');
        break;
      } catch (err) {
        console.log('Postgres não está pronto ainda, tentando novamente...');
        retries--;
        await new Promise(res => setTimeout(res, 5000)); // espera 5s
      }
    }
  
    if (!retries) {
      console.error('Erro ao conectar no PostgreSQL após várias tentativas.');
      process.exit(1);
    }
};
  
tryConnectPostgres();
  

// Routes
app.post('/feedback', async (req, res) => {
    const { aluno, satisfacao } = req.body;

    // Save to MongoDB
    const feedback = new Feedback({ aluno, satisfacao });
    await feedback.save();

    // Save to PostgreSQL
    await pgClient.query('INSERT INTO feedback_aluno(aluno, satisfacao) VALUES($1, $2)', [aluno, satisfacao]);

    res.status(201).send({ message: 'Avaliação enviada com sucesso!' });
});

app.get('/feedback_aluno', async (req, res) => {
    const feedback_aluno = await Feedback.find();
    res.status(200).send(feedback_aluno);
});

// Start server
app.listen(PORT, () => {
    console.log(`O servidor esta rodando na porta: ${PORT}`);
});