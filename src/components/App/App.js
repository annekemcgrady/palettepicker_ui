import React from 'react';
import './App.scss';
import PaletteDisplay from '../../containers/PaletteDisplay/PaletteDisplay';
import PaletteForm from '../../containers/PaletteForm/PaletteForm';

const App = () => {
  return (
    <main>
      <h1>Welcome to Palette Picker!</h1>
      <PaletteForm />
    </main>
  )
}

export default App;
