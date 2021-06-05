const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype==='image/png') {

            cb(null, 'uploads/images/')
        } 
        else if (file.mimetype === 'application/pdf' || file.mimetype ==='application/msword' || file.mimetype ==='application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            cb(null, 'uploads/files/')
        } 
        else{
            cb(null, false)
        }
    },
    filename:(req, file, cb)=>{
        cb(null, new Date().toISOString().replace(/:/g, '-')+'-'+file.originalname);

    }  
})


const upload = multer({storage:storage});
module.exports = {upload}