const dbconfig = {
  server: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false,
    trustedconnection: false,
    enableArithAbort: true,
  },
};

module.exports = dbconfig;
