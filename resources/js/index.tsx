import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import Routing from './routing';
// import AuthHandle from './components/authHandle.js';

ReactDOM.render(
  <React.StrictMode>
    {/* <AuthHandle> */}
      <Routing />
    {/* </AuthHandle> */}
  </React.StrictMode>,
  document.getElementById('app')
);