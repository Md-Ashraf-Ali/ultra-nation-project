import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country'
import Card from './components/Country/Card/Card';

function App() {
  const [countries, setcountrries] = useState([])
  const [card, setcard]=useState([])

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setcountrries(data))
  },[])

  const handleAddCountry = (country) => {
      const newCard = [...card, country];
      setcard(newCard);
  }
    
  return (
    <div className="App">
      <h1> countrise load : {countries.length} </h1>
      <h2>Country Add: {card.length}</h2>
      <Card card = {card}></Card>
      
        {
          countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
        }
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
