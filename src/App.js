import './App.css';
import {Routes, Route, Link} from "react-router-dom";

function App() {
    const something = 'aaaa';
    return (
        <div className="App">
            <div className="link-container">
                <Link className="link-item" to="/">Home</Link>
                <Link className="link-item" to="/classes">Classes</Link>
                <Link className="link-item" to="/teachers">Teachers</Link>
                <Link className="link-item" to="/students">Students</Link>
                <Link className="link-item" to="/departments">Departments</Link>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/classes" element={<Classes/>}/>
                <Route path="/teachers" element={<Teachers/>}/>
                <Route path="/students" element={<Students/>}/>
                <Route path="/departments" element={<Departments/>}/>
            </Routes>
        </div>
    );
}

function Home() {
    return (
        <>
            <h1>Home works!</h1>
        </>
    );
}

function Classes() {
    return (
        <>
            <h1>Classes works!</h1>
        </>
    );
}

function Teachers() {
    return (
        <>
            <h1>Teachers works!</h1>
        </>
    );
}

function Students() {
    return (
        <>
            <h1>Students works!</h1>
        </>
    );
}

function Departments() {
    return (
        <>
            <h1>Departments works!</h1>
        </>
    );
}

export default App;

