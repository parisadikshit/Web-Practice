import  express  from 'express';
const morgan = require('morgan');
import cors from 'cors';
require('dotenv').config();

const userRouter = require('./routes/users')


// app port 
const port = process.env.PORT || 8080;
// app initialization
const app = express();


// app middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// app routes
app.use(userRouter)

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})