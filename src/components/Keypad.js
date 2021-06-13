// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
    //render an input with the right type 
    //on the input, add an event handler that listens for the keyUp event 
    //when the event fires, use console.log to print out "entering password..."
    handleInputPassword = () => console.log('Entering password...')

    render() {
        return (
            <div>
                <input 
                    type="password"
                    onKeyUp={this.handleInputPassword}
                    />
            </div>
        )
    }
}

export default Keypad


