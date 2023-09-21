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

module.exports.login = function(req,res){
    // res.render('login',{title:'login'});
    res.render('login',{
        title: 'Login Example',
        pageHeader:{
            title:'Welcome back',
        }
    }
    );
};

module.exports.menu= function(req,res){
    res.render('menu',{title:'menu'});
};
module.exports.payment= function(req,res){
    res.render('payment',{title:'menu'});
};



