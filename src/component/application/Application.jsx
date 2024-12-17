import css from './Application.module.css'
import Check from "../../assets/Check_Big.png"
import Shield from "../../assets/icon (3).png"
import wallet from "../../assets/wallet.png"
import Form from '../form/Form'

const Application = () => {
    return(
        <div className="container">
            <div className={css.content}>
                <div className={css.block1}>
                    <div className={css.parent}>
                        <div className={css.div}><img src={wallet} alt="" /></div>
                        <div className={css.title}>
                            <h3>Доверенное <br /> восстановление кошелька</h3>
                            <p>Самое надежное имя в восстановлении цифровых <br /> активов с 2017 года.</p>
                        </div>
                    </div>
                    <div className={css.parent}>
                        <div className={css.div}><img src={Shield} alt="" /></div>
                        <div className={css.title}>
                            <h3>Безопасное недоступное <br /> хранилище</h3>
                            <p>Вся информация о кошельках и паролях зашифрована и хранится на оффлайн-серверах с воздушным зазором.</p>
                        </div>
                    </div>
                    <div className={css.parent}>
                        <div className={css.div}><img src={Check} alt="" /></div>
                        <div className={css.title}>
                            <h3>Начните совершенно <br /> бесплатно</h3>
                            <p>Гарантия без риска - вы нам не заплатите ни  копейки, <br /> если мы не сможем восстановить ваш пароль.</p>
                        </div>
                    </div>
                </div>
                <div className={css.block2}>
                    <Form/>
                </div>
            </div>
        </div>
    )
}
export default Application