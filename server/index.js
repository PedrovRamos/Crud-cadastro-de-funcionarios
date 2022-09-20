const express = require('express');
const app = express();
const mysql = require("mysql")
const cors = require("cors")

// ALTERE SUA BASE DE DADOS AQUI

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'crudEmployees'
})

// ALTERE SUA BASE DE DADOS AQUI

app.use(cors());
app.use(express.json());

// CONFIGURANDO CRUD DE CADASTRAMENTO DE FUNCIONÁRIOS

app.post('/register', (req, res) => {
    const {full_name} =req.body;
    const {birth_date} =req.body;
    const {salary} =req.body;
    const {position} =req.body;

    let SQL = "INSERT INTO employees ( full_name, birth_date, salary, position ) VALUES ( ?,?,?,? )";

    db.query(SQL, [full_name, birth_date, salary, position ] ,(err, result) => {
        if(err) console.log(err)
        else res.send(result);
    })
})

app.post("/search", (req, res) => {
    const {full_name} =req.body;
    const {birth_date} =req.body;
    const {salary} =req.body;
    const {position} =req.body;
  
    let mysql =
      "SELECT * from employees WHERE full_name = ? AND birth_date = ? AND salary= ? AND position= ?";
    db.query(mysql, [full_name, birth_date, salary, position], (err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
  });

app.get("/getEmployees", (req, res) => {

    let SQL = "SELECT * from employees";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    })

})

app.put("/edit", (req, res) => {
    const {id} = req.body;
    const {full_name} = req.body;
    const {position} = req.body;
    const {birth_date} = req.body;
    const {salary} = req.body;

    let SQL = "UPDATE employees SET full_name = ?, position= ?, birth_date= ?, salary= ? WHERE id = ?";

    db.query(SQL, [ full_name, position, birth_date, salary, id ], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})

app.delete("/delete/:id", (req, res) => {
    const {id} = req.params
    let SQL = "DELETE FROM employees where id = ?";
    db.query(SQL, [id] ,(err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

// CONFIGURANDO CRUD DE CADASTRAMENTO DE FUNCIONÁRIOS

// CONFIGURANDO CRUD DE CADASTRAMENTO DE CARGOS

app.post('/register_position', (req, res) => {
    const {position_name} =req.body;
    const {position_desc} =req.body;

    let SQL = "INSERT INTO positions ( position_name, position_desc ) VALUES ( ?,? )";

    db.query(SQL, [ position_name, position_desc ] ,(err, result) => {
        if(err) console.log(err)
        else res.send(result);
    })
})

app.post("/search_position", (req, res) => {
    const {position_name} =req.body;
    const {position_desc} =req.body;
  
    let mysql =
      "SELECT * from positions WHERE position_name = ? AND position_desc = ?";
    db.query(mysql, [position_name, position_desc], (err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
  });

app.get("/get_positions", (req, res) => {

    let SQL = "SELECT * from positions";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    })

})

app.delete("/delete_position/:id", (req, res) => {
    const {id} = req.params
    let SQL = "DELETE FROM positions where id = ?";
    db.query(SQL, [id] ,(err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.put("/edit_position", (req, res) => {
    const {id} = req.body;
    const {position_name} =req.body;
    const {position_desc} =req.body;

    let SQL = "UPDATE positions SET position_name = ?, position_desc= ? WHERE id = ?";

    db.query(SQL, [ position_name, position_desc, id ], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})

app.listen(3001, () => (
    console.log("rodando servidor")
));

// CONFIGURANDO CRUD DE CADASTRAMENTO DE CARGOS