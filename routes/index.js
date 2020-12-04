const fse = require("fs-extra");
const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const files = await fse.readdir(path.resolve("public", "js"));
  const selectedFile = files.find((file) => file === req.query.file);
  res.render("index", { selectedFile, files });
  next();
});

module.exports = router;
