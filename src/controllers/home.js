module.exports = {
    async pagInicialGet(req, res){
    res.render('../views/index');
    },
    async sala(req, res){
        res.render('../views/sala');
        },
    async aluno(req, res){
        res.render('../views/alunos');
        },

}