const PetController = require("../controllers/pet.controller");
const UserController = require("../controllers/user.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {
    app.get("/api/dogs", PetController.get_dogs);
    app.get("/api/cats", authenticate,  PetController.get_cats);
    app.get("/api/friend/:id",  PetController.get_pet);
    app.put("/api/update_friend", authenticate, PetController.update_pet);
    app.post("/api/addnewpet", PetController.create_pet);
    
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/logout', UserController.logout);
}