import { Link } from 'react-router-dom'
import './Digimons.css'
import React, { useEffect, useState } from 'react'

const Digimons = () => {
  const [digimons, setDigimons] = useState([])
  const [allDigimons, setAllDigimons] = useState([])

  useEffect(() => {
    const FetchCall = async () => {
      const response = await fetch('https://digimon-api.vercel.app/api/digimon')

      if (!response.ok) {
        console.log(error)
        return
      }

      const res = await response.json()

      setDigimons(res)
      setAllDigimons(res)
    }
    FetchCall()
  }, [])

  const InputChanges = (e) => {
    const value = e.target.value.toLowerCase()
    if (value === '') {
      setDigimons(allDigimons)
    } else {
      setDigimons(
        allDigimons.filter((digimon) =>
          digimon.name.toLowerCase().includes(value)
        )
      )
    }
  }
  return (
    <section className='digimon-section '>
      <h2 className='h2-title'>¿Cuál es tu Digimón favorito?</h2>
      <div className='div-Search'>
        <label htmlFor='search-Digimon' className='text-line'>
          Busca un digimón
        </label>
        <input
          type='text'
          className='input-text-regular'
          id='search-Digimon'
          onChange={InputChanges}
        />
      </div>
      <div className='digimons'>
        {digimons.map((digimon) => (
          <Link to={`/digimons/${digimon.name}`} key={digimon.name}>
            <div className='card'>
              <img src={digimon.img}></img>
              <h3 className='h3-title'>{digimon.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Digimons
