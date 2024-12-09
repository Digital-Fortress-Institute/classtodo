import React from 'react'

const Item = ({tunde, b}) => {
  return (
    <div>
            
    <h1>{tunde.name} <span className='text-red-800 ml-9' onClick={() => b(tunde.id)  }>X</span></h1>
    <h4>{tunde.state}</h4>
    <p>{tunde.workStatus}</p>
    <hr />
</div>
  )
}

export default Item