import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DigimonByName.css'
const DigimonByName = () => {
  const { name } = useParams()

  const [digimon, setDigimon] = useState(null)

  useEffect(() => {
    const FetchCall = async () => {
      const response = await fetch(
        'https://digimon-api.vercel.app/api/digimon/name/' + name
      )

      if (!response.ok) {
        console.log(error)
        return
      }

      const res = await response.json()
      setDigimon(res)
      console.log(digimon)
    }
    FetchCall()
  }, [])
  return (
    digimon && (
      <section className='section-digimon'>
        <div className='big-card'>
          <img src={digimon[0].img}></img>
          <h3 className='h3-title'>{digimon[0].name}</h3>
          <p className='text-line'>
            <span> Level: </span>
            {digimon[0].level}
          </p>
        </div>
      </section>
    )
  )
}

export default DigimonByName
