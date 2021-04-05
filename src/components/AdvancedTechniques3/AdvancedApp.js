import React, { useReducer } from 'react';
import Toolbar from './Toolbar';
import ThemeContext from './ThemeContext';

const AdvancedApp = ({
}) => {
    const themeReducer = (state, action) => {
        switch (action.type) {
            case 'TOGGLE_COLOR':
                return {...state, color: state.color == 'dark' ? 'light' : 'dark'};
            case 'CHANGE_FONT':
                return {...state, font: action.payload};
            case 'INCREASE_SIZE':
                return {...state, size: state.size + 2}
            default:
                return state;
        }
    };

    // const [theme, setTheme] = useState({
    //     color: 'dark',
    //     size: 'normal',
    //     font: 'default',
    // });

    const [theme, dispatch] = useReducer(themeReducer, {
        color: 'dark',
        size: 'normal',
        font: 'default',
    });

    return (
        <ThemeContext.Provider value={[theme, dispatch]}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

export default AdvancedApp;