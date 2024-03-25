const sala = require("../model/sala")
const aluno = require("../model/aluno")

module.exports = {
    async pagInicialGet(req, res) {
        const salas = await sala.findAll({
            raw: true,
            attributes: ['IdSala', 'Nome', 'Capacidade']
        })

        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Sexo', 'Foto']
        })
        res.render('../views/index', { alunos: "", salas, id: ""});
        console.log(alunos);        
    },
    
    async pagInicialPost(req, res) {

        const id = req.body.sala;

        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome', 'Capacidade']
        })

        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno','IDSala', 'Nome', 'Idade', 'Sexo', 'Foto'], 
            where: { IDSala: id }
        })
        res.render('../views/index', { alunos, salas, id});
        console.log(alunos);        
    },

    async sala(req, res) {
        res.render('../views/sala');
    },
    async aluno(req, res) {
        res.render('../views/alunos');
    },

}