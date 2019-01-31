import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';
import '../css/content.css';
import PropTypes from 'prop-types';

//import logobvc from '../img/bvc.png';
import Header from '../components/global/header.js';
import Contenido from '../components/global/body';
import Foot from '../components/global/foot';

import items from '../components/global/menu.js';

class contenedor extends Component {

    static propTypes ={
      children: PropTypes.object.isRequired
    }

    render() {

        const {children} = this.props;
        return (
          <div>
            <Header title="CREADORES DE MERCADO" items={items}/>
            <Contenido body={children}/>
            <Foot/>
          </div>
          );
        }

}
export default contenedor;

