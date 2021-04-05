import ThemeContext from './ThemeContext';

function Button({
    buttonClickHandler,
}) {
    return (
        <ThemeContext.Consumer>
            {values => 
                <button
                    onClick={buttonClickHandler}
                    style={{ backgroundColor: values.theme == 'dark' ? 'darkgray' : 'lightgreen' }}
                >

                    {values.theme}
                </button>
            }
        </ThemeContext.Consumer>
    );
}

export default Button;