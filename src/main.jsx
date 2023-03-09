import React from 'react';  //API de React
import ReactDOM from 'react-dom/client';  //esta es version web de React, y tambien esta Native que es para mobile
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

/* ReactDOM.render(
  <App />,
  document.getElementById('root')
) */