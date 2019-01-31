import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Contenedor from '../components/contenedor.js';
import General from '../components/cm/paramgeneral.js';
import Permanencia from '../components/cm/parampermanencia.js';
import Presencia from '../components/cm/parampresencia.js';
import Indisponibilidad from '../components/cm/regindisponibilidad.js';

const AppRoutes = () => 
    <Contenedor>
        <Switch>
            <Route exact path="/general" component={General}/>
            <Route exact path="/permanencia" component={Permanencia}/>
            <Route exact path="/presencia" component={Presencia}/>
            <Route exact path="/indisponibilidad" component={Indisponibilidad}/>
        </Switch>
    </Contenedor>;

export default AppRoutes;