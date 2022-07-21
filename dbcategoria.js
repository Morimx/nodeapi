let config = require("./dbconfig"); // archivo config de conexion
let sql = require("mssql"); // paquete mssql

async function getCategorias() {
  try {
    let pool = await sql.connect(config);
    let categorias = await pool.request().query("select * from TM_CATEGORIA");
    sql.close();
    return categorias.recordset;
  } catch {
    error;
  }
  console.log(error);
}

async function getCategoriasxID(id) {
  try {
    let pool = await sql.connect(config);
    let categorias = await pool
      .request()
      .query("select * from TM_CATEGORIA where cat_id = " + id);
    sql.close();
    return categorias.recordset;
  } catch {
    error;
  }
  console.log(error);
}

async function insertCategoria(classCat) {
  try {
    let pool = await sql.connect(config);
    let insertcate = await pool
      .request()
      .input("cat_id", sql.Int, classCat.cat_id)
      .input("cat_nom", sql.VarChar, classCat.cat_nom)
      .input("cat_obs", sql.VarChar, classCat.cat_obs)
      .execute("SP_CATEGORIA");
    sql.close();
    return insertcate.recordset;
  } catch {
    error;
  }
  console.log(error);
}

async function updateCategoria(classCat) {
  try {
    let pool = await sql.connect(config);
    let updatecate = await pool
      .request()
      .input("cat_id", sql.Int, classCat.cat_id)
      .input("cat_nom", sql.VarChar, classCat.cat_nom)
      .input("cat_obs", sql.VarChar, classCat.cat_obs)
      .execute("SP_UP_CATEGORIA");
    sql.close();
    return updatecate.recordset;
  } catch {
    error;
  }
  console.log(error);
}

module.exports = {
  getCategorias: getCategorias,
  getCategoriasxID: getCategoriasxID,
  insertCategoria: insertCategoria,
  updateCategoria: updateCategoria,
};
