import  express  from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'
import connectToMongoDb from './db/connectToMongoDb.js';

const app=express();
const PORT=process.env.PORT ;

dotenv.config();
app.use(express.json());
app.use("/api/auth",authRoutes)


// app.get('/',(req,res)=>{
//     res.send("Hello world!")
// });

app.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`server runnuing successfully ${PORT}`)
});