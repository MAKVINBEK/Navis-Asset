import css from "./Banner.module.css"
import { Link } from "react-router-dom";
import banner2 from "../../assets/banner2.png"
import icon from "/src/assets/icon.png"

const Banner = () => {
    return(
        <section className="container">
            <div className={css.content}>
                <div className={css.banner1}>
                    <h1>Простое <br />
                    и прозрачное <br /> восстановление <br /> кошелька</h1>
                    <p>Самый простой способ восстановить свой потерянный <br /> пароль от кошелька и расследовать обманутую <br /> криптовалюту</p>
                    <div className={css.button}>
                        <button className={`${css.buttons} ${css.buttonClick}`}> <Link to="/application">Оставить заявку</Link> </button>
                        <button className={`${css.buttons}`}>Подробнее <img src={icon} alt="icon" /></button>
                    </div>
                </div>
                <div className={css.banner2}>
                    <img src={banner2} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner