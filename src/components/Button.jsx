import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <div>
        <button onClick={onClick} className='bg-black p-[4px] text-white  '>{text}</button>
    </div>
  )
}

export default Button