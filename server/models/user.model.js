const mongoose = require('mongoose');
const bcrypt = require('bcrypt') //npm install bcrypt

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    city: {
        type: String,
        required: [true, "City name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required."],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Enter a valid email."
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [7, "The password must be at least 7 characters long"]
    }

}, {timestamps: true, versionKey: false})

//Temporal attribute
UserSchema.virtual('confirmPassword')
    .get( ()=> this._confirmPassword )
    .set( value => this._confirmPassword = value );


//Runs before validating the user schema
UserSchema.pre('validate', function(next) {
    if(this.password != this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match');
    }

    next();
});

//Encrypt the password before saving the user
UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10) //10 -> hash times
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
