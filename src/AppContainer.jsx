import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';
import React from 'react';

 
class AppContainer extends React.Component {
    render() {
        return (
            <ParallaxProvider>
               <App />
            </ParallaxProvider>
        );
    }
}

export default AppContainer;