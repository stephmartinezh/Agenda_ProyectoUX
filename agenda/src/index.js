import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//browser router

import {BrowserRouter} from 'react-router-dom';

import fire from './componentes/fireb';
import {FirebaseAppProvider} from 'reactfire';


ReactDOM.render((
  <FirebaseAppProvider firebaseConfig ={fire}>
    <Suspense fallback={'Conectando la página'}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </FirebaseAppProvider>
  ),document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
