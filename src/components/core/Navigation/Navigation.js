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
];

export const Navigation = () => (
    <nav>
        <ul>
            {console.log(navigation)}
            {navigation.map(item => {
                const { title, icon: Icon, route } = item;
                return (
                    <li key={item.title}>
                        {/* What is key? */}
                        <Link to={item.route}>
                            <Icon />
                            {title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    </nav>
);
