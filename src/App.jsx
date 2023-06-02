import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";


function App() {

  // Nos pide el enunciado que creemos una variable de estado para guardar todos los contactos. Copiamos el array de objetos con el operador de spread
  const [allContacts, setAllContants] = useState([...contacts]);
  const [orderBy, setOrderBy] = useState('');

  if (orderBy === 'popularity') {
    allContacts.sort((a, b) => b.popularity - a.popularity);
  } else if (orderBy === 'name') {
    allContacts.sort((a, b) => a.name.localeCompare(b.name));
  }

  const handleClick = (event) => {
    setOrderBy(event.target.id); 
    
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="btn-container">
        <button>Add Random Contact</button>
        <button id="popularity" onClick={handleClick}>Sort by popularity</button>
        <button id="name" onClick={handleClick}>Sort by name</button>
      </div>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </thead>
        <tbody>
          {allContacts.map(c => (<tr>
            <td><img style={{ width: 100 }} src={c.pictureUrl} alt={c.name}></img></td>
            <td>{c.name}</td>
            <td>{c.popularity.toFixed(2)}</td>
            <td> {c.wonOscar ? '🏆' : ''} </td>
            <td> {c.wonEmmy ? '🏆' : ''} </td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
