import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Jobs from '../components/Jobs'
import Projects from '../components/Projects'
import Seo from '../components/Seo'

export const query = graphql`
  {
    allStrapiProject(filter: { featured: { eq: true } }) {
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

const IndexPage = ({ data }) => {
  const projects = data.allStrapiProject.nodes

  return (
    <>
      <Seo title='home' />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title='featured projects' showLink projects={projects} />
      </main>
    </>
  )
}

export default IndexPage
