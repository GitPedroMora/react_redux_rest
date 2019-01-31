import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../../css/App.css';
import {Link} from 'react-router-dom';

//import logobvc from '../img/bvc.png';

class header extends Component {

      static  propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
      };

      render() {

        const { title, items } = this.props;

        return (
          <div className="App-header">
            <h2>{title}</h2>
            <br/>
            <ul className="Menu">
             {
               items && items.map(
                (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link> <a>&nbsp;&nbsp;|</a> </li>
                )
              }
              
            </ul>
          </div>
          );
        }

}
export default header;

