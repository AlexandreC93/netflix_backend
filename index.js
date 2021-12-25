const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth.route.js')
const userRoute = require('./routes/users.route.js')

dotenv.config()

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Database connected"))
    .catch(err => console.error(err))

app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)

const port = 4000;


app.listen(port, () => {
    console.log("Backend is listening on port " + port)
})

