const express = require("express");
const EventEmitter = require("events");

const event = new EventEmitter();

const app = express();
app.use(express.json());

let count = 0;

event.on("counterAPI", () => {
  count++;
  console.log("event called", count);
});

app.get("/", async (req, res) => {
  res.send("/get");
  event.emit("counterAPI");
});

app.get("/search", async (req, res) => {
  res.send("/search");
});

app.get("/count", async (req, res) => {
  res.send("/count");
});

app.listen(5000);
