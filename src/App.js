import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Navigation } from './components/core/Navigation/Navigation';
import { routes } from "./config/routes";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                {routes.map((route) => {
                    console.log('route', route);
                    return <Route path={route.path} element={route.component} key={route.name} />
                })}
            </Routes>
        </div>
    );
}

export default App;

