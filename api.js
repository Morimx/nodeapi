require("dotenv").config();
const dbcategoria = require("./dbcategoria.js");
let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.route("/categoria").get((request, response) => {
  dbcategoria.getCategorias().then((result) => {
    response.json(result);
  });
});

router.route("/categoria/:id").get((request, response) => {
  dbcategoria.getCategoriasxID(request.params.id).then((result) => {
    response.json(result);
  });
});

let port = process.env.PORT || 3000;
app.listen(port);
console.log("Server running at port: " + port);
