var express = require('express');
var router = express.Router();

const public_folder = process.env.PWD;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.download(`${public_folder}/public/stylesheets/style.css`);
  //res.send('respond with a resource');
});

module.exports = router;
