const router = require("express").Router();
const exampleRoutes = require("./examples");

router.use("/examples", exampleRoutes);
router.post("/saveData", function(req,res){
console.log("We hit the route", req.body)
})

module.exports = router;
