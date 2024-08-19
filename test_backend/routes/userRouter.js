const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
router.use(express.json());
const zod = require("zod");
const User = require("../db/db");
const JWT_SECRET = require("../config");
const authMiddleware = require("../authMiddleware");
const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "input might be wrong",
    });
  }
  const existingUser = await User.findOne({
    username: req.body.username,
  });
  if (existingUser) {
    return res.status(400).json({
      message: "username already exists",
    });
  }
  const user = await User.create({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });
  const userId = user._id;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );
  res.json({
    message: "user created successfully",
    token: token,
  });
});
const signInBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});


router.post("/signin", async(req, res) => {
  const { success } = signInBody.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "invalid type of input",
    });
  }
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      message: "user signed in succesfully",
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error while logging in",
  });
  
});

module.exports = router;
