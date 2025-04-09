import { useState, ReactNode, createContext } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme,
    toggleTheme: () => void
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeContextProviderProps = {
    children: ReactNode;
};

export const ThemeContextProvider = ({ children } : ThemeContextProviderProps) => {

    const [theme, setTheme] = useState<Theme>('dark');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark' ))

    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
