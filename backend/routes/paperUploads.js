const router = require("express").Router();
const { upload } = require("../middleware/filehelper");
const PaperUpload = require("../models/PaperUpload");

router.route('/newPaperUpload').post(upload.single('file'),async(req, res)=> {

    try{
        // const file = req.file;
        const file = new PaperUpload({
            conference: req.body.conference,
            user: req.body.user,
            fileName : req.file.originalname,
            filePath : req.file.path,
            fileType : req.file.mimetype,
            fileSize  : fileSizeFormatter(req.file.size, 2), //0.00
            title: req.body.title,
        })
        await file.save();
        console.log(file);
        res.status(201).send('file uploaded succesfully')
    }catch(err){
        res.status(400).send(err.message)
    }
    
    
})
const fileSizeFormatter = (bytes, decimal) =>{
    if(bytes === 0 ){
        return '0 Bytes';
    }

    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB','GB', 'TB'];
    const index = Math.floor(Math.log(bytes)/Math.log(1000));
    return parseFloat((bytes/Math.pow(1000, index)).toFixed(dm)) +sizes[index];


}
module.exports = router;

