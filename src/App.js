import React, { Component } from 'react';
import './App.css';
import Button from './Components/Button';
import Calculator from './Components/Calculator';
import Display from './Components/Display';
import Keypad from './Components/Keypad';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    } 

    render() {
        return (
            <>
                <Button/>
                <Calculator/>
                <Display/>
                <Keypad/>
            </>
        );
    }
}

export default App;