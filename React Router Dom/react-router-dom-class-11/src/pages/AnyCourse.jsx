import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourse = () => {

    const parem =useParams()
    console.log(parem)

  return (
    <h1>{parem.id} Course Page is rendar</h1>
  )
}

export default AnyCourse
