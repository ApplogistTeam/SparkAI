import { Outlet, NavLink, Link } from "react-router-dom";
import github from "../../assets/github.svg";
import styles from "./Layout.module.css";
import { useLogin } from "../../authConfig";
import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    // Gelişmiş ve anlaşılır metinler için başlık ve navigasyon linkleri güncellendi.
    const headerTitle = "Spark AI Enterprise Assistant | by MK";
    const chatNavText = "Interactive Chat";
    const questionNavText = "AI-Powered Q&A";

    return (
        <div className={styles.layout}>
            <header className={styles.header} role="banner">
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>{headerTitle}</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink 
                                  to="/" 
                                  className={({ isActive }) => 
                                    isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink
                                  }>
                                    {chatNavText}
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink 
                                  to="/qa" 
                                  className={({ isActive }) => 
                                    isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink
                                  }>
                                    {questionNavText}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>Azure OpenAI + AI Search</h4>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
