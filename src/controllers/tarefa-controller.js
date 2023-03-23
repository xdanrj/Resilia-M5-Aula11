import TarefaModel from "../models/tarefaModel.js"
import bd from "../infra/bd.js"

const controllertarefas = (app) => {
    app.get('/tarefas', (req, res) => {
        res.send(bd.tarefas)
        console.log(bd.tarefas)
    });

    app.post('/tarefas', (req, res) => {
        const resposta = TarefaModel.armazenar(req.body)
        res.send(resposta)
    });

    app.get('/tarefas/id/:id', (req, res) => {
        const resposta = TarefaModel.mostrarUm(req.params.id)
        res.send(resposta.dados);
    });

    app.delete('/tarefas/id/:id', (req, res)=> {
        TarefaModel.deletarUm(req.params.id)
        res.send(`Tarefa ${req.params.id} deletada!`);
    });
}

export default controllertarefas