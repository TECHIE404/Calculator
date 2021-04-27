
import React, {Component} from 'react';
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
