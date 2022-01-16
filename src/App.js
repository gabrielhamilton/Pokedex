import React, { Component, useState, useEffect } from 'react' 
import './App.css';
import Pesquisar from './pages/pesquisar';

/*const Pokecard = ({pokeClass, handleOnClick}) => {
  return <button onClick={() => 
  handleOnClick(pokeClass+1)} 
  className="card">
  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeClass + 1}.png`} alt={pokeClass}></img>
  </button>
}*/

/*const Lista =({handleOnClick}) =>{
  const [escolha, poke] = useState([])
    useEffect(() =>{
      const fetchData = async() =>{
      const response = await fetch('https://pokeapi.co/api/v2/ability/?limit=5')
      const data = await response.json()
      const listapoke = data.results.slice(0, data.results.length).map(item => item).flat()
      poke(listapoke)
    }
    fetchData()
    },[])

    return(
      <section className="listapoke">
        {
        escolha.map((pokeClass, id)=>{
          return(
            <Pokecard
            key={id} 
            pokeClass={id} 
            handleOnClick={handleOnClick} 
            />
          )
        })}
      </section>
    )
}*/


class App extends Component { 
  
  constructor() {
    super()
    this.state={}
  }
  
  render() {
    return(
      <div className="App">
          <Pesquisar/>
      </div>
    );
  }
}

export default App;
