import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

import Xtorage from  './Components/Xtorage'

Xtorage.local.set('userId','5a09b909de937d39a73c39dc')





ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));

