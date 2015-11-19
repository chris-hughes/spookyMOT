var express = require('express');
var router = express.Router();


// List
router.get('/', function(req,res,next){
	res.send("some vehicle resource")
});

// Create 
router.post('/', function(req, res) {
});

// Read
router.get('/:id', function(req, res) {
});

// Update
router.put('/:id', function(req, res) {
});

// Delete
router.delete('/:id', function(req, res) {
});

module.exports = router;