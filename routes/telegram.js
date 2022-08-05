const express = require("express");
const router = express.Router();
const ctrlTelegram = require('../api/telegramMsg');


// router.get("/", function (req, res) {
//   res.send("index");
//   res.render("index"); 
// });

// router.get("/telegram", function (req, res) {
//   res.send("telegram");
//   console.log('/telegram req', req);
// });

router.post('/', ctrlTelegram.sendMsg);



module.exports = router;
