// const express = require("express");
// const {
//   registerUser,
//   authUser,
//   allUsers,
// } = require("../controllers/userControllers");
// const { protect } = require("../middleware/authMiddleware");

// const router = express.Router();

// router.route("/").get(protect, allUsers);
// router.route("/").post(registerUser);
// router.post("/login", authUser);

// module.exports = router;
const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userControllers");

router.route("/").post(registerUser);

module.exports = router;
