import css from "./From.module.css"
import { Link } from "react-router-dom";
import component4 from "../../assets/Component 4.png"

const From = () => {
    return(
        <section className="container">
            <div className={css.content}>
                <h2>Ваши деньги <br /> 
                обратно в вашем <br /> кармане!</h2>
                <img src={component4} alt="" />
                <div className={css.blockRight}>
                    <p>Возьми свои финансы снова <br /> под контроль. Нажми
                         на <br /> "Оставить заявку", чтобы <br />получить помощь.</p>
                         <button><Link to="/application">Оставить заявку</Link></button>
                </div>
            </div>
        </section>
    )
}

export default From