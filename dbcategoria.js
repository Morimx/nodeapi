let connection = require("./dbconfig");
const sql = require("mysql");

function getCategorias() {
  return new Promise(function (resolve, reject) {
    let query_str = "SELECT * FROM TM_CATEGORIA";

    connection.query(query_str, function (err, rows) {
      if (err) {
      return reject(err);
      }
      resolve(rows);
    });
  });
}

function getCategoriasxID(cat_id) {
  return new Promise(function (resolve, reject) {
    var query_str = sql.format("SELECT * FROM TM_CATEGORIA WHERE CAT_ID=?", [
      cat_id,
    ]);
    connection.query(query_str, function (err, rows) {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
}


function createCategoria(clase) {
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Insert a record in the "customers" table:
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
}


module.exports = {
  getCategorias: getCategorias,
  getCategoriasxID: getCategoriasxID,
};
