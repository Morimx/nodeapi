require("dotenv").config(); // archivo de configuracion de variables de entorno
const dbcategoria = require("./dbcategoria.js"); // archivo de conexion a la base de datos
let express = require("express"); // paquete express
let bodyParser = require("body-parser"); // paquete body-parser
let cors = require("cors"); // paquete cors
const Categoria = require("./categoria.js");
let app = express(); // inicializacion de express
let router = express.Router(); // inicializacion de express router
const swaggerJsdoc = require("swagger-jsdoc"); // paquete swagger-jsdoc
const swaggerUi = require("swagger-ui-express"); // paquete swagger-ui-express
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.1",
      title: "API REST Documentacion",
      description: "Testing Swagger for my API",
      contact: {
        name: "Claudio Fernandez",
      },
      server: ["http://localhost:3000"],
    },
  },
  apis: ["api.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/* App Config */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);
/* end App Config */

// api-Categorias -> GET
/**
 * @swagger
 * /api/categoria:
 *  get:
 *      tags: [Categorias]
 *      summary: Obtiene todas las categorias
 *      description: Use to get all categorias
 *      responses:
 *           '200':
 *            description: Respuesta exitosa
 */
router.route("/categoria").get((request, response) => {
  dbcategoria.getCategorias().then((result) => {
    response.json(result);
  });
});

// api-Categorias -> GET by ID
// api-Categorias -> GET
// api-Categorias -> GET
/**
 * @swagger
 * /api/categoria/{id}:
 *  get:
 *      tags: [Categorias]
 *      summary: Obtiene categorias por ID
 *      description: Use to get categorias by ID
 *      parameters:
 *        - in: path
 *          name: id
 *      responses:
 *           '200':
 *            description: Respuesta exitosa
 */
router.route("/categoria/:id").get((request, response) => {
  dbcategoria.getCategoriasxID(request.params.id).then((result) => {
    response.json(result);
  });
});

// api-Categorias -> POST

/**
 * @swagger
 * /api/categoria/guardar:
 *  post:
 *     description: Guarda una categoria
 *     tags: [Categorias]
 *     produces:
 *         - application/json
 *     parameters:
 *         - name: "body"
 *           in: body
 *           required: true
 *           schema:
 *             type: object
 *             example:
 *              cat_id: ""
 *              cat_nom: "Categoria 1"
 *              cat_obs: "Categoria 1"
 *     responses:
 *        '200':
 *         description: Respuesta exitosa
 *         content:
 *          application/json:
 *            type: object
 */
router.route("/categoria/guardar").post((request, response) => {
  let Categoria = { ...request.body };
  dbcategoria.insertCategoria(Categoria).then((result) => {
    response.json(result);
  });
});

// api-Categorias -> UPDATE
/**
 * @swagger
 * /api/categoria/actualizar:
 *  put:
 *     description: Actualiza una categoria
 *     tags: [Categorias]
 *     produces:
 *         - application/json
 *     parameters:
 *         - name: "body"
 *           in: body
 *           required: true
 *           schema:
 *             type: object
 *             example:
 *               cat_id: ""
 *               cat_nom: "Categoria 1"
 *               cat_obs: "Categoria 1"
 *     responses:
 *         '200':
 *         description: Categoria actualizada
 *         content:
 *          application/json:
 *            type: object
 */
router.route("/categoria/actualizar").put((request, response) => {
  let Categoria = { ...request.body };
  dbcategoria.updateCategoria(Categoria).then((result) => {
    response.json(result);
  });
});

let port = process.env.PORT || 3000;
app.listen(port);
console.log("Server running at port: " + port);
