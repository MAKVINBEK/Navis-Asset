import { HashLink } from "react-router-hash-link";
import { data } from "../block_news/BlockNews";
import "./News.css"
import React, { useState } from "react";
import { useParams} from "react-router-dom";
import icon5 from "../../assets/streluat.jpeg"
import { GoArrowLeft } from "react-icons/go";

const Detail = () => {
    const { id } = useParams(); // Получаем ID из URL

    // Состояние для "фокусной" фотографии
    const [selectedId, setSelectedId] = useState(Number(id));

    // Находим выбранную фотографию
    const selectedItem = data.find((item) => item.id === selectedId);

    if (!selectedItem) return <p>Новость не найдена!</p>;

    return (
        <div className="container">
            <HashLink  smooth to="/#gallery"><div className="syns"><GoArrowLeft /></div></HashLink>
            <div className="content">
                <div className="blockLeft">
                    <h2>{selectedItem.title}</h2>
                    <span className="date">{selectedItem.date}</span>
                    <img src={selectedItem.image} alt={selectedItem.title} />
                    <p>{selectedItem.description}</p>
                </div>
                <div className="frame">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className={`block ${item.id === selectedId ? "active" : ""}`}
                            onClick={() => setSelectedId(item.id)}>
                            <img src={item.image} alt={item.title} />
                            <div className="popit">
                                <p className="text">{item.title}</p>
                                <div className="flex">
                                    <span className="date">{item.date}</span>
                                    <button className="click"><img src={icon5} alt="" /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Detail;

