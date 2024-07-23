const express = require('express');
const router = express.Router();
const { ImageUpload } = require('../models/imageUpload.js');

router.get(`/`, async (req, res) => {

    try {
    
        const imageUploadList = await ImageUpload.find();


        if (!imageUploadList) {
            res.status(500).json({ success: false })
        }

        return res.status(200).json(imageUploadList);

    } catch (error) {
        res.status(500).json({ success: false })
    }


});


router.delete('/deleteAllImages', async (req, res) => {

    const images = await ImageUpload.find();
    let deletedImage;
    
    if (images.length !== 0) {
        for (image of images) {
            deletedImage = await ImageUpload.findByIdAndDelete(image.id);
            //console.log(image)
        }
    }

    res.json(deletedImage)

});


module.exports = router;

