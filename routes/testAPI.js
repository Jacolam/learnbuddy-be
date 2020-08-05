var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
  res.send("Ideally this sends a quest from mongodb and we produce the information that we want");
});

module.exports = router;
