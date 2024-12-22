import css from "./BlockNews.module.css"
import frame11 from "../../assets/frome.jpeg"
import frame111 from "../../assets/framen.jpeg"
import icon5 from "../../assets/streluat.jpeg"
import icon from "../../assets/colop.png"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';

export const data =[
    {
    id:1,
    image:frame111,
    title:'Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
    date:'11.06.2024 12:30', 
    description:"Президент Найиб Букеле из Сальвадора указал, что запасы биткойнов его страны могут превышать публичные оценки. Он раскрыл, что Сальвадор получает доходы, связанные с биткойном, из различных источников, в дополнение к капитальным приростам от покупок биткойна с момента его легализации в качестве законного платежного средства в стране."
    },
    {
        id:2,
        image:frame111,
        title:'Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
        date:'11.06.2024 12:30', 
        description:"Президент Найиб Букеле из Сальвадора указал, что запасы биткойнов его страны могут превышать публичные оценки. Он раскрыл, что Сальвадор получает доходы, связанные с биткойном, из различных источников, в дополнение к капитальным приростам от покупок биткойна с момента его легализации в качестве законного платежного средства в стране."
    },
    {
        id:3,
        image:frame111,
        title:'Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
        date:'11.06.2024 12:30', 
        description:" Президент Найиб Букеле из Сальвадора указал, что запасы биткойнов его страны могут превышать публичные оценки. Он раскрыл, что Сальвадор получает доходы, связанные с биткойном, из различных источников, в дополнение к капитальным приростам от покупок биткойна с момента его легализации в качестве законного платежного средства в стране."
    },
    {
        id:4,
        image:frame111,
        title:'Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
        date:'11.06.2024 12:30', 
        description:" Президент Найиб Букеле из Сальвадора указал, что запасы биткойнов его страны могут превышать публичные оценки. Он раскрыл, что Сальвадор получает доходы, связанные с биткойном, из различных источников, в дополнение к капитальным приростам от покупок биткойна с момента его легализации в качестве законного платежного средства в стране."
    },
    
]

const BlockNews = () =>{
    
    const navigate = useNavigate()
    return(
        <section id="gallery" className="container">
            <h2 className={css.h2}>Новости</h2>
            <div className={css.content}>
                <div className={css.blockLeft}>
                    <img className={css.image} src={frame11} alt="" />
                        <div className={css.kazn}>
                    <p className={css.text}>Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты</p>
                    <div className={css.flex}>
                        <span className={css.date}>11.06.2024 12:30</span>
                        <button className={css.click+" "+css.clickcap}><img src={icon5} alt="" /></button>
                    </div>
                    </div>
                   </div>
                <div className={css.frame}>
                    {data.map((el) => (
                        <Link to={`/news/${el.id}`} onClick={() => handleLinkClick(el.id)}>
                        <div key={el.id} className={css.block}  onClick={() => navigate(`/NewsId/${id}`)}>
                            <img src={el.image} alt="" loading="lazy"/>
                            <div className={css.popit}>
                                <p className={css.text}>{el.title}</p>
                                <div className={css.flex}>
                                <span className={css.date}>{el.date}</span>
                                <button className={css.click}><img src={icon5} alt="" /></button>
                                </div>
                            </div>
                        </div>
                        </Link>
                        
                    ))}
                </div>
            </div>
            <div className={css.buttonLong}>
            <Link to="/all"><button className={css.long}>Подробнее <img src={icon} alt="" /></button></Link>
            </div>
        </section>
    )
}

export default BlockNews;