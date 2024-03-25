// Iniciando Route do Express
const express = require('express');
const route = express.Router();
const multer = require("multer");

// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');
const config = require('./src/config/multer');

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.post('/', home.pagInicialPost);

route.get('/sala', home.sala);
route.post('/sala', cadastro.salaInsert)

route.get('/alunos', cadastro.aluno)
route.post('/alunos', cadastro.alunoInsert)

route.post('/cadastroAluno', multer(config).single('foto'), cadastro.alunoInsert);



module.exports = route;