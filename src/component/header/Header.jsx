import logo from "../../assets/logo (1).png";
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react'
import css from "./Header.module.css";
import flagRU from "../../assets/flag.png";
import vector from "../../assets/Vector (3).png";

const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Активный пункт меню
    const [lineStyle, setLineStyle] = useState({});   // Стиль для линии
    const menuRefs = useRef([]);                      // Ссылки на элементы меню
    const [language, setLanguage] = useState("РУС");
    const [flag, setFlag] = useState(flagRU);
    const [isOpen, setIsOpen] = useState(false);
    const [Open, setOpen] = useState(false)


    const location = useLocation(); // Получение текущего пути

    const languages = [
        { code: "РУС", flag: flagRU },
        { code: "ENG", flag: flagRU },
    ];

    const menuItems = [
        { path: "/" },
        { name: "Услуги", path: "/services" },
        { name: "Прайс", path: "/price" },
        { name: "Отзывы", path: "/reviews" },
        { name: "О нас", path: "/about-us" },
        { name: "Контакты", path: "/contacts" },
    ];

    useEffect(() => {
        const currentIndex = menuItems.findIndex((item) => item.path === location.pathname);
        setActiveIndex(currentIndex);
    }, [location.pathname]);

    useEffect(() => {
        const updateLineStyle = () => {
            if (menuRefs.current[activeIndex]) {
                const activeElement = menuRefs.current[activeIndex];
                setLineStyle({
                    width: `${activeElement.offsetWidth}px`,
                    left: `${activeElement.offsetLeft}px`,
                });
            }
        };

        updateLineStyle();
        window.addEventListener("resize", updateLineStyle); // Обновление при ресайзе
        return () => window.removeEventListener("resize", updateLineStyle);
    }, [activeIndex]);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    const changeLanguage = (lang) => {
        setLanguage(lang.code);
        setFlag(lang.flag);
        setIsOpen(false);
    };

    return (
        <section className={css.parent}>
            <div className="container">
                <div className={css.content}>
                    <div className={css.burgerMenu} onClick={() => setOpen(!Open)}>
                        <Hamburger toggled={Open} toggle={setOpen} />
                    </div>

                    <Link to="/" className={css.logotip}><img src={logo} alt="" /></Link>

                    <nav className={Open ? css.menu + " " + css.active : css.menu}>
                        <div className={css.hedr}>
                            <div className={css.burgerMenu+" "+css.burger_menu} onClick={() => setOpen(!Open)}>
                                <Hamburger toggled={Open} toggle={setOpen} />
                            </div>
                            <div className={css.languageSelector+" "+css.langs}>
                                <button className={css.dropdownButton} onClick={toggleDropdown}>
                                    <img src={flag} alt="current flag" className={css.flag} />
                                    <span>{language}</span>
                                    <img className={css.arrow} src={vector} alt="" />
                                </button>
                                {isOpen && (
                                    <ul className={css.dropdownMenu}>
                                        {languages.map((lang) => (
                                            <li
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang)}
                                                className={css.dropdownItem}
                                            >
                                                <img src={lang.flag} alt={`${lang.code} flag`} className={css.flag} />
                                                <span>{lang.code}</span>
                                            </li>))}
                                    </ul>)}
                            </div>
                        </div>

                        {menuItems.map((item, index) => (
                            <Link to={item.path} key={index}
                                ref={(el) => (menuRefs.current[index] = el)}
                                onClick={() => setOpen(!Open)}
                                className={activeIndex === index ? `${css.menu_item} ${css.active}` : css.menu_item}>
                                {item.name}
                            </Link>
                        ))}

                        <div className={css.line} style={lineStyle}></div>
                    </nav>

                    <div className={css.start}>
                        <div className={css.languageSelector + " " + css.select}>
                            <button className={css.dropdownButton} onClick={toggleDropdown}>
                                <img src={flag} alt="current flag" className={css.flag} />
                                <span>{language}</span>
                                <img className={css.arrow} src={vector} alt="" />
                            </button>

                            {isOpen && (
                                <ul className={css.dropdownMenu}>
                                    {languages.map((lang) => (
                                        <li
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang)}
                                            className={css.dropdownItem}
                                        >
                                            <img src={lang.flag} alt={`${lang.code} flag`} className={css.flag} />
                                            <span>{lang.code}</span>
                                        </li>))}
                                </ul>)}
                        </div>
                        <button className={`${css.dropdownButton} ${css.buttonBlack}`}>Начать</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
