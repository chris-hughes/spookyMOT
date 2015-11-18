var express = require('express');
var router = express.Router();

/* GET vehicle listing. */
router.get('/', function(req, res, next) {
  res.send('resond with list of vehicles');
});

module.exports = router;
