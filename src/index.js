import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import netlifyIdentity from 'netlify-identity-widget';

window.netlifyIdentity = netlifyIdentity;
// You must run this once before trying to interact with the widget
netlifyIdentity.init();
ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
