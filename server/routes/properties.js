const express = require("express");
const router = express.Router();

const Property = require("../models/Property");


router.get("/all", (req, res) => {
    Property.find({}).then(properties => {
        res.json(properties)
    });
});

router.get("/:id", (req, res) => {
    Property.findById(req.params.id).then(properties => {
        res.json(properties)
    });
});

router.post("/add", (req, res) => {
    console.log(req.body)
    const newProperty = new Property({
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        sold_price: req.body.sold_price,
        currency: req.body.currency,
        images: req.body.images,
        type: req.body.type,
      });
    
      newProperty
        .save()
        .then(property => res.json(property))
        .catch(err => console.log(err));
    
});




  module.exports = router;