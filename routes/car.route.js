const { Router } = require("express");
const { getCarOne, getCar, postCar, updateCar, deleteCar } = require("../controllers/car.controller");
const router = Router();

//router.route("car").get(getCar).post(postCar).put(updateCar).delete(deleteCar);
router.route("/").get(getCar).post(postCar);
router.route("/:id").get(getCarOne).put(updateCar).delete(deleteCar);

module.exports = router;
