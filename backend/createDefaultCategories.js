import mysql from "mysql"

var connection = mysql.createPool({
  host: "etsy-database.caphir2hzg3k.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "admin123",
  port: "3306",
  database: "etsydatabase",
})

var categories = [
  ["ct-1234", "mobiles", null, null, true],
  ["ct-1235", "tops", null, null, true],
  ["ct-12346", "innerwear", null, null, true],
]
connection.getConnection((err) => {
  if (err) {
    console.log("######### error occurred")
    throw "Error occoured" + err
  }
  console.log("Connection Created")
  categories.forEach((category) => {
    connection.query(
      "INSERT INTO category VALUES (?,?,?,?,?)",
      category,
      (err, results, fields) => {
        console.log(err, results)
      }
    )
  })
})