import express from "express";
import controllerUsuarios from "../controllers/usuario-controller.js";
import controllerTarefas from "../controllers/tarefa-controller.js";
const port = 3000

const app = express();

app.use(express.json())

controllerUsuarios(app)
controllerTarefas(app)

app.listen(port, () => {
    console.log("Porta bem sucedida!")
})

