import React from 'react'
import { graphql } from 'gatsby'
import Projects from '../components/Projects'
import Seo from '../components/Seo'

export const query = graphql`
  {
    allStrapiProject {
      totalCount
      nodes {
        id
        title
        description
        slug
        github
        featured
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`

const ProjectsPage = ({ data }) => {
  const projects = data.allStrapiProject.nodes
  return (
    <>
      <Seo title='projects' />
      <main>
        <section className='project-page'>
          <Projects title='all projects' projects={projects} />
        </section>
      </main>
    </>
  )
}

export default ProjectsPage
