const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "jett_academias"
})

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { nome } = req.body;
    const { dataNascimento } = req.body;
    const {telefone}=req.body;
    const {celular}=req.body;
    const {cidade}=req.body;
    const {rua}=req.body;
    const {sexo}=req.body;
    const {atividade}=req.body;
    const {uf}=req.body;
    const {cep}=req.body;
    const {bairro}=req.body;
    const {numero}=req.body;

    let SQL = "INSERT INTO alunos (nome,dataNascimento,telefone,celular,cidade,rua,sexo,atividade,uf,cep,bairro,numero) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

    db.query(SQL, [nome,dataNascimento,telefone,celular,cidade,rua,sexo,atividade,uf,cep,bairro,numero], (err, result) => {
        if(err==null){
            console.log("Registrado com Sucesso!!")
        }else{
            console.log(err)
        }
    })
})

app.post("/usuario",(req,res)=>{
    const {login}=req.body;
    const {senha}=req.body;
    const {tipoAcesso}=req.body;

    let SQL ="INSERT INTO usuarios(login,senha,tipo_acesso) VALUES (?,?,?)";

    db.query(SQL, [login,senha,tipoAcesso], (err, result) => {
        if(err==null){
            console.log("Registrado com Sucesso!!")
        }else{
            console.log(err)
            console.log("deu erro")
        }
    })
})

app.get("/get",(req,res)=>{
    let SQL ="SELECT*from alunos";

    db.query(SQL,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.get("/getUsuarios",(req,res)=>{
    let SQL ="SELECT*from usuarios";

    db.query(SQL,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.delete("/delete/:id",(req,res)=>{
    const {id}=req.params;

    let SQL = `DELETE FROM usuarios WHERE id=?`;

    db.query(SQL,[id],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})
app.listen(3001, () => {
    console.log("rodando servidor");
})