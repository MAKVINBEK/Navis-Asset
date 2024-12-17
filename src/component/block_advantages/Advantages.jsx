import css from "./Advantages.module.css"

const Data = [
    {
        text:'Наша панель пользователя позволяет вам загружать данные в  любое время',
        title:'Восстановим ваш заблокированный кошелёк',
        number:'01'
    },
    {
        text:'Гарантируем, что резервная копия зашифрованного кошелька будет хнариться',
        title:'Ваш кошелёк защищен воздушной прослойкой',
        number:'02'
    },
    {
        text:'Наша панель пользователя позволяет вам загружать данные в любое время',
        title:'Ваш забытый пароль будет восстановлен',
        number:'03'
    },
]


const Advantages = () => {
    return(
        <section className="container">
            <div className={css.content}>
                <h2>Почему выбирают Navis Asset?</h2>
                <div className={css.blockParent}>
                    <div className={css.blockAdvantages}>
                        {Data.map((el,index) => (
                            <div key={index} className={css.block}>
                                <div>
                                   <p className={css.text}>{el.text}</p>
                                <p className={css.title}>{el.title}</p>
                                <span>{el.number}</span> 
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages