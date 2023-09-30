const mongoose = require('mongoose');
const pageHeaderSchema = new mongoose.Schema({
    title: String,
    para: String,
    titlepara: String,
    listpara: String,
    finalpara: String,
});

const paymentSchema = new mongoose.Schema({
    details: String,
    cardNumber: String,
    expiration: String,
    cvv: String,
    options: String,
    creditcard: String,
    paynow: String,
});

const popularDishSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    rating: Number,
});

const menuSchema = new mongoose.Schema({
    title: String,
    popularDishes: popularDishSchema,
    popularDish: popularDishSchema,
    popular: popularDishSchema,
    dish: popularDishSchema,
    popularRolls: popularDishSchema,
    popularRollers: popularDishSchema,
});

const signinSchema = new mongoose.Schema({
    heading: String,
    details: String,
    google: String,
    apple: String,
    email: String,
    password: String,
    forgetPassword: String,
    resetPassword: String,
    createAccount: String,
    footerHeader: String,
    footer: String,
});

const PageHeader = mongoose.model('PageHeader', pageHeaderSchema);
const Payment = mongoose.model('Payment', paymentSchema);
const PopularDish = mongoose.model('PopularDish', popularDishSchema);
const Menu = mongoose.model('Menu', menuSchema);
const Signin = mongoose.model('Signin', signinSchema);

// Export the models
module.exports = {
    PageHeader,
    Payment,
    PopularDish,
    Menu,
    Signin,
};
 
