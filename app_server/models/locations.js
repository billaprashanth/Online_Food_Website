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


module.exports = {
    pageHeaderSchema,
    paymentSchema,
    menuSchema,
    signinSchema,
};


