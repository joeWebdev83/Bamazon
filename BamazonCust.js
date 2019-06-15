//required dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');
var table = require('cli-table2');

//MySQL connection
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"Petion83",
    database: "Bamazon",
    port: 3306
})
connection.connect(function(err){
	if(err)throw err;
	console.log("connected as id" + connection.threadId);
});


var displayProducts = function(){
	var query = "Select * FROM products";
	connection.query(query, function(err, res){
		if(err) throw err;
		var displayTable = new table ({
			head: ["item_id", "product_name", "department_name", "price", "stock_quantity "],
			colWidths: [10,25,25,10,14]
		});
		for(var i = 0; i < res.length; i++){
			displayTable.push(
				[res[i].item_id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
				);
		}
		console.log(displayTable.toString());
		purchasePrompt();
	});
}

function purchasePrompt(){
	inquirer.prompt([
	{
		name: "ID",
		type: "input",
		message:"Please enter item id you like to purhcase.",
		filter:Number
	},
	{
		name:"Quantity",
		type:"input",
		message:"How many items do you like to purchase?",
		filter:Number
	},

 ]).then(function(answers){
 	var quantityNeeded = answers.Quantity;
    var IDrequested = answers.ID;
    purchaseOrder(IDrequested, quantityNeeded);
});
};

function purchaseOrder(ID, amtNeeded){
   connection.query('Select * FROM products WHERE item_id = ' + ID, function(err,res){
       if(err){console.log(err)};
       if(amtNeeded <= res[0].stock_quantity){
           var totalCost = res[0].price * amtNeeded;
           console.log("Good news your order is in stock!");
           console.log("Your total cost for " + amtNeeded + " " +res[0].product_name + " is " + totalCost + " Thank you!");
           var newStock =  "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?"
           connection.query(newStock, [amtNeeded, ID]);
       } else{
           console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + "to complete your order.");
       };
       displayProducts();
   });
};

displayProducts();

     