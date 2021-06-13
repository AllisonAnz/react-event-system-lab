// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
    //render a button 
    //add event handlers that listen for the focus and blur event 
    //when focus event fires, console.log "Good!"
    //when blue event fires, console.log "Hey! Eyes on me!"
    onFocus = () => console.log('Good!')

    onBlur = () => console.log('Hey! Eyes on me!')

    render() {
        return (
            <button onFocus={this.onFocus} onBlur={this.onBlur}></button>
        )
    }
}

export default EyesOnMe



