import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import toast from 'react-hot-toast'
import axios from 'axios'
import RecipeCard from '../../components/RecipeCard/RecipeCard'

function Home() {
  const [recipe, setRecipe] = useState([])

  const loadRecipes = async () => {
    toast.loading('Loading all Recipes.....')
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/recipes`)
    toast.dismiss()
    toast.success(response.data.message)
    setRecipe(response.data.data)
  }

  useEffect(() => {
    loadRecipes()
  }, [])

  return (
    <div>
      <Navbar/>
      <h2 className='heading heading-style'>Cook🍳, Share🤝, Savor😋</h2>
      <div className='recipe-div'>
        {
          recipe.map((recipe) => {
            const {_id, title, category, image, ingredients, description} = recipe;
            return (
              <RecipeCard
                key={_id}
                title={title}
                category={category}
                image={image}
                ingredients={ingredients}
                description={description}
                loadRecipes={loadRecipes}
              />
            );
          })
        }
      </div>
      
      <Footer/>
    </div>
  )
}

export default Home