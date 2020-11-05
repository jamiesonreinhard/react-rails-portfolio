import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('/api/v1/projects')
    .then( resp => setProjects(resp.data) )
    .catch( resp => console.log(resp) )
  }, [projects.length])
  

  const list = projects.map(project => {
    return(
      <li key={project.id}>{project.name}</li>
    );
  })
  
  return(
    <div>
      <h1>projects</h1>
      <ul>{list}</ul>
    </div>
  );
}

export default Projects;

