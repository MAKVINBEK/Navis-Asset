import css from "./Footer.module.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/logo (1).png"
import icons1 from "../../assets/(1).png"
import icons2 from "../../assets/(2).png"
import icons3 from "../../assets/(3).png"
import icons4 from "../../assets/(4).png"


const Footer = () => {
    return(
        <section className={css.section}>
            <div className="container">
                <div className={css.block}>
                    <div className={css.block1}>
                    <Link to="/menu"><img src={logo} alt="" /></Link>
                    <p className={css.title+' '+css.span}>
                    Это международный сервис, где вам <br /> быстро и надежно восстановят ваш <br /> забытый криптокошелёк
                    </p>
                    <span>navisasset@mail.com</span>
                </div>
          <div className={css.block2}>
                    <div className={css.bloking}>
                    <h5>Основное</h5>
                    <Link to="/about-us" className={css.title}>О нас</Link>
                    <Link to="/contacts" className={css.title}>Контакты</Link>
                    <Link to="" className={css.title}>Партнеры</Link>
                    <a className={css.title} href="#">Почему <br /> NavisAsset?</a>
                </div>

                <div className={css.bloking}>
                    <h5>Пользователям</h5>
                    <Link to="/services" className={css.title}>Услуги</Link>
                    <Link to="/reviews" className={css.title} >Отзывы</Link>
                    <Link to='/price' className={css.title} >Прайс</Link>
                    <Link to="" className={css.title} >Новости</Link>
                </div>
                </div>
                
                <div className={css.block4}>
                    <h5>Мы в соцсетях</h5>
                    <div className={css.icons}>
                        <div className={css.div}><img src={icons1} alt="" /></div>
                        <div className={css.div}><img src={icons2} alt="" /></div>
                        <div className={css.div}><img src={icons3} alt="" /></div>
                        <div className={css.div}><img src={icons4} alt="" /></div>
                    </div>
                </div>
                </div>
                
            </div>
            <div className={css.mode}>
                <div className="container">
                    <div className={css.blocktop}>
                        <p className={css.top}>© 2024 NavisAsset Все права защищены</p>
                        <p className={css.lops}>Made with ❤ by <a href="#">NavisDevs</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer