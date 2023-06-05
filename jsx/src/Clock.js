import React from 'react';
import './styles.css';



const name = "Programmer";
function currDate() {
    return (new Date()).toLocaleDateString();     
}

class Clock extends React.Component {
    state = { time: new Date().toLocaleTimeString() };

    componentDidMount() {
        setInterval(() => {
           
            this.setState({ time: new Date().toLocaleTimeString() })
        }, 1000)
    }
     
    
    render() {
    
        return (
            <div className="time">
                 <h1>Hello I'am { name}</h1>
                <h3>Current date : { currDate()} </h3>
                <h3>The time is :  {this.state.time}</h3>
                
            </div>
     );
    }

}


export default Clock;

