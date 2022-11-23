const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/adoptafriend", {
    useNewUrlParser: true,
	useUnifiedTopology: true
})
    .then(()=> console.log("Connecting to the DB (server)"))
    .catch(err => console.log("Error connecting to the DB (server)", err))