const bike = require('../models/bike');
var Bike = require('../models/bike');
// List of all Bikes
exports.bike_list = function(req, res) {
res.send('NOT IMPLEMENTED: Bike list');
};
// for a specific Bike.
exports.bike_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Bike.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
// Handle Costume create on POST.
exports.bike_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Bike();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.bike_name = req.body.bike_name;
    document.bike_mielage = req.body.bike_mielage;
    document.bike_maker = req.body.bike_maker;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle Bike delete on DELETE.
exports.bike_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Bike.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

// Handle Costume update form on PUT.
exports.bike_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Bike.findById( req.params.id)
// Do updates of properties
if(req.body.bike_name) toUpdate.bike_name = req.body.bike_name;
if(req.body.bike_mielage) toUpdate.bike_mielage = req.body.bike_mielage;
if(req.body.bike_maker) toUpdate.bike_maker = req.body.bike_maker;
if(req.body.bike_year) toUpdate.bike_year = req.body.bike_year;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// List of all Bike
exports.bike_list = async function(req, res) {
    try{
    theBike = await Bike.find();
    res.send(theBike);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.bike_view_all_Page = async function(req, res) {
    try{
    theBike = await Bike.find();
    res.render('bike', { title: 'Bike Search Results', results: theBike });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };