var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  //port: 3306,
  database: "bamazon_DB"
});

con.connect(function(err) {
  if (err) throw (err);
  con.query("SELECT * FROM products", function(err, result, fields) {
    if (err) throw (err);
    console.log(result);
    mooster();
//     con.query("SELECT stock_quantity* FROM products", function(err, result, fields) {
//       if (err) throw (err);
//       console.log(result);
// });
  });

});

//-----------------------------------------------------------------------------------------------------------------------

function mooster() {
  console.log("list the item_id and the quantity wanted of the item you want after.");
  var prompt = require('prompt');
  prompt.start();
  prompt.get(["id:"], function(err, result) {
    console.log(result);


  });

}
