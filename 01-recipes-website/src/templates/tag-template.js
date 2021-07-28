import React from 'react'
import { graphql } from 'gatsby'

import RecipesList from '../components/RecipesList'
import Layout from '../components/Layout'

export const query = graphql`
  query getRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const TagTemplatePage = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <Layout>
      <main className='page'>
        <h2>{pageContext.tag}</h2>
        <div className='tag-recipes'>
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export default TagTemplatePage
