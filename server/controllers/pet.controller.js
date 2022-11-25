const Pet = require('../models/pet.model')

module.exports.get_all = (req, res) => {
    Pet.find()
        .then(pets => res.json(pets))
        .catch(err => res.json({message: "Error: "+err}));
}

module.exports.get_pet = (req, res) => {
    Pet.findOne({_id: req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.json({message: "Error: "+err}));
}

module.exports.get_dogs = (req, res) => {
    Pet.find({pettype: "dog"})
        .then(pets => res.json(pets))
        .catch(err => res.json({message: "Error: "+err}));
}

module.exports.get_cats = (req, res) => {
    Pet.find({pettype: "cat"})
        .then(pets => res.json(pets))
        .catch(err => res.json({message: "Error: "+err}));
}

// City + Type of pet search bar
module.exports.search_bar = (req, res) => {
    Pet.createIndexes({name: "text", description: "text", breed: "text", age: "text", size: "text", gender: "text"})
    Pet.find( {$text: {$search: "texto a buscar"} } )
}

module.exports.create_pet = (req, res) => {
    Pet.create(req.body)
        .then(pet => res.json(pet))
        .catch(err => res.json({message: "Error: "+err}));
}

module.exports.update_pet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(pet => res.json(pet))
        .catch(err => res.json({message: "Error: "+err}));
}

module.exports.delete_pet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(result => res.json({result}))
        .catch(err => res.json({message: "Error: "+err}));
}