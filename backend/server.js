import  express  from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from'body-parser'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'

import connectToMongoDb from './db/connectToMongoDb.js';

const app=express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)



const PORT=process.env.PORT ;
// app.get('/',(req,res)=>{
//     res.send("Hello world!")
// });

app.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`server runnuing successfully ${PORT}`)
});