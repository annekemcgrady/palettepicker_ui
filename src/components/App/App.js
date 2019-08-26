import React from 'react';
import './App.scss';

import PaletteDisplay from '../../containers/PaletteDisplay/PaletteDisplay';
import PaletteForm from '../../containers/PaletteForm/PaletteForm';


const App = () => {
  return (
    <div className="App">
      <PaletteDisplay />
      <PaletteForm />
    </div>
  );

}

export default App;
