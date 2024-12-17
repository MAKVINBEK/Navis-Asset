import styles from "./Form.module.css"

const Form = () => {
    return(
        <form className={styles.formContainer}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="firstName">Имя </label>
                                <input type="text" id="firstName" placeholder="Имя" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="lastName">Фамилия</label>
                                <input type="text" id="lastName" placeholder="Фамилия" />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="country">Страна</label>
                                <select id="country">
                                    <option>Выберите страну</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Почта</label>
                                <input type="email" id="email" placeholder="Электронная почта" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Номер телефона</label>
                                <input type="number" id="phone" placeholder="+996 502 800 202" />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                                <label htmlFor="restoreType">Тип восстановления</label>
                                <select id="restoreType">
                                    <option>Выберите тип восстановления</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="walletType">Вид кошелька</label>
                                <select id="walletType">
                                    <option>Выберите тип</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="walletVolume">Объем кошелька</label>
                                <input type="text" id="walletVolume" placeholder="Объем кошелька" />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroupCheckbox}>
                                <input type="checkbox" id="agreement" />
                                <label htmlFor="agreement">
                                    Нажимая на кнопку «Отправить заявку», я принимаю условия
                                    <a href="#"> Пользовательского соглашения</a>
                                </label>
                            </div>
                        </div>

                        <button type="submit" className={styles.submitButton}>Отправить заявку</button>
                    </form>
    )
}

export default Form