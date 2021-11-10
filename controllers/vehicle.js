var Vehicle = require('../models/vehicle'); 
 
// List of all Vehicles 
exports.vehicle_list = async function(req, res) { 
    try{ 
        let vehicles = await Vehicle.find(); 
        res.send(vehicles); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Vehcile. 
exports.vehicle_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Vehcile detail: ' + req.params.id); 
}; 
 
// Handle vehcile create on POST. 
exports.vehicle_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Vehicle(); 
    document.name = req.body.name; 
    document.fuel = req.body.fuel; 
    document.wheels = req.body.wheels; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    } 
}; 
 
// Handle vehcile delete form on DELETE. 
exports.vehicle_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Vehcile delete DELETE ' + req.params.id); 
}; 
 
// Handle vehcile update form on PUT. 
exports.vehicle_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Vehcile update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.vehicle_view_all_Page = async function(req, res) { 
    try{ 
        let vehicles = await Vehicle.find(); 
        res.render('vehicles', { title: 'Vehicle Search Results', results: vehicles }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 