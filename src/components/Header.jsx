import React from 'react'
import Button from './Button'

const Header = ({title, onClick, mytoogle}) => {
  return (
   <div className='flex justify-between px-[30px]'>
     <h1 className='text-2xl font-bold'>{title}</h1>
        <Button text={mytoogle ? 'Close': 'Add'} onClick={onClick} />
   </div>
    
  )
}

export default Header