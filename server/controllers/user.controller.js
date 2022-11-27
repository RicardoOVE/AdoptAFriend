const Usuario = require("../models/user.model");
const jwt = require('jsonwebtoken'); // npm install jsonwebtoken
const secret_key = "This is my secret key";

const bcrypt = require('bcrypt');

module.exports.register = (req, res) => {
    const user = new Usuario(req.body);
    user.save()
        .then(usuario =>{
            const payload = {
                _id: usuario._id
            }
            const myJWT = jwt.sign(payload, secret_key);
            res.cookie("usertoken", myJWT, secret_key,{
                    httpOnly: true
                }).json(usuario);
        })
        .catch(err => res.status(400).json(err));
}

module.exports.login = (req, res) => {
    Usuario.findOne({email: req.body.email})
        .then(user => {
            if(user === null) {
                res.json({error: true, message: "wrong email"});
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordValid => {
                        if(passwordValid) {
                            const payload = {
                                _id: user._id
                            }
                            const myJWT = jwt.sign(payload, secret_key);
                            res
                                .cookie("usertoken", myJWT, secret_key, {
                                    httpOnly: true
                                })
                                .json({error: false, message: "successful login"})
                        } else {
                            res.json({error: true, message: "wrong password"});
                        }
                    })
            }
        })
}

module.exports.addfavorite = (req, res) => {
    Usuario.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(usuario => res.json(usuario))
    .catch(err => res.status(400).json(err));
}

module.exports.get_user = (req, res) => {
    Usuario.findOne({_id: req.params.id})
        .then(usuario => res.json(usuario))
        .catch(err => res.json({message: "Error: "+err}));
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.json({message: "User logout"});
}