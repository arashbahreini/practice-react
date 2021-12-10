import './App.css';
import { Routes, Route } from "react-router-dom";
import { Navigation } from './components/core/Navigation/Navigation';
import { routes } from "./config/routes";
import './styles/reset.css';

function App() {
    return (
        <div className="App">
            <Navigation />
            <div className="Body">
                <Routes>
                    {routes.map((route) => {
                        console.log('route', route);
                        return <Route path={route.path} element={route.component} key={route.name} />
                    })}
                </Routes>
            </div>
        </div>
    );
}

export default App;

