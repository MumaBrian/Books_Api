require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const notFoundMiddleware = require('./src/middleware/not-found')
const errorHandlerMiddleware = require('./src/middleware/error-handler')
const authRouter = require('./src/routes/authRoutes')
const userRouter = require('./src/routes/userRoutes')
const bookRouter = require('./src/routes/bookRoutes')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

const port = process.env.PORT || 3000

// database
const connectDB = require('./db/connect');

app.use(cors());
app.use(xss());
app.use(mongoSanitize());


//middleware
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))
app.use(express.static('./public'))


//Route

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/books', bookRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);

        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start();

console.log('E-Commerce API');
