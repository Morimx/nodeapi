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

module.exports = {
  getCategorias: getCategorias,
  getCategoriasxID: getCategoriasxID,
};
