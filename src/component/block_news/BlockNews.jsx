import css from "./BlockNews.module.css";
import frame11 from "../../assets/frome.jpeg";
import frame111 from "../../assets/framen.jpeg";
import icon5 from "../../assets/strelat.jpeg";
import icon from "../../assets/colop.png";
import { Link } from "react-router-dom";

// Массив данных
export const data = [
    {
        id: 1,
        image: frame111,
        title: 'Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
        date: '11.06.2024 12:30',
        description: "Президент Найиб Букеле из Сальвадора указал, что запасы биткойнов его страны могут превышать публичные оценки. Он раскрыл, что Сальвадор получает доходы, связанные с биткойном, из различных источников, в дополнение к капитальным приростам от покупок биткойна с момента его легализации в качестве законного платежного средства в стране."
    },
    {
        id: 2,
        image: frame111,
        title: 'да отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
        date: '11.06.2024 12:30',
        description: "Президент Найиб Букеле из Сальвадора указал, что запасы биткойнов его страны могут превышать публичные оценки. Он раскрыл, что Сальвадор получает доходы, связанные с биткойном, из различных источников, в дополнение к капитальным приростам от покупок биткойна с момента его легализации в качестве законного платежного средства в стране."
    },
    {
        id: 3,
        image: frame111,
        title: 'манда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
        date: '11.06.2024 12:30',
        description: "Президент Найиб Букеле из Сальвадора указал, что запасы биткойнов его страны могут превышать публичные оценки. Он раскрыл, что Сальвадор получает доходы, связанные с биткойном, из различных источников, в дополнение к капитальным приростам от покупок биткойна с момента его легализации в качестве законного платежного средства в стране."
    },
    {
        id: 4,
        image: frame111,
        title: 'оманда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
        date: '11.06.2024 12:30',
        description: "Президент Найиб Букеле из Сальвадора указал, что запасы биткойнов его страны могут превышать публичные оценки. Он раскрыл, что Сальвадор получает доходы, связанные с биткойном, из различных источников, в дополнение к капитальным приростам от покупок биткойна с момента его легализации в качестве законного платежного средства в стране."
    }
];

const BlockNews = () => {

    return (
        <section id="gallery" className="container">
            <h2 className={css.h2}>Новости &divide;</h2>
            <div className={css.content}>
                {/* Блок с основной новостью */}
                <div className={css.blockLeft}>
                    <img className={css.image} src={frame11} alt="" />
                    <div className={css.kazn}>
                        <p className={css.text}>Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты</p>
                        <div className={css.flex}>
                            <span className={css.date}>11.06.2024 12:30</span>
                            <button className={`${css.click} ${css.clickcap}`}>
                                <img src={icon5} alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Блок с новостями из массива */}
                <div className={css.frame}>
                    {data.map((el) => (
                        <Link to={`/news/${el.id}`} key={el.id}>
                            <div className={css.block} >
                                <img src={el.image} alt={el.title} loading="lazy" />
                                <div className={css.popit}>
                                    <p className={css.text}>{el.title}</p>
                                    <div className={css.flex}>
                                        <span className={css.date}>{el.date}</span>
                                        <button className={css.click}>
                                            <img src={icon5} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Кнопка "Подробнее" */}
            <div className={css.buttonLong}>
                <Link to="/all">
                    <button className={css.long}>
                        Подробнее <img src={icon} alt="" />
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default BlockNews;
