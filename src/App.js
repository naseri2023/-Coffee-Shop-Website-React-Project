import './App.css';
import {useRoutes} from "react-router-dom";
import routes from "./routes";
import {useEffect, useState} from "react";
import AppContext from './AppContext';
import MainNavbar from "./Components/MainNavbar/MainNavbar";

function App() {

    let router = useRoutes(routes)

    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    const contextValue = {theme, setTheme };

    return (
        <AppContext.Provider value={contextValue}>
            <MainNavbar />
            {router}
        </AppContext.Provider>
    );
}

export default App;
