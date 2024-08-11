import User from '../models/User.js';
import Recipe from './../models/Recipe.js'

const postRecipe = async (req,res) => {
    const { title, category, image, ingredients, description, user } = req.body;
    console.log(user)

    const recipe = new Recipe({
        title,
        category,
        image, 
        ingredients, 
        description, 
        user
    })
    try{
        const savedRecipe = await recipe.save();

        res.json({
            success: true,
            data: savedRecipe,
            message: "Recipe Added successfully...!"
        })
    }
    catch (e) {
        res.json({
            success: false,
            data: null,
            message: e.message
        })
    }
}

const getRecipes = async (req,res) => {
    
    const user = await User.find();

    if (!user) {
        return res.json({
            success: false,
            data: null,
            message: "User not found"
        })
    }

    res.json({
        success: true,
        data: user,
        message: "All Recipe fetched successfully"
    })
}

const getRecipe =async (req, res) => {

const {userId} = req.query
console.log("userId :" ,userId)

    const user = await User.findById(userId)

    if(!user){
        return res.json({
            success : false,
            data : null,
            message : `User not found`
        })
    }

    const recipes = await Recipe.find({user : userId}).sort({createdAt : -1});
    res.json({
        success : true,
        data : recipes,
        message : `Transaction fetched successfully`
    })
}
const deleteRecipe = async (req,res)=>{
    const {id} = req.params
   
    await Recipe.deleteOne({
        _id : id
    })
    res.json({
        success :  true,
        data : null,
        message : "Recipe Deleted Successfully"
    })
}

export {postRecipe, getRecipes, deleteRecipe, getRecipe}