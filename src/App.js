 import React, { Component } from 'react';
import './App.css';
import Persona from './Persona/Persona';

class App extends Component {
 state = {
   personas: [
     {id:'alkidasd', name:'pepe' , nivel:15},
     {id: 'asdasdcfsvs', name:'jumersindo' , nivel:99},
     {id: 'asdsdfsdfa',name:'goku' , nivel:9000},
     {id: 'asdsdsawa',name:'krillin' , nivel:7}
   ],
   otraCosa: 'blablabla',
   ocultarPersonas:false
 }



 borrarPersona = (indice) => {

   const personas  = [...this.state.personas];
   personas.splice(indice,1);
   this.setState({personas : personas})
 }

 incorporarNombre = (evt , id) =>{
   const personaIndice = this.state.personas.findIndex(p =>{
      return p.id === id;
   });
  const persona = {...this.state.personas[personaIndice]};
   persona.name = event.target.value;

   const personas = [...this.state.personas];
   personas[personaIndice]= persona;

  this.setState({personas: personas});
  }

  ocultarPersonas =()=>{
    const visible = this.state.ocultarPersonas;
    this.setState({ocultarPersonas: !visible});
  }

  render() {

    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      cursor: 'pointer',
      padding: '8px'
    };
    let personas = null;

    if(this.state.ocultarPersonas){
      personas=( 
      <div >
        {this.state.personas.map((persona, indice )=>{
          return <Persona click={() =>this.borrarPersona(indice)} nombre={persona.name} nivel={persona.nivel} key={persona.id} changed={(evt) =>this.incorporarNombre(evt ,persona.id)}/>
        })}</div>
      );
    }

   return (
      <div className="App">
      <h1> Primera aplicacion con React</h1>
      <p>informacion importante</p>   
      <button style={style} onClick={this.ocultarPersonas}>Switch name</button>
      {personas}
       </div>
       
    );
    
    //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'testting'));
  }
}

export default App;
