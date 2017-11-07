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

    //     con.query("SELECT stock_quantity* FROM products", function(err, result, fields) {
    //       if (err) throw (err);
    //       console.log(result);
    // });
    list();
  });

});

//-----------------------------------------------------------------------------------------------------------------------
//
// function mooster() {
//   console.log("list the item_id and the quantity wanted of the item you want after.");
//   var prompt = require('prompt');
//   prompt.start();
//   prompt.get(["id:", "quantity_wanted"], function(err, result) {
//     console.log(result);
//
// stock_quantity = con.query("SELECT stock_quantity * FROM products");
//
//     if ("quantity_wanted:" > stock_quantity) {
//       console.log("insufficient quantity");
//     } else {
//       stock_quantity = stock_quantity - "quantity_wanted:";
//       //console.log("stock_quantity");
//     }
//   });
//
// }
var inquirer = require("inquirer");

function list() {
  inquirer.prompt([{
      type: 'input',
      name: 'item',
      message: 'Please enter the ID which you would like to purchase.',
    },
    {
      type: 'input',
      name: 'quantity',
      message: 'How many units do you need?',
    }
  ]).then(function(answers) {
    con.query("SELECT * FROM products", function(err, res) {
      if (err) {
        console.log("Error");
      } else {
        if (res[answers.item - 1].stock_quantity < answers.quantity) {
          console.log("Insufficient quantity!");
          list();
        } else {
          var value = (res[answers.item - 1].stock_quantity) - answers.quantity;
          var quantity = res[answers.item - 1].stock_quantity;
          console.log("Total cost: " + "$" + (res[answers.item - 1].price * answers.quantity));
          updateProduct(quantity,value);

        }

      }

    });

  });
}

function updateProduct(quantity, value) {
  var query = con.query(
    "UPDATE products SET WHERE ?", {
      quantity: value
    },
    function(err, res) {
      console.log("You're order is placed!");
    }
  );
}
