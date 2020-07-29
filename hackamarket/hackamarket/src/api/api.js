//LLAMANDO MODULOS INSTALADOS
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

//MODULOS PARA APP
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CONEXION A BBDD
const connection = mysql.createConnection({
  host: "localhost",
  user: "paty",
  password: "patypo",
  database: "hackamarket",
});

//CONECTANDO CON BBDD
connection.connect((error) => {
  if (error) throw error;
  console.log("Database conected!!");
});

//CONEXION A LA API
const PORT = 3030;

app.listen(PORT, () => {
  console.log("APP FUNCIONANDO EN -> localhost:", PORT);
});

app.get("/products", (req, res) => {
  const sql = "SELECT * FROM listaproductos";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      console.log("No hay productos disponibles");
    }
  });
});

app.get("/clients", (req, res) => {
  const sql = "SELECT * FROM listaclientes";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      console.log("No hay clientes registrados");
    }
  });
});

app.put("/update-client/:id", (req, res) => {
  //ACTUALIZAR DATA CLIENTE EN LA BBDD

  //DATOS QUE RECIBIMOS
  const { id } = req.params;
  const nombre = req.body.nombre;
  const usuario = req.body.usuario;
  const password = req.body.password;
  const email = req.body.email;
  const foto = req.body.foto;

  //SECUENCIA SQL
  const sql = `UPDATE listaclientes
  SET nombre='${nombre}',
  usuario='${usuario}',
  password='${password}',
  email='${email}',
  foto='${foto}'
  WHERE id='${id}';`;

  //CONEXION A LA BBDD
  connection.query(sql, (error) => {
    if (error) throw error;
    console.log("Cliente actualizado... chachi");
  });
});

app.delete("/delete-client/:id", (req, res) => {
  //ACTUALIZAR DATA CLIENTE EN LA BBDD

  //DATOS QUE RECIBIMOS
  const { id } = req.params;

  //SECUENCIA SQL
  const sql = `DELETE FROM listaclientes
  WHERE id='${id}';`;

  //CONEXION A LA BBDD
  connection.query(sql, (error) => {
    if (error) throw error;
    console.log("Cliente Borradisimo del mapa :(");
  });
});

app.post("/register", (req, res) => {
  //AGREGAR NUEVO USUARIO A LA BBDD

  //DATOS QUE RECIBIMOS
  const sql = `INSERT INTO listaclientes SET ?`;
  const datosClient = {
    nombre: req.body.nombre,
    usuario: req.body.usuario,
    password: req.body.password,
    email: req.body.email,
    foto: req.body.foto,
  };

  connection.query(sql, datosClient, (error) => {
    if (error) throw error;
    console.log("Cliente creado con exito");
  });
});

app.post("/new-product", (req, res) => {
  //AGREGAR NUEVO USUARIO A LA BBDD

  //DATOS QUE RECIBIMOS
  const sql = `INSERT INTO listaproductos SET ?`;
  const datosClient = {
    nombre: req.body.nombre,
    stock: req.body.stock,
    disponibilidad: req.body.disponibilidad,
    imagen: req.body.imagen,
  };

  connection.query(sql, datosClient, (error) => {
    if (error) throw error;
    console.log("Producto creado con exito");
  });
});
