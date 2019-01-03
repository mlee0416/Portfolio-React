import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Stock from './stock';
import Nfl from './nfl';
import Movie from './movie';

import {Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path = "/" component = {LandingPage} />
        <Route exact path = "/aboutme" component = {AboutMe} />
        <Route exact path = "/contact" component = {Contact} />
        <Route exact path = "/projects" component = {Projects} />
        <Route exact path = "/resume" component = {Resume} />
        <Route exact path = "/stock" component = {Stock} />
        <Route exact path = "/nfl" component = {Nfl} />
        <Route exact path = "/movie" component = {Movie} />
    </Switch>
)

export default Main;