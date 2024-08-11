import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { postLogin, PostSignup } from './controllers/user.js';
import { deleteRecipe, getRecipe, getRecipes, postRecipe } from './controllers/recipe.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//connect to mongoDB

const connectDB = async () => {
        const conn = await mongoose.connect(process.env.MONGO_URL)

        if(conn) {
            console.log(`✅ MongoDB connected successfully📦`);
        }
};
connectDB();

app.get("/", (req,res)=>{
    res.json({
        message : `Welcome to Savory Safe`
    })
})
app.post("/recipe", postRecipe)
app.get("/recipes", getRecipes)
app.post("/signup", PostSignup)

app.post("/login", postLogin)
app.get("/recipe/:id", getRecipe)


app.delete("/recipe/:id", deleteRecipe)

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
