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
exports.vehicle_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Vehicle.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.vehicle_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Vehicle.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    }
}; 
 
// Handle vehcile update form on PUT. 
exports.vehicle_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await Vehicle.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.name)  
                   toUpdate.name = req.body.name; 
            if(req.body.fuel) toUpdate.fuel = req.body.fuel; 
            if(req.body.wheels) toUpdate.wheels = req.body.wheels; 
            let result = await toUpdate.save(); 
            console.log("Sucess " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`); 
        } 
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