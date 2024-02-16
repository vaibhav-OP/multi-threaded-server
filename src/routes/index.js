const express = require("express");
const { Worker } = require("worker_threads");

const router = express.Router();

router.get("/", (req, res) => {
  const worker = new Worker("./src/workers/counter.js");

  worker.on("message", data => {
    res.status(200).send(data.toString());
  });
  worker.on("error", msg => {
    res.status(404).send(`An error occurred: ${msg}`);
  });
});

router.get("/non-blocking", (req, res) => {
  res.send("Hey");
});

module.exports = router;
