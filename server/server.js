import  express  from 'express';
const morgan = require('morgan');
import cors from 'cors';
import mongoose from 'mongoose';
require('dotenv').config();
import cookieParser from 'cookie-parser';
const userRouter = require('./routes/auth')
import csrf from 'csurf';


const csrfProrection = csrf({cookie:true})
// db connection 
mongoose.connect(process.env.DATABASE).then(()=> console.log('##DB Connected##'))
.catch((e) => console.log(e))

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
app.use(cookieParser());

// csrf
app.use(csrfProrection);
app.get('/api/csrf-token',(req,res)=>{
    res.json({csrfToken:req.csrfToken()})
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})