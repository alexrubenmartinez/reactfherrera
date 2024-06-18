import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
  console.log({ id, title, url })
  return (
    <div className='card animate__flip animate__animated animate__delay-2s'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
