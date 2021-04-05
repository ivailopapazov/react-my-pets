import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ButtonHeader = ({

}) => {
    const [theme] = useContext(ThemeContext);

    return (
        <header style={{ color: theme == 'dark' ? 'darkgray' : 'lightpink' }}>
            <h1>Some Cool Title Here</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi neque asperiores officia placeat odit? Adipisci delectus perspiciatis nesciunt odio quas.</p>
        </header>
    );
}

export default ButtonHeader;