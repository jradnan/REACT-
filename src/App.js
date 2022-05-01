import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}


function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect( ()=>{
 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>setUsers(data))


  }, [])
  return(
    <div>
      <h2>External Users</h2>
      <p></p>
    {
      users.map(user => <User name={user.name} email={user.email}></User>)
    }
    </div>
  )
}

function User(props){
  return(
    <div style={{border:'2px solid aquamarine', padding:'10px', margin:'20px', backgroundColor:'#2c3e50', color:'#f39c12'}}>
      <h2>Name: {props.name} </h2>
      <p>Email: {props.email}</p>
    </div>
  )
}
export default App;
