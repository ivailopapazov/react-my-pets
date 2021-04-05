import React, { useContext } from 'react';
import Button from './Button';
import ButtonHeader from './ButtonHeader';

import ThemeContext from './ThemeContext';

const ThemedButton = () => {
    const [theme, dispatch] = useContext(ThemeContext);

    const onChangeThemeClickHandler = () => {
        dispatch({type: 'TOGGLE_COLOR'});
    }

    return (
        <>
            <ButtonHeader />
            <Button buttonClickHandler={onChangeThemeClickHandler} />
        </>
    );
}

export default ThemedButton;