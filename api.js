require("dotenv").config(); // archivo de configuracion de variables de entorno
const dbcategoria = require("./dbcategoria.js"); // archivo de conexion a la base de datos
let express = require("express"); // paquete express
let bodyParser = require("body-parser"); // paquete body-parser
let cors = require("cors"); // paquete cors
const Categoria = require("./categoria.js");
let app = express(); // inicializacion de express
let router = express.Router(); // inicializacion de express router

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

// api-Categorias -> GET
router.route("/categoria").get((request, response) => {
  dbcategoria.getCategorias().then((result) => {
    response.json(result);
  });
});

// api-Categorias -> GET by ID
router.route("/categoria/:id").get((request, response) => {
  dbcategoria.getCategoriasxID(request.params.id).then((result) => {
    response.json(result);
  });
});

// api-Categorias -> POST
router.route("/categoria/guardar").post((request, response) => {
  let Categoria = { ...request.body };
  dbcategoria.insertCategoria(Categoria).then((result) => {
    response.json(result);
  });
});

// api-Categorias -> UPDATE
router.route("/categoria/actualizar").post((request, response) => {
  let Categoria = { ...request.body };
  dbcategoria.updateCategoria(Categoria).then((result) => {
    response.json(result);
  });
});

let port = process.env.PORT || 3000;
app.listen(port);
console.log("Server running at port: " + port);
