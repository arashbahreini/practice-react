import {Home} from "../pages/Home";
import {Classes} from "../pages/Classes";
import {Teachers} from "../pages/Teachers";
import {Students} from "../pages/Students";
import {Departments} from "src/pages/Departments";

export const routes = [
    {
        name: 'home',
        path: '/',
        component: <Home/>
    },
    {
        name: 'classes',
        path: '/classes',
        component: <Classes/>
    },
    {
        name: 'teachers',
        path: '/teachers',
        component: <Teachers/>
    },
    {
        name: 'students',
        path: '/students',
        component: <Students/>
    },
    {
        name: 'departments',
        path: '/departments',
        component: <Departments/>
    }
]
