require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
var cors = require('cors')
const errorMiddleware = require('./middleware/errorMiddleware');
const productRoute = require('./routes/productRoutes');
const userRoute = require('./routes/userRoute');

const app = express();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND;

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/products', productRoute);
app.use('/api/users', userRoute);


app.get('/', (req, res) => {
    throw new Error('Fake error');
    //res.send('Hello world');
});

app.get('/blog', (req, res) => {
    throw new Error('ser error');
    //res.send('Hello Blog from youu');
});

app.use(errorMiddleware);
mongoose.connect(MONGO_URL)
.then(() => {
        console.log("connected to database");
        app.listen(PORT, () => console.log(`listen to the ${PORT}`));
    })
    .catch(() => console.log(error));