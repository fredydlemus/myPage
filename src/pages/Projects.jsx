import React from 'react'
import InConstructionMessage from '../components/InConstructionMessage';
import '../styles/Projects.scss';

const Projects = () =>{
    return(
        <section className="Projects">
            <h2>Projects</h2>
            <InConstructionMessage />
        </section>
    );
}

export default Projects;