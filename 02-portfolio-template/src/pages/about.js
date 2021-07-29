import React from 'react'
import { graphql } from 'gatsby'
import Title from '../components/Title'
import Seo from '../components/Seo'

export const query = graphql`
  {
    strapiAbout {
      title
      info
      stack {
        id
        title
      }
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

const About = ({ data }) => {
  const {
    strapiAbout: { title, image, info, stack },
  } = data

  return (
    <>
      <Seo title='about' />
      <section className='about-page'>
        <div className='section-center about-center'>
          <img
            src={image.localFile.publicURL}
            alt={title}
            className='about-img-svg'
          />
          <article className='about-text'>
            <Title title={title} />
            <p>{info}</p>
            <div className='about-stack'>
              {stack.map(item => (
                <span key={item.id}>{item.title}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default About
