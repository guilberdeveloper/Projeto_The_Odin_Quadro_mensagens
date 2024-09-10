// routes/Author.js


const { Router } = require("express");

const indexRouter = Router();

const links = [
    {
        href: "/",
        text: "Início"
    },
    {
        href: "/new",
        text: "Criar um Post"
    }
]

// array de mensagens 
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
]


indexRouter.get("/", function(req, res){
    res.render("index", {
        title: "Mini Messageboard",
        messages: messages,
        links: links
    })
});

indexRouter.get("/new", function(req, res){
    res.render("form")
    
});

indexRouter.post("/new", function(req, res){

    const {author, message} =  req.body

    // adicionar as mensages ao array
    messages.push({
        text: message,
        user: author,
        added: new Date()
    });
    

    res.redirect("/"); // redireciona o usuário depois que o usuário insere os dados
});

//export
module.exports = indexRouter;