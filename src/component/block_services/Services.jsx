import css from "./Services.module.css"
import icon1 from "../../assets/icon (1).png"
import icon2 from "../../assets/icon (2).png"
import icon3 from "../../assets/icon (3).png"
import icon4 from "../../assets/icon (4).png"


const Services = () => {
    return(
        <section className="container">
            <h2 className={css.My}>Мы поможем вам, если</h2>
            <div className={css.content}>
                <div className={css.blockServices+" "+css.blockRed}>
                    <div className={css.bbbb}>
                    <img src={icon1} alt="" />
                    </div>
                    <h3>Если ваш пароль не <br />работает</h3>
                    <p>Вы думали, что знаете свой пароль, но теперь он не разблокирует
                         ваш кошелек. Возможно, в нем используются другие цифры или другая заглавная буква, чем вы помните.</p>
                </div>
                <div className={css.blockServices}>
                <div className={css.icons}>
                    <img src={icon2} alt="" />
                    </div>
                    <h3>Частичное восстановление <br /> исходной фразы</h3>
                    <p>Вы записали список слов, а парольная фраза - это некая комбинация этих слов.</p>
                </div>
                <div className={css.blockServices}>
                    <div className={css.icons}>
                       <img src={icon4} alt="" /> 
                    </div>
                    <h3>Потеряли доступ к <br /> кошельку крупной сети</h3>
                    <p>Вы потеряли доступ к обычному криптоактиву, такому как Bitcoin, 
                        Ethereum, Litecoin, Dogecoin, NFT или десяткам других альткоинов</p>
                </div>
                <div className={css.blockServices}>
                <div className={css.icons}>
                       <img src={icon3} alt="" /> 
                    </div>
                    <h3>Вас обманули <br />  мошенники</h3>
                    <p>Мы предлагаем услуги по розыску (а не по взысканию) для тех, кто хочет 
                        построить свое дело и, возможно, раскрыть реальную личность мошенника.'</p>
                </div>
            </div>
        </section>
    )
}

export default Services