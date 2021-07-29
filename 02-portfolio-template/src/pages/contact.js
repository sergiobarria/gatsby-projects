import React from 'react'
import Seo from '../components/Seo'

const contact = () => {
  return (
    <>
      <section className='contact-page'>
        <article className='contact-form'>
          <h3>get in touch</h3>
          <form>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='form-control
              '
              />
              <input
                type='email'
                name='email'
                placeholder='email'
                className='form-control
              '
              />
              <textarea
                name='message'
                placeholder='message'
                rows='5'
                className='form-control'
              ></textarea>
            </div>
            <button className='submit-btn btn' type='submit'>
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
