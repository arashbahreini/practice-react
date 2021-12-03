import { routes } from '../../../config/routes';
import { Link } from "react-router-dom";
import styles from './Navigation.module.css'

export const Navigation = () => (
    <nav>
        <div className={styles.navContainer}>
            {routes.map(item => {
                return (
                    <span key={item.name}>
                        {/* What is key? */}
                        <Link to={item.path} underline="none">
                            {/*Todo: add icon here*/}
                            {item.name}
                        </Link>
                    </span>
                );
            })}
        </div>
    </nav>
);
