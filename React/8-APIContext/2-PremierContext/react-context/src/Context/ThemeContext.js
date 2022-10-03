import React, {createContext, useState} from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
    
    const [theme, setTheme] = useState('hello Context')

    return (
        <ThemeContext.Provider value={{theme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;