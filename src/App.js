import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Task from './components/Task';




function App() {
  const [toogle, setToogle] = useState(false);
  const [task, setTask]= useState([

  
      {   
          id: 1,
          name:'Kola',
          statee: 'Lagos',
          workStatus: 'Software Tester',
          
      },
      {
          id:2,
          name:'Dupe',
          statee: 'Ogun',
          workStatus: 'DevOps Engineer',
          
      },
      {
          id:3,
          name:'Prince',
          statee: 'Osun',
          workStatus: 'Data Science',
          
      },
      {
          id:4,
          name:'Joy',
          statee: 'Imo',
          workStatus: 'Data Analyst',
          
      },
      {
          id:5,
          name:'Emeka',
          statee: 'Delta',
          workStatus: 'Python Developer',
          
      },
      {
          id:6,
          name:'2222',
          statee: '4444',
          workStatus: 'Python ',
          
      },
  

  ])
  // const id = Math.floor(Math.random() * 1000) + 1
  // console.log(id)
  let addForm = (x) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const item = {id, ...x}
    setTask([item, ...task])
  }


  let myDelete = (id) => {
    setTask(task.filter((x) => x.id !== id))
  }
 
  return (
    <>
      <Header title='Task Tracker' onClick={() => setToogle(!toogle)}  mytoogle={toogle}  />
      {toogle && <Form addForm={addForm } />}
      <Task task={task} y={myDelete}/>
     
    </>
  );
};

export default App;
