import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import RecipesList from '../components/RecipesList'

const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

const FeaturedRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  return (
    <section className='featured-recipes'>
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default FeaturedRecipes
