const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is root."));

router.get("/users", controllers.getAllUsers);

router.get("/users/:id", controllers.getUser);

router.post("/users", controllers.createUser);

router.put("/users/:id", controllers.updateUser);

router.delete("/users/:id", controllers.deleteUser);

module.exports = router;
