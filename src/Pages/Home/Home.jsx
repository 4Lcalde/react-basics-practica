import SelectHome from '../../Components/SelectHome/SelectHome'
import './Home.css'

import React from 'react'

const Home = () => {
  return (
    <section className='home'>
      <article className='article-home'>
        <h1 className='h1-welcome'>Te estabamos esperando</h1>
        <div
          className='arrow-home'
          onClick={() => {
            document
              .getElementById('article-select')
              .scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <img src='/assets/arrow.png' alt='arrow-img' />
          <a href='#article-select'></a>
        </div>
      </article>

      <SelectHome></SelectHome>
    </section>
  )
}

export default Home
