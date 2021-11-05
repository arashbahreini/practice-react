import { routes } from '../../../config/routes';
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
    {
        title: 'Teachers',
        route: routes.teachers
    },
    {
        title: 'Students',
        route: routes.students
    },
    {
        title: 'Departments',
        route: routes.departments
    },
];

export const Navigation = () => (
    <nav>
        <ul>
            {console.log(navigation)}
            {navigation.map(item => {
                const { title, route } = item;
                return (
                    <li key={item.title}>
                        {/* What is key? */}
                        <Link to={item.route}>
                            {/*Todo: add icon here*/}
                            {title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    </nav>
);
