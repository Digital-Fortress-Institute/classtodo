import React, {useState, useEffect} from 'react';
import Item from './Item';

const Task = () => {
    const [count, tunde] = useState(0);
    function myplus(){
        tunde(count + 1)
    }
    function myminus(){
        tunde(count - 1)
    }
    useEffect(() =>{
        tunde(100);
    },[])
let  task = [
    {   
        id: 1,
        name:'Kola',
        state: 'Lagos',
        workStatus: 'Software Tester',
        
    },
    {
        id:2,
        name:'Dupe',
        state: 'Ogun',
        workStatus: 'DevOps Engineer',
        
    },
    {
        id:3,
        name:'Prince',
        state: 'Osun',
        workStatus: 'Data Science',
        
    },
    {
        id:4,
        name:'Joy',
        state: 'Imo',
        workStatus: 'Data Analyst',
        
    },
    {
        id:5,
        name:'Emeka',
        state: 'Delta',
        workStatus: 'Python Developer',
        
    },
    {
        id:6,
        name:'2222',
        state: '4444',
        workStatus: 'Python ',
        
    },

    ]
  return (
    <>
    {/* <div>{name}</div> */}

    {task.map((x, num) => (
      
            <Item key={x.id} tunde={x} />


    ))}

    {/* <button onClick={() => tunde(count + 1)}>+</button>
    <span>{count}</span>
    <button onClick={() => tunde(count - 1)}>-</button> */}
    
    <button onClick={myplus}>+</button>
    <span>{count}</span>
    <button onClick={myminus}>-</button>


    </>
   
  )
}

export default Task