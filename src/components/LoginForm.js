import React, { Component } from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import logo from '../img/logo.svg';
import bannerFoot from '../img/bannerFoot.svg';
//import Contenedor from '../components/contenedor.js';

import AppRutas from './rutas.js';

class LoginForm extends Component {
  
  constructor(args){
    super(args);
    this.state={
      usuario: "",
      clave: ""
     }
    }
    updateUsuario(event){
      this.setState({
        usuario: event.target.value 
      }); 
    }
    validar(event){
           
      render(
        <Router>
          <AppRutas/>
        </Router>, 
          document.getElementById('root'))
        /*let usuario= this.state.usuario;
        let clave= this.state.clave;
        let estado= 0
        if(usuario!=""){
          estado= 1
        }
        else{
          alert("El campo usuario esta vacio")
        }
        if(clave!=""){
           estado=2
        }
        else{
          alert("El campo clave esta vacio")
        }
        this.setState({
          usuario: "",
          clave:""
        });
        if(estado==2){
          return(
            ReactDOM.render(<contenedor />, document.getElementById('root'))
          )
         
        }*/
                 
    }
    updateClave(event){
      this.setState({
        clave: event.target.value
      });
    }
    
    render() {
      let fecha= new Date();
      let meses = new Array 
      ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
      "Agosto","Septiembre","Octubre","Noviembre","Diciembre");
      let dia = fecha.getDate();
      let mes = meses[fecha.getMonth()];
      let anno = fecha.getFullYear();
      return (
        <div className="App">
            <br/><br/>
            <img src= {logo} />
             <h3>Inicio de Sesion</h3><br/>
             <label>Usuario:</label><br></br>
             <input type="text" name="usuario" id="username"  value = {this.state.usuario} onChange={this.updateUsuario.bind(this)}/><br/>     
             <br/><label>Clave:</label><br/>
             <input type="password"  name="clave" id="pwsd" value = {this.state.clave} onChange={this.updateClave.bind(this)}/><br/>
             <br/><button onClick={this.validar.bind(this)}>Ingresar</button>
             <br/>
            <br/>{dia}/{mes}/{anno}
            <p>
              <img src= {bannerFoot} />
            </p>
        </div>
        
        );
      }
  }
  
  export default LoginForm;