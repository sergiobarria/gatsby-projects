import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

const ProjectTemplate = ({ pageContext, data }) => {
  return (
    <>
      <Seo
        title={data.strapiProject.title.toUpperCase()}
        description={data.strapiProject.image.localFile.publicURL}
      />
      <main className='project-template-page'>
        <h2>{pageContext.title}</h2>
        <p>{data.strapiProject.description}</p>
      </main>
    </>
  )
}

export default ProjectTemplate
