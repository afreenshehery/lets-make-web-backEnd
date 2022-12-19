const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const middelware = require("../middeleware/middToken");


router.post("/signUp", controller.Register)

router.post("/logIn", controller.login)
router.post("/project", middelware.validateUser, controller.Project)
router.get("/getUserDetails/:id", middelware.validateUser, controller.getUser)

router.put('/UserUpdate/:id', middelware.validateUser, controller.updateUser);
router.post('/getAllUser', middelware.validateUser, controller.getAllUser)
router.delete('/deteleUser/:id', middelware.validateUser, controller.deleteUser)
module.exports = router;