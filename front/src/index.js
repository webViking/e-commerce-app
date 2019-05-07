import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';
import './index.scss'
import {configuredStore} from './redux/storeConfiguration'
import { Provider } from 'react-redux'

const app = (
    <Provider store = {configuredStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

dotenv.config();
ReactDOM.render(app, document.getElementById('root'));
