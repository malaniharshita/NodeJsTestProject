const express = require('express');
const router = express.Router();
const itemController = require('../controller/item');

router.post('/add-item', itemController.postItem);
router.get('/get-items', itemController.getItem);
router.put('/update-item/:id/:buttonId', itemController.updateItem);

module.exports = router;