import css from "../block_news/BlockNews.module.css"
import { Data } from "../block_news/BlockNews";
import frame11 from "../../assets/frame11.png"
import icon5 from "../../assets/icon(5).png"
import icon from "../../assets/icon.png"

const News = () => {
    return(
        <section className="container">
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
                    {Data.map((el) => (
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
                    ))}
                </div>
            </div>
            <div className={css.buttonLong}>
            <button className={css.long}>Подробнее <img src={icon} alt="" /></button>
            </div>
        </section>


    )
}

export default News