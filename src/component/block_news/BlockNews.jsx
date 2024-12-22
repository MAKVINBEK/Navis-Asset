import css from "./BlockNews.module.css"
import frame11 from "../../assets/frome.png"
import frame111 from "../../assets/framen.png"
import icon5 from "../../assets/streluat.png"
import icon from "../../assets/colop.png"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';

export const data =[
    {
    id:1,
    image:frame111,
    title:'Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
    date:'11.06.2024 12:30', 
    description:"сстановить $6 млн утраченной криптовалютыКоманда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты"
    },
    {
        id:2,
        image:frame111,
        title:'Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
        date:'11.06.2024 12:30', 
        description:"Команда отец-сын говорит, что им удалосьын говорит, что им удалось восстановить $6 млн утраченной криптовалюты"
    },
    {
        id:3,
        image:frame111,
        title:'Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
        date:'11.06.2024 12:30', 
        description:" отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалютыКоманда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты"
    },
    {
        id:4,
        image:frame111,
        title:'Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты',
        date:'11.06.2024 12:30', 
        description:" говорит, что им удалось восстановить $6 млн утраченной криптовалюты"
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
                        <Link to={`/news/${el.id}`}>
                        <div key={el.id} className={css.block}  onClick={() => navigate(`/NewsId/${id}`)}>
                            <img src={el.image} alt="" />
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
            <button className={css.long}>Подробнее <img src={icon} alt="" /></button>
            </div>
        </section>
    )
}

export default BlockNews;