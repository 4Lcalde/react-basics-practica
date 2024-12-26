import Button from '../../Components/Button/Button'
import { curiosidadesDigimon } from '../../Data/Curiosidades'
import './Curiosity.css'
import React, { useEffect, useState } from 'react'

const Curiosity = () => {
  const random = () => {
    return Math.floor(Math.random() * curiosidadesDigimon.length)
  }

  const [Curiosities, setCuriosity] = useState(curiosidadesDigimon[random()])
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
    const timer = setTimeout(() => {
      setAnimate(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [Curiosities])

  return (
    Curiosities && (
      <section className='section-curiosity'>
        <h2 className='h2-title'>¿Sabías qué?</h2>
        <div className={`data-container ${animate ? 'animate' : ''}`}>
          <h3 className='h3-title'>{Curiosities.nombre}</h3>
          <p className='text-line'>{Curiosities.datos}</p>
        </div>
        <Button
          text='Muéstrame más'
          class='principal'
          function={() => {
            setCuriosity(curiosidadesDigimon[random()])
          }}
        />
      </section>
    )
  )
}

export default Curiosity
