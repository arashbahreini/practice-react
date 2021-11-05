import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {Navigation} from './components/core/Navigation/Navigation';
import {routes} from "./config/routes";
import {Classes} from "./pages/Classes";
import {Home} from "./pages/Home";
import {Teachers} from "./pages/Teachers";
import {Students} from "./pages/Students";
import {Departments} from "./pages/Departments";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Routes>
                {routes.map(route => {
                    <Route path={route.path} element={route.component}/>
                })}
                {/*<Route path={routes.home} element={<Home/>}/>*/}
                {/*<Route path={routes.classes} element={<Classes/>}/>*/}
                {/*<Route path={routes.teachers} element={<Teachers/>}/>*/}
                {/*<Route path={routes.students} element={<Students/>}/>*/}
                {/*<Route path={routes.departments} element={<Departments/>}/>*/}
            </Routes>
        </div>
    );
}

export default App;

