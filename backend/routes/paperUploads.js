const router = require("express").Router();
const { upload } = require("../middleware/filehelper");
const PaperUpload = require("../models/PaperUpload");
const auth = require('../middleware/auth');

router.route('/newPaperUpload').post(upload.single('file'),auth, async(req, res)=> {

    try{
        // const file = req.file;
        const file = new PaperUpload({
            conference: req.body.conference,
            user:  req.user.id,
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

router.route('/user/paper').get(auth, (req, res)=>{
    const uid = req.user.id;
    PaperUpload.findOne({user : uid}).populate('user').then((uploads)=>{
        res.json(uploads)
    }).catch((err)=>{
        console.log(err)
    })
   
})

router.route('/:status').get((req, res)=>{
    const status = req.params.status;
    PaperUpload.find({approval: status}).populate('user').then((uploads)=>{
        res.json(uploads)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route('/updateApproval').put((req, res)=>{

    PaperUpload.findOneAndUpdate({_id: req.body.id}, {approval: req.body.approval})
    .then((paper)=>{
        res.json({message:"approval updated"});
    })
    .catch((err)=>{
        console.error(err);
    })
   
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

