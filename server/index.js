const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const routes = require('./routes/api')
const bodyParser = require('body-parser')
dotenv.config();
const app = express();
app.use(bodyParser.json())
app.use(routes)


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
}
mongoose.connect(process.env.DB_CONNECT,
    connectionParams
).then(() => {
    console.log('db connected!!!!!!!');
}).catch((error) => {
    console.log("error::", error);
})

app.listen(process.env.PORT, () => {
    console.log(`app listening at http://localhost:${process.env.PORT}`);
})