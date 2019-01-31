import React, { Component } from 'react';
import PropType from 'prop-types';
import '../../css/menu.css';


class Contenido extends Component {

    static propType = {
        body: PropType.object.isRequired
    };

    render(){
        const {body} = this.props;
        return(
            <div className="Content">
                {body}
            </div>
        );
    }

}
export default Contenido;