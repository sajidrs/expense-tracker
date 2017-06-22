var Customer = require('../models/customer');
module.exports = function(router){

    router.post('/customers', function(req, res){
        
        console.log(req.body);
        
        var customer = new Customer();
        customer.date = req.body.date;
        customer.expense = req.body.expense;
        customer.category = req.body.category;
        customer.value = req.body.value;
        console.log("ok");
        
        customer.save(function(err, data){
            console.log("saved");
            if(err)
                throw err;
            res.json(data);
            console.log("saved1");
        });
    });
}