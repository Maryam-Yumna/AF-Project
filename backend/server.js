const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
var fs = require('fs');

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false

});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success!!");
});

// http://localhost:8070/user
const userRouter = require('./routes/users.js'); 
app.use('/user', userRouter);

// http://localhost:8070/conference
const conferenceRouter = require('./routes/conferences.js');
app.use('/conference', conferenceRouter);

// http://localhost:8070/workshop
const workshopRouter = require('./routes/workshops.js');
app.use('/workshop', workshopRouter);

// http://localhost:8070/keynoteSpeakerTemp
const keynoteSpeakerTempRouter = require('./routes/keynoteRouteTemp.js');
app.use('/keynoteSpeakerTemp', keynoteSpeakerTempRouter);

// http://localhost:8070/keynoteSpeaker
const keynoteSpeakerRouter = require('./routes/keynoteRoute.js');
app.use('/keynoteSpeaker', keynoteSpeakerRouter);

const workshopUploadRouter = require('./routes/workshopUploads.js');
app.use('/workshopUpload', workshopUploadRouter);

const conferenceTempRouter = require('./routes/conferenceTemp.js');
app.use('/conferenceTemp', conferenceTempRouter);

const workshopTempRouter = require('./routes/workshopTemp.js');
app.use('/workshopTemp', workshopTempRouter);

const paymentRouter = require('./routes/payments.js');
app.use('/payment', paymentRouter);

const authRouter = require('./routes/auth.js'); 
app.use('/auth', authRouter);

const paperUploadRouter = require('./routes/paperUploads.js');
app.use('/paperUpload', paperUploadRouter);

const path = require("path");
app.use('/uploads/files',express.static(path.join(__dirname, "uploads/files/")));
app.use('/uploads/images',express.static(path.join(__dirname, "uploads/images/")));

app.listen(PORT, () => {
    console.log(`server is up and running in port ${PORT}`);
});
