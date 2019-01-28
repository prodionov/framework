const express = require("express");
const { validationResult } = require("express-validator/check");
const { inputValidation } = require("./utils/validation");
const { palindromWrapper } = require("./utils/palindrom");
const { topScoresUpdate } = require("./utils/scores");

let apiRouter = express.Router();
let scores = [];

apiRouter.get("/api/getScores", async (req, res) => {
  res.send(scores);
  res.end();
});

apiRouter.post("/api/submitEntry", inputValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error(errors.array());
    return res.sendStatus(422);
  }
  const { body } = req;
  let currentScore = palindromWrapper(body.word);
  scores = topScoresUpdate(currentScore, body.name, scores);
  res.sendStatus(200);
});

module.exports = { apiRouter };
