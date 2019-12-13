// require express, express route, burgers model file
const express = require("express");
const router = express.Router();
const db= require("../models/");

// get route for home 

router.get("/", function(req,res){
    res.redirect("/burgers");
})


// get route for localhost/burgers
router.get("/burgers", function(req,res){
    db.Burger.findAll().then(function(burgerData){
        console.log(burgerData);
        res.render("index", { burger_data: burgerData});
    });
});

// post route for /burgers/create

router.post("/burgers/create", function(req,res){
   db.Burger.create(req.body.burger_name, function(result){
       res.redirect("/");
   })
})


// put route for /burgers/:id
router.put("/burgers/:id", function(req,res){
    db.Burger.update(req.params.id, function(result){
        res.sendStatus(200);
    })
 })


// export router

module.exports = router;


