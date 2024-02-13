
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "ctrangel",
  // password: "Rangel155",
  password: "n6DdDHS49i4uzMGHgiTAAZxHDXRlMZfq",
  // host: "localhost",
  host: "dpg-cn1d8hf109ks73cf2qe0-a.ohio-postgres.render.com",
  // database: "inventory",
  database: "inventory_bcqt",
  port: 5432,
});

module.exports = pool;
