// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

    inputHandler = () => {
        console.log('Entering password...');
    };

    render() {
        return <input type='password' onKeyUp={this.inputHandler}></input>
    };
};

export default Keypad;