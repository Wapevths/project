import cls from './Navbar.module.scss';
import {classNames} from "../../../hooks/classNames/classNames";
import {AppLink} from "../../AppLink/AppLink";
import logo from '../../../assets/logo.svg'
import live from '../../../assets/live.svg'
import search from '../../../assets/search.svg'
import {useLocation} from "react-router-dom";
interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }:NavbarProps) => {
    const location = useLocation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to="/"
                    className={cls.link}
                >
                    <img src={logo} alt="logo"/>
                </AppLink>

                <div className={cls.container_right_link}>
                    {location.pathname !== '/' && (
                        <AppLink
                            to="/"
                            className={cls.link}
                        >
                            <img src={search} alt='search'/>
                            <span className={cls.linkText}>
                                Поиск
                            </span>
                        </AppLink>
                    )}

                    <AppLink
                        to="/favorite"
                        className={cls.link}
                    >
                        <img src={live} alt='favorite'/>
                        <span className={cls.linkText}>
                        Избранное
                    </span>
                    </AppLink>
                </div>

            </div>

        </div>
    )
};
