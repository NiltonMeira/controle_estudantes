// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');

// Iniciando as rotas
route.get('/', home.pagInicialGet);

route.get('/sala', home.sala);
route.post('/sala', cadastro.salaInsert)

route.get('/alunos', home.aluno);



module.exports = route;