module.exports.about= function(req,res){
    res.render('about',{
        title: 'Food Hub',
        pageHeader: {
            title: 'Harland Sanders',
            para : 'I am the co-founder of,',
            titlepara:'Grill9 ',
            listpara:'Restaurant and ',
            finalpara:'Website Designer',
        }
    });
};
module.exports.payment= function(req,res){
    res.render('payment',{
      title:'payment',
      payment:{
        details:'Payment Details',
        cardNumber:'Card Number:',
        expiration:'Expiration Date:',
        cvv:'CVV:',
        options:'Payment Options:',
        creditcard:'Credit Card',
        paynow:'Pay Now',
      }
    });
};
module.exports.menu = function (req, res) {
  res.render('menu',{
      title: 'menu',
      popularDishes : {
          name: 'Coffee',
          price: 49,
          description: 'Coffee beans, Water, Milk, Sugar',
          rating: 4,
        },
        popularDish : {
          name: 'Pan Cake',
          price: 499,
          description: 'Lettuce, Tomatoes, Cucumbers, Dressing',
          rating: 5,
        },
        popular: {
          name: 'Burger',
          price: 250,
          description: 'Various Tiffin Items',
          rating: 3,
        },
        dish: {
          name: 'Sushi Rolls',
          price: 690,
          description: 'Rice, Fish, Vegetables, Soy Sauce',
          rating: 4,
        },
        popularRolls: {
          name: 'French Fries',
          price: 252,
          description: 'Potatoes, Salt, Cooking Oil',
          rating: 4,
        },
        popularRollers: {
          name: 'Pizza',
          price: 499,
          description: 'Chicken, Flour, Garlic, Ginger, Soy Sauce',
          rating: 3,
        },
   });
};

module.exports.login = function(req,res){
    res.render('login',{
        title: 'Login Example',
        signin:{
          heading:'Welcome Back!',
          details:'Please enter your details!',
          google:'Log in with Google',
          apple:'Log in with Apple',
          email:'Email:',
          password:'Password:',
          forgetPassword:'Did you forget your password?',
          resetPassword:'Reset Password',
          createAccount:'Create Account',
          footerHeader:'Greetings from Food Hub!',
          footer:'Your ultimate guide to navigating the Food Hub Restaurant by discovering the place with ease.'
        }
    });
};




