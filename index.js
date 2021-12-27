const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth.route.js')
const userRoute = require('./routes/users.route.js')
const movieRoute = require('./routes/movies.route.js')

const port = 4000;

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
app.use('/api/movies', movieRoute)



app.listen(port, () => {
    console.log("Backend is listening on port " + port)
})

