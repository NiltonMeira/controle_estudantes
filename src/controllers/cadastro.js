const sala = require('../model/sala');
const aluno = require('../model/aluno');

module.exports = {
    async salaInsert(req, res) {
        // Recebe as informações do front-end
        const dados = req.body;
        // Criando sala no banco de dados
        await sala.create({
            Nome: dados.nome,
            Capacidade: dados.capacidade
        });
        // Redirecionar para a página principal
        res.redirect('/');
    },
    async aluno(req, res) {
        // Encontrando todas as salas disponíveis no SQL
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome']
        });
        // Renderizando e passando o nome das salas para o front
        res.render('../views/alunos', { salas });
    },
    async alunoInsert(req, res) {
        // Recebendo as informações pelo Body
        console.log(req.body);
        const dados = req.body;
        // Nome padrão da foto
        let foto = 'usuario.png';
        if (req.file) {
            // Pegar novo nome da foto
            foto = req.file.filename;
        }
        // Criando aluno no banco de dados
        await aluno.create({
            Nome: dados.name,
            Idade: dados.idade,
            Sexo: dados.sexo,
            IDSala: dados.sala,
            Foto: foto
        });
        console.log('AAA')
        // Redirecionar para a página principal
        res.redirect('/');
    }
}