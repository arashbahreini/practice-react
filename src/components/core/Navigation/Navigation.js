import { routes } from '../../../config/routes';
import { Link } from "react-router-dom";


export const Navigation = () => (
    <nav>
        <ul>
            {routes.map(item => {
                return (
                    <li key={item.name}>
                        {/* What is key? */}
                        <Link to={item.path}>
                            {/*Todo: add icon here*/}
                            {item.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    </nav>
);
