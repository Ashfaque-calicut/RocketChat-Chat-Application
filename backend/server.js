import  express  from 'express';
import dotenv from 'dotenv';
import bodyParser from'body-parser'
import authRoutes from './routes/auth.routes.js'
import connectToMongoDb from './db/connectToMongoDb.js';

const app=express();
dotenv.config();
app.use(bodyParser.json());
app.use("/api/auth",authRoutes)
app.use(express.json());

const PORT=process.env.PORT ;
// app.get('/',(req,res)=>{
//     res.send("Hello world!")
// });

app.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`server runnuing successfully ${PORT}`)
});