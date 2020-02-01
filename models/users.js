const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    firstName: { type: String},
    lastName: { type: String},
    username: { type: String, unique: true},
    password: { type: String}
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

// User.prototype.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };

// User.prototype.hash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
// };



module.exports = User;