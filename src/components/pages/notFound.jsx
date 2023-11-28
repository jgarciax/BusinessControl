import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      Pagina No encontrada 
      <button>
        <Link to="/">Regresar</Link>
      </button>
    </div>
  )
}

export default NotFound
