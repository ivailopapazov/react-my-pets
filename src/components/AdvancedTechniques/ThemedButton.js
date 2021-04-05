import React from 'react';
import Button from './Button';
import ButtonHeader from './ButtonHeader';

import ThemeContext from './ThemeContext';

class ThemedButton extends React.Component {
    
    componentDidMount() {
        console.log(this.context.theme);
    }

    render() {
        return (
            <>
                <ButtonHeader />
                <Button buttonClickHandler={this.context.onChangeThemeClickHandler} />
            </>
        );
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;