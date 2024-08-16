import React from 'react'
import { Toaster } from 'react-hot-toast'
import './RecipeCard.css'

const RecipeCard = ({ title, category, image, ingredients, description }) => {
    return (
        <div className='recipe-card'>
            <h3 className='recipe-card-title'>{title}</h3>
            <img src={image} alt={title} className='recipe-card-img' />
            <p className='recipe-card-category'> {category}</p>
            <p className='recipe-card-ingredients'><span style={{fontWeight:'500'}}>* Ingredients :</span> {ingredients}</p>
            <p className='recipe-card-description'><span style={{fontWeight:'500'}}>* Description :</span> {description}</p>
            <Toaster />
        </div>
    )
}

export default RecipeCard