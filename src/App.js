import React, { Component, useState, useEffect } from 'react' 
import './App.css';

const Pokecard = ({pokeClass, handleOnClick}) => {
  return <button onClick={() => 
  handleOnClick(pokeClass+1)} 
  className="Pokecard">
  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeClass + 1}.png`} alt={pokeClass}></img>
  </button>
}

const Lista =({handleOnClick}) =>{
  const cells = pokeClasses.map(pokeClass => {
    return (
      <Pokecard
        key={pokeClass.id} 
        pokeClass={pokeClass} 
        handleOnClick={handleOnClick}
      />
    );
  });

  return (
    <section className="poke-list">
      {Pokecard }
    </section>
  )
}


class App extends Component { 
  
  constructor() {
    super()
    this.state={}
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    console.log(id);
  }

  
  render() {
    return(
      <div className="App">

      </div>
    );
  }
}

export default App;
