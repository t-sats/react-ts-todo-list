import { useTheme } from '../../hooks/useTheme';
import { AppTheme } from '../../styles/themes';

import './ToggleTheme.css';

const ToggleTheme = () => {
    const { theme, toggleTheme } = useTheme();

    const ThemeStyle: AppTheme = {
        dark: {
            backgroundColor: '#333333',
            border: 'none',
            borderRadius: '5px',
            color: '#cccccc',
            margin: '2rem',
            padding: '2rem'
        },
        light: {
            backgroundColor: '#cccccc',
            border: 'none',
            borderRadius: '5px',
            color: '#333333',
            margin: '2rem',
            padding: '2rem'
        }
    };

    const themeStyle = {
        ...(theme === 'light' ? ThemeStyle.light : ThemeStyle.dark)
    };


    return (
        <div className='toggle-theme-container'>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyle}>Theme styles</div>
        </div>
    );
};

export default ToggleTheme;
