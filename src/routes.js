import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Home from './components/Home/index';
import Header from './components/header';
import Footer from './components/footer'

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
)

export default Routes;