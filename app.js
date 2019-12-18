//3rd party libraries
const bodyParser = require('body-parser')
const express = require("express");
const cors = require("cors");


// require mongo Db
require('dotenv').config();
require("./config/db");

//require controllers
const UsersController = require("./controllers/UsersController");
const ProductController = require("./controllers/ProductController");
const CategoryController = require("./controllers/CategoryController");







//express app
const app = express();
app.listen(process.env.PORT);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use(cors());    

// Home Route
app.get("/",(req,res)=>{
    res.send("OK");
});
// User routes
app.get("/users",UsersController.list);

app.get("/users/:userId",UsersController.getOne);

app.post("/users",UsersController.create);


app.delete("/users/:userId",UsersController.deleteUser);

app.put("/users/:userId",UsersController.update);

//Product Routes


app.get("/product",ProductController.list);

app.get("/product/:productId",ProductController.getOne);

app.post("/product",ProductController.create);


app.delete("/product/:productId",ProductController.deleteProduct);

app.put("/product/:productId",ProductController.update);


app.get("/product/category/:categoryId",ProductController.getProduct)
//Category Routes 

app.get("/category",CategoryController.list);

app.get("/category/:categoryId",CategoryController.getOne);

app.post("/category",CategoryController.create);


app.delete("/category/:productId",CategoryController.deleteCategory);

app.put("/category/:categoryId",CategoryController.update);


