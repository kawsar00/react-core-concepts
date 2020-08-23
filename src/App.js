import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const myFriends = [
  {name:'naim', age:'22', depertment: 'Mechanical Engeneer'},
  {name:'sojib', age:'23', depertment: 'English'},
  {name:'shahin', age:'22', depertment: 'CSE'},
  {name:'jakir', age:22, depertment: 'MATS'},
  {name:'nasir', age:22, depertment: 'Fisheries'},
]
  
  return (
    <div className="App">
      <header className="App-header">
          {/* dynamic component */}
    {
      myFriends.map(friend => <Friend friendName={friend}></Friend>)
    }
     
    <Counter></Counter>  {/* to declare state */}

    {/* DYNAMIC API DATA LOAD  */}
       <Users></Users>

      </header>
    </div>
  );
  function Counter(){
    const [count, setCount] = useState(20);
    // const handleIncrease = () => setCount(count + 1);
    return(
      <div>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    )
  }

  function Friend(props){
    const friendStyle = {
      border:'1px solid gray',
      backgroundColor:'#2b2424',
      padding:'10px',
      float:'left',
      height:'320px',
      width:'320px',
      borderRadius:'5px'
    }
    return(
      <div style={friendStyle}>
        <h3>{props.friendName.name}</h3>
        <h1>{props.friendName.age}</h1>
        <p>{props.friendName.depertment}</p>
        <button>DETAILS</button>
      </div>
    )
  }

  function Users() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    })
    return(
      <div>
        <h3>Dynamic data:{users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
          
        </ul>
      </div>
    )
  }


  // function Person(props){
  //   return(
  //     <div style={{border: '2px solid gold', width:'400px'}}>
  //       <h3>My name: {props.name}</h3>
  //   <p>My profession: {props.job}</p>
  //     </div>
  //   ) 
  // }
}

export default App;
