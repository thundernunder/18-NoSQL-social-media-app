const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) =>{
    return res.send("Not the right route");
});

module.exports = router;