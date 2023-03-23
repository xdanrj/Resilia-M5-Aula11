import bd from "../infra/bd.js"

const TarefaModel = {
    modelar: (obj) => {
        return {
            id: obj.id,
            nome: obj.nome,
            descricao: obj.descricao
        }  
    },
    armazenar: (obj) => {
        bd.tarefas.push(obj)
        console.log(bd.tarefas)
        return {
            dados: {msg: "Tarefa criada com sucesso"}
        }
    },
    mostrarTodos: () => {
        return {
            dados: {msg: bd.tarefas}
        }
    },
    mostrarUm: (param) => {
        const dados = bd.tarefas.map( (item)  => {
            if (item.id == param) {
                return item
            }
        });
        return {
            dados: {msg: dados}
        }
    },
    deletarUm: (param) => {
        bd.tarefas.splice(param, 1)
        return ""
    }
}

export default TarefaModel