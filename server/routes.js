const router = require('express').Router();
const controller = require('./controller.js');

router
  .get(controller.get)
  .post(controller.post);

module.exports = router;