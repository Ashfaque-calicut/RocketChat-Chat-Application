import  express  from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'

const app=express();
dotenv.config();

const PORT=process.env.PORT ;
app.get('/',(req,res)=>{
    res.send("Hello world!")
});
app.use("/api/auth",authRoutes)

app.listen(PORT,()=>console.log((`server runnuing successfully ${PORT}`)))