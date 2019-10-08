import React from 'react';

class Keypad extends React.Component {

    enterPw = () => console.log('Entering password...')

    render() {
        return(
            <input type="password"
            onKeyUp={this.enterPw}/>
        )
    }
}
export default Keypad;