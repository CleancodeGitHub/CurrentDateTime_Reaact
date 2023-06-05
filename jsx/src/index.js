// Import the React and ReactDOm libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./Clock";



const App = () => {
    
    return (
        <div>
            <Clock />
        </div>
        );
}

 // Tale the react component and show it on the screen
 ReactDOM.render(
    <App />,
    document.querySelector('#root')
 );
