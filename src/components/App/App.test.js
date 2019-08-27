import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
