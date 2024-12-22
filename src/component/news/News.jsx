import { HashLink } from "react-router-hash-link";
import { data } from "../block_news/BlockNews";
import "./News.css"
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
    const { id } = useParams(); // Получаем ID из URL
    const navigate = useNavigate();

    // Состояние для "фокусной" фотографии
    const [selectedId, setSelectedId] = useState(Number(id));

    // Находим выбранную фотографию
    const selectedItem = data.find((item) => item.id === selectedId);

    if (!selectedItem) return <p>Новость не найдена!</p>;

    return (
        <div className="detail-page">
            <div className="main-detail">
                <img src={selectedItem.image} alt={selectedItem.title} />
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
                <span>{selectedItem.date}</span>
            </div>
            <div className="side-gallery">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={`side-item ${item.id === selectedId ? "active" : ""}`}
                        onClick={() => setSelectedId(item.id)}
                    >
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <span>{item.date}</span>
                    </div>
                ))}
            </div>
            <HashLink smooth to="/#gallery">Назад</HashLink>
        </div>
    );
};

export default Detail;

