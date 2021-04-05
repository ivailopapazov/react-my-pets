import React, { useContext } from 'react';
import Button from './Button';
import ButtonHeader from './ButtonHeader';

import ThemeContext from './ThemeContext';

const ThemedButton = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    const onChangeThemeClickHandler = () => {
        setTheme(oldState => oldState == 'dark' ? 'light' : 'dark');
    }

    return (
        <>
            <ButtonHeader />
            <Button buttonClickHandler={onChangeThemeClickHandler} />
        </>
    );
}

export default ThemedButton;