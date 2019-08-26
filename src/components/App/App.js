import React from 'react';
import './App.scss';
import ProjectDisplay from '../ProjectDisplay/ProjectDisplay';
import PaletteDisplay from '../../containers/PaletteDisplay/PaletteDisplay';
import PaletteForm from '../../containers/PaletteForm/PaletteForm';


const App = () => {
  return (
    <div className="App">
      <ProjectDisplay />
      <PaletteDisplay />
      <PaletteForm />
    </div>
  );

}

export default App;
