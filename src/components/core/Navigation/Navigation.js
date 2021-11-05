import { routes } from '../../../gonfig/routes';
import { Link } from "react-router-dom";

const navigation = [
    {
        title: 'Home',
        route: routes.home
    },
    {
        title: 'Classes',
        route: routes.classes
    },
];

export const Navigation = () => (
    <h1>Hello</h1>
    // <nav>
    //     <ul>
    //         {navigation.forEach(item => {
    //             const { title, icon: Icon, route } = item;
    //             return (
    //                 <li key={item.title}>
    //                     {/* What is key? */}
    //                     <Link to={item.route}>
    //                         <Icon />
    //                         {title}
    //                     </Link>
    //                 </li>
    //             );
    //         })}
    //     </ul>
    // </nav>
);