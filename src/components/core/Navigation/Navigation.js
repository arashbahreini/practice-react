import { routes } from '../../../config/routes';
import { Link } from "react-router-dom";
import styles from './Navigation.module.css'

export const Navigation = () => (
    <nav>
        <nav className={styles.navContainer}>
            <ul className={styles.ulItem}>
                {routes.map(item => {
                    return (
                        <li key={item.name} className={styles.liItem}>
                            {/* What is key? */}
                            <Link to={item.path} underline="none">
                                {/*Todo: add icon here*/}
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    </nav>
);
