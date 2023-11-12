const express = require("express"); 
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('public'))
//conecção com o banco
const Sequelize = require("sequelize")
const sequelize = new Sequelize("geo", "root", "CreateBancoGeo1", {
    host: "localhost",
    dialect: "mysql"
})

app.post("/formulario",function(req,res){
    const tabelaHTML = `
    <table border="1">
        <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Idade</th>
            <th>Email</th>
            <th>CEP</th>
        </tr>
        <tr>
            <td>${req.body.nome}</td>
            <td>${req.body.cpf}</td>
            <td>${req.body.telefone}</td>
            <td>${req.body.idade}</td>
            <td>${req.body.email}</td>
            <td>${req.body.cep}</td>
        </tr>
    </table>`

res.send(tabelaHTML);
})


app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});