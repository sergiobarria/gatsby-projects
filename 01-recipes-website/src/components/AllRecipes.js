import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import TagsList from './TagsList'
import RecipesList from './RecipesList'

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title }) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
      }
    }
  }
`

const AllRecipes = () => {
  // const {
  //   allContentfulRecipe: { nodes: recipes },
  // } = useStaticQuery(query)
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <section className='recipes-container'>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
