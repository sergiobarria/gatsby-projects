import React from 'react'

import Layout from '../components/Layout'
import AllRecipes from '../components/AllRecipes'
import Seo from '../components/SEO'

const RecipesPage = () => {
  return (
    <Layout>
      <Seo title='Recipes' />
      <main className='page'>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default RecipesPage
