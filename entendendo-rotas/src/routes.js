import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { isAuthenticated } from './auth';

const PrivateRouteee = ({ componet: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
    )} />
);

//BrowserRouter serve pra entender a url do browser
// Switch faz com que só uma rota possa ser chamada por vez
// exact - força com que essa rota só seja chamada caso seja exatamente igual ao path 
// path - caminho da rota
// component  - o conteudo em si, acredito que de pra colocar o arquivo que dei import
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Hello World, here is brasil</h1>} />
            <PrivateRouteee path="/app" componet={() => <h1>Você está autenticado</h1>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;