const express = require("express");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User } = require("../database/db");
const JWT_SECRET = require("../config");
const authMiddleware = require("../middlewares/AuthMiddleware");
const signupSchema = zod.object({
  username: zod.string.email(),
  lastName: zod.string,
  password: zod.string,
  firstName: zod.string(),
});

router.post("/signup", middleware, async (req, res, next) => {
  const body = req.body;
  const result = signupSchema.safeParse(body);
  if (!result) {
    [
      res
        .status(400)
        .json({ message: "userName already taken / invalid inputs" }),
    ];
  }
  // let's check if user already exits or not.
  const user = User.findOne({
    username: body.username,
  });
  if (user._id) {
    res.status(400).json({
      message: "username already taken",
    });
  }
  // now lt's create a new user
  const dbUser = await User.create({
    username: body.username,
    fisrtName: body.firstName,
    lastname: body.lastName,
    password: body.password,
  });
  const token = jwt.sign(
    {
      userId: dbUser._id,
    },
    JWT_SECRET
  );
  res.json({
    message: "user created sucessfully",
    token: token,
  });
});

const signInBody = zod.object({
  username: zod.string.email(),
  password: zod.string(),
});

//

router.use("signin", async (req, res, next) => {
  const { username, password } = signInBody.safeParse(req.body);
  const user = User.findOne({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
  } else {
    res.status(411).json({
      message: "Error while logging in",
    });
  }
});

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
})

//
router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstname: {
          $regex: filter,
        },
      },
      {
        lastname: {
          $regex: filter,
        },
      },
    ],
  });
  res.json({
    user: users.map((user) => ({
      id: user._id,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
    })),
  });
});

module.exports = router;
 