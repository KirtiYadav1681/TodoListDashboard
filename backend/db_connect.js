const  mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect( process.env.MONGO_URL, {dbName: 'todoDashboard'} )
    .then(() => console.log('Connected to Mongoose'))
    .catch((err) => console.log(err));