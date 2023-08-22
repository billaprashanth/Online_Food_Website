module.exports.about= function(req,res){
    res.render('about',{title:'About'});
};

module.exports.login = function(req,res){
    res.render('login',{title:'login'});
};

module.exports.menu= function(req,res){
    res.render('menu',{title:'menu'});
};

// module.exports.locationInfo3= function(req,res){
//     res.render('location-info3',{title:'location '});
// };

// module.exports.addReview= function(req,res){
//     res.render('location-review-form',{title:'review'});
// };

// module.exports.addReview= function(req,res){
//     res.render('location-review-form',{title:'review'});
// };

