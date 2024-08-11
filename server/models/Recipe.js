import { Schema, model } from "mongoose";


 const recipeSchema = new Schema({
    title : {
        type : String,
        require : true,
    },
    category : {
        type : String,
        default : "other",
    },
    image : {
        type : String,
        require : true,
    },
    ingredients : {
        type : String,
        require : true,
    },
    description : {
        type : String,
        require : true,
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : "User",
        require : true
    },
 },{
    timestamps : true
 })

 const recipe = model('recipe', recipeSchema)

 export default recipe;