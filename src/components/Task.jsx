import React, {useState, useEffect} from 'react';
import Item from './Item';

const Task = ({task, y}) => {
    
    // function myplus(){
    //     tunde(count + 1)
    // }
    // function myminus(){
    //     tunde(count - 1)
    // }
    // useEffect(() =>{
    //     tunde(100);
    // },[])

  return (
    <>
    {/* <div>{name}</div> */}

    {task.map((x, num) => (
      
            <Item key={x.id} tunde={x} b={y}/>


    ))}

    {/* <button onClick={() => tunde(count + 1)}>+</button>
    <span>{count}</span>
    <button onClick={() => tunde(count - 1)}>-</button> */}
    
    {/* <button >+</button>
    <span>{count}</span>
    <button onClick={myminus}>-</button> */}


    </>
   
  )
}

export default Task