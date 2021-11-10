var Vehicle = require('../models/vehicle'); 
 
// List of all Vehicles 
exports.vehcile_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Vehcile list'); 
}; 
 
// for a specific Vehcile. 
exports.vehcile_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Vehcile detail: ' + req.params.id); 
}; 
 
// Handle vehcile create on POST. 
exports.vehcile_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Vehcile create POST'); 
}; 
 
// Handle vehcile delete form on DELETE. 
exports.vehcile_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Vehcile delete DELETE ' + req.params.id); 
}; 
 
// Handle vehcile update form on PUT. 
exports.vehcile_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Vehcile update PUT' + req.params.id); 
}; 