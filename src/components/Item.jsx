import React from 'react'

const Item = ({tunde}) => {
  return (
    <div>
            
    <h1>{tunde.name}</h1>
    <h4>{tunde.state}</h4>
    <p>{tunde.workStatus}</p>
</div>
  )
}

export default Item