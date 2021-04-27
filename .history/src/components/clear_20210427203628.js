import React, { Component } from 'react';
import "./clear.css";
class ClearButton extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="clear-btn">
                {this.props.children}
            </div>
         );
    }
}
 
export default ClearButton;