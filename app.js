// Arquivo principal
const express = require("express");
const app = express(); // servidor app variavel -> app roteador 
require("dotenv").config();
const path = require("node:path");
const PORT = 3000;

// configura parse para lidar com formulário
app.use(express.urlencoded({extended: false}));

// configura o ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // seta a engine de front-end

// trabalhando com arquivos estaticos
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// importar routes
const indexRouter = require("./routes/indexRouter");

// usando as rotas
app.use("/", indexRouter);

// escuta na porta
app.listen(PORT, function(){
    console.log("Servidor rodando... na porta" + ` ${PORT}`)
});