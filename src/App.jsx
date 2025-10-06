import { use, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [data, setData] = useState({});

  useEffect(() => {

    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  },[])

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon")
  //     .then((response) => response.json())
  //     .then(json => setData(json))
  //     .catch(err => console.log(err));
  // },[])

   return (
     <div className = 'container'>
      
       <h1>Llamado de API publica</h1>

       <ul id="containerBox">
           {
             data.results.map((item) => (
               <li className ="cardContainer">
                 {item.name}
               </li>
             ))
           }
       </ul> 


     </div>
  )
}

export default App

