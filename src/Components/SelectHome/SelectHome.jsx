import { Navigate, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import './SelectHome.css'

import React, { useState } from 'react'

const SelectHome = () => {
  const navigate = useNavigate()
  const [newPath, SetNewPath] = useState('Digimons')
  return (
    <article id='article-select' className='article-select'>
      <h2 className='h2-title'>¿Sobre qué quieres investigar?</h2>
      <select
        name='select'
        id='selectHome'
        onChange={(e) => {
          SetNewPath(e.target.value)
        }}
      >
        <option value='Digimons'>Digimons</option>
        <option value='Curiosidades'>Curiosidades</option>
        <option value='About'>Sobre nosotros</option>
      </select>
      <Button
        text='Investigar'
        class='principal'
        function={() => {
          navigate(`/${newPath}`)
        }}
      ></Button>
    </article>
  )
}

export default SelectHome
