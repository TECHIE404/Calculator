
import React, {Component} from 'react';
import './button.css';
class Button extends Component {
    state = {  }
    render() { 
        return (  
        <div className="App">
                    {this.props.children}
        </div>);
    }
}
 
export default Button;
