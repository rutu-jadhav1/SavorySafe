import React from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import './RecipeCard.css'
import { Link } from 'react-router-dom'

const RecipeCard = ({ _id, title, category, image, ingredients, description, loadRecipe }) => {
    const deleteRecipe = async (recipeId) => {

        await axios.delete(`${process.env.REACT_APP_API_URL}/recipe/${recipeId}`)
        toast.success('Recipe deleted successfully')
        loadRecipe();
    }
    return (
        <div className='recipe-card'>
            <h3 className='recipe-card-title'>{title}</h3>
            <img src={image} alt={title} className='recipe-card-img' />
            <p className='recipe-card-category'> {category}</p>
            <p className='recipe-card-ingredients'><span style={{ fontWeight: '500' }}>* Ingredients :</span> {ingredients}</p>
            <p className='recipe-card-description'><span style={{ fontWeight: '500' }}>* Description :</span> {description}</p>
            
            <button type='button' className='recipe-card-btn' onClick={() => { deleteRecipe(_id) }}>Delete</button>

        </div>
    )
}

export default RecipeCard