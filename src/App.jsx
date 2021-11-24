import React from 'react';
import Layout from './containers/Layout';
import Home from './pages/Home';
import '../src/styles/global.scss';
import Projects from './pages/Projects';

const App = () => {
    return (
        <div>
            <Layout>
                <Home/>
                
            </Layout>
        </div>
    )
}

export default App;