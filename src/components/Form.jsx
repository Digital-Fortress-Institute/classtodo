import React, {useState} from 'react';

const Form = ({addForm }) => {
    const [name, setName] = useState('');
    const [statee, setStatee] = useState('');
    const [workStatus, setworkStatus] = useState('');
    
    
let handleForm = (e) => {
    e.preventDefault()
    
  let addNew = {name, statee, workStatus}
    if(!name || !statee || !workStatus){
        alert('All fields must be filled')
    }else{
        console.log(addNew)
        addForm(addNew)
    }
  
    setName('');
    setworkStatus('');
    setStatee('');
    
} 
  return (
    <div>
        <form action="" onSubmit={handleForm}>
            <div className='mb-2'>
                <label >Name:</label>
                <input type="text" value={name} onChange={(e) =>setName(e.target.value)} />
            </div>

            <div className='mb-2'>
                <label >State:</label>
                <input type="text"  value={statee} onChange={(e) =>setStatee(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label >work status:</label>
                <input type="text" value={workStatus} onChange={(e) =>setworkStatus(e.target.value)} />
            </div>


            {/* <button type='submit'>Submit</button> */}
            <input type="submit" />
        </form>

     
    </div>
  )
}

export default Form