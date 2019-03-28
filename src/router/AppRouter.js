import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from '../components/Header';
import CVPage from '../components/CVPage';
import WorkoutLogPage from '../components/WorkoutLogPage';
import NotFoundPage from '../components/NotFoundPage'
import AboutPage from '../components/AboutPage';

const AppRouter = () => (
<BrowserRouter>
    <Header/>
    <Switch>
        <Route path="/" component = {CVPage} exact={true}></Route>
        <Route path ="/workout-log" component = {WorkoutLogPage}></Route>
        <Route path ="/about" component = {AboutPage}></Route>
        <Route component={NotFoundPage} />

        
    </Switch>
  
</BrowserRouter>

)

export default AppRouter;