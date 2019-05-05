import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import App from './containers/App';



dotenv.config();
ReactDOM.render(<App />, document.getElementById('root'));
