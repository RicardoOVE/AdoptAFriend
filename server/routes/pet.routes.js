const PetController = require("../controllers/pet.controller");
const UserController = require("../controllers/user.controller");

const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {
    app.get("/api/dogs", PetController.get_dogs);
    app.get("/api/cats", PetController.get_cats);
    app.get("/api/friend", PetController.get_pet);
    app.put("/api/update_friend", authenticate, PetController.update_pet);

    //app.get("/api/productos", ProductoController.get_all);
    //app.get("/api/productos/:id", ProductoController.get_product);
    //app.post("/api/productos", ProductoController.create_product);
    //app.put("/api/productos/:id", ProductoController.update_product);
    //app.delete("/api/productos/:id", ProductoController.delete_product);

    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/logout', UserController.logout);
}