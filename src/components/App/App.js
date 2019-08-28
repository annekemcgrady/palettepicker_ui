import React from 'react';
import './App.scss';
import ProjectDisplay from '../ProjectDisplay/ProjectDisplay';
import PaletteDisplay from '../../containers/PaletteDisplay/PaletteDisplay';


const App = () => {
  return (
    <div className="App">
      <ProjectDisplay />
      <PaletteDisplay />
    </div>
  );

}

export default App;
