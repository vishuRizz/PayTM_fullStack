const express = require("express");
const router = express.Router();
router.use(express.json());
const { Accounts } = require("../database/db");
const authMiddleware = require("../middlewares/AuthMiddleware");

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Accounts.findOne({
    userId: req.userId,
  });
  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const { amount, to } = req.body;
  const session = await mongoose.startSession();
  try {
    const account = await Accounts.findOne({
      userId: req.userId,
    }).session(session);

    if (!account || account.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({
        message:
          "account balance is not enough or account does not exist maybe",
      });
    }
    const toAccount = await Accounts.findOne({ userId: to }).session(session);
    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "the receiver account does not exist in database",
      });
    }

    // now let the trasaction begin
    await Accounts.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    );
    await Accounts.updateOne({ userId: to }, { $inc: { balance: amount } });
    await session.commitTransaction();
    res.json({
      message: "transaction complete",
    }) } catch(error){
        await session.abortTransaction();
        res.status(400).json({
            message: error.message,
            });
  } finally {
    await session.endSession();
  }
});
module.exports = accountRouter;
