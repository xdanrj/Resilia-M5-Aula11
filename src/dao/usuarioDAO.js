import bd from "../infra/bd.js"

const UsuarioDAO = {
armazenar: (obj) => {
    bd.usuarios.push(obj)
    console.log(bd.usuarios)
    return {
        dados: {msg: "Usuário criado com sucesso"}
    }
},
atualizar: (param, body) => {
    const data = bd.usuarios.find(usuario => usuario.id === param)
    const index = bd.usuarios.indexOf(data)
    bd.usuarios.splice(param, 1, body)
    // nao está funcionando desse jeito = bd.usuarios[index] = body
},
    
mostrarTodos: () => {
    return {
        dados: {msg: bd.usuarios}
    }
},

mostrarUm: (param) => {
    const dados = bd.usuarios.map( (item)  => {
        if (item.id == param) {
            return item
        }
    });
    return {
        dados: {msg: dados}
    }
},

deletarUm: (param) => {
    bd.usuarios.splice(param, 1)
}
}

export default UsuarioDAO