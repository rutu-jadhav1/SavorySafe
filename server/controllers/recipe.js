import User from '../models/User.js';
import Recipe from './../models/Recipe.js'

const postRecipe = async (req, res) => {
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
    try {
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
    const allRecipes = await Recipe.find().sort({updatedAt: -1})

    res.json({
        success : true,
        data : allRecipes,
        message : "All Recipe's fetched successfully"
    })   
}

const getRecipe = async (req, res) => {
    const { userId } = req.query
    try {
        const recipes = await Recipe.find({ user: userId });
        if (recipes.length > 0) {
            res.json({
                success: true,
                data: recipes,
                message: "Recipes retrieved successfully."
            });
        } else {
            res.json({
                success: false,
                data: [],
                message: "No recipes found for this user."
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            data: null,
            message: error.message || "An error occurred while retrieving recipes."
        });
    }

}

const updateRecipe = async (req, res) => {
    const { id } = req.params
    const { title, category, image, ingredients, description } = req.body

    const updatedRecipe = await Recipe.findByIdAndUpdate(id, {
        title, category, image, ingredients, description
    })
    res.json({
        success: true,
        data: updatedRecipe,
        message: "Recipe Updated Successfully"
    })

}
const deleteRecipe = async (req, res) => {
    const { id } = req.params

    await Recipe.deleteOne({
        _id: id
    })
    res.json({
        success: true,
        data: null,
        message: "Recipe Deleted Successfully"
    })
}

export { postRecipe, deleteRecipe, getRecipe, getRecipes ,updateRecipe }