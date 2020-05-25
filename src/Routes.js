import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Test from './components/test';
import Signup from './pages/signup';
import Signin from './pages/signin';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'antd/dist/antd.css';




export default function Routes(){
    return (
        <BrowserRouter>
           <Switch>
               <Route path="/" exact component={Test}/>
               <Route path="/signup" exact component={Signup}/>
               <Route path="/signin" exact component={Signin}/>


           </Switch>
        </BrowserRouter>
    );
}