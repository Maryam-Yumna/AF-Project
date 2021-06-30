const router = require("express").Router();
const { upload } = require("../middleware/filehelper");
const WorkshopUpload = require("../models/WorkshopUpload");
const auth = require('../middleware/auth');

router.route('/newWorkshopUpload').post(upload.single('file'), auth, async(req, res)=> {

    try{
        // const file = req.file;
        const file = new WorkshopUpload({
            user:  req.user.id,
            title: req.body.title,
            fileName : req.file.originalname,
            filePath : req.file.path,
            fileType : req.file.mimetype,
            fileSize  : fileSizeFormatter(req.file.size, 2), //0.00
        })
        await file.save();
        console.log(file);
        res.status(201).send('file uploaded succesfully')
    }catch(err){
        res.status(400).send(err.message)
    }
    
    
})
router.route('/').get((req, res)=>{
    WorkshopUpload.find().populate('user').then((uploads)=>{
        res.json(uploads)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route('/:status').get((req, res)=>{
    const status = req.params.status;
    WorkshopUpload.find({approval: status}).populate('user').then((uploads)=>{
        res.json(uploads)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route('/user/workshop').get(auth, (req, res)=>{
    const uid = req.user.id;
    WorkshopUpload.findOne({user : uid}).populate('user').then((uploads)=>{
        res.json(uploads)
    }).catch((err)=>{
        console.log(err)
    })
   
})

router.route('/updateApproval').put((req, res)=>{

    WorkshopUpload.findOneAndUpdate({_id: req.body.id}, {approval: req.body.approval})
    .then((workshop)=>{
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

