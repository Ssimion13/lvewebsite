import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './frontpage.css';
import './barsandbuttons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
