import React from 'react'
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import Layout from '../containers/Layout';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Projects from '../pages/Projects';
import '../styles/global.scss';

const App = () => {

    return(
        <HashRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </HashRouter>
    );
}

export default App;