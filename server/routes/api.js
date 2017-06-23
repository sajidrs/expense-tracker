var Customer = require('../models/customer');
module.exports = function(router){

    router.post('/customers', function(req, res){
        
        console.log(req.body);
        
        var customer = new Customer();
        customer.date = req.body.date;
        customer.expense = req.body.expense;
        customer.category = req.body.category;
        customer.value = req.body.value;
        
        customer.save(function(err, data){
            console.log("saved");
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    router.get('/customers', function(req, res){
        Customer.find({}, function(err, data){
            res.json(data);
        });
    });
    
    router.delete('/customers', function(req, res){
        Customer.remove({}, function(req, res){
            res.json({result: err ? 'error': 'ok'});
        });
    });
    
     router.get('/customers/:id', function(req, res){
        Customer.findOne({_id: req.params.id}, function(err, data){
            res.json(data);
        })
    })
    
    router.delete('/customers/:id', function(req, res){
        Customer.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    });  
    
    router.post('/customers/:id', function(req, res){
        Customer.findOne({_id: req.params.id}, function(err, data){
            var customer = data;
            customer.date = req.body.date;
            customer.expense = req.body.expense;
            customer.category = req.body.category;
            customer.value = req.body.value;
            
            customer.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
}