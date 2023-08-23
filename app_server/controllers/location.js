module.exports.about= function(req,res){
    res.render('about',{title:'About'});
};

module.exports.login = function(req,res){
    res.render('login',{title:'login'});
};

module.exports.menu= function(req,res){
    res.render('menu',{title:'menu'});
};
module.exports.payment= function(req,res){
    res.render('payment',{title:'menu'});
};



