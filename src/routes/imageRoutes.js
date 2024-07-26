const express = require('express');
const { getImageByDate, postImage, deleteImage } = require('../controllers/imageController');

const router = express.Router();

router.post('/', postImage);
router.get('/', getImageByDate);
router.delete('/', deleteImage);

module.exports = router;