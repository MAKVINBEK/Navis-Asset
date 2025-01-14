import React, { useState, useMemo } from "react";
import { HashLink } from "react-router-hash-link";
import { data } from "../block_news/BlockNews";
import "./News.css";
import { useParams } from "react-router-dom";
import icon5 from "../../assets/strelat.jpeg";
import { GoArrowLeft } from "react-icons/go";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Для ленивой загрузки изображений

const Detail = () => {
    const { id } = useParams(); // Получаем ID из URL
    const [selectedId, setSelectedId] = useState(Number(id)); // Храним выбранное ID

    // Используем useMemo для оптимизации поиска выбранного элемента
    const selectedItem = useMemo(
        () => data.find((item) => item.id === selectedId),
        [selectedId]
    );

    // Если элемент не найден
    if (!selectedItem) return <p>Новость не найдена!</p>;

    return (
        <div className="container">
            {/* Кнопка возврата */}
            <HashLink smooth to="/#gallery">
                <div className="syns"><GoArrowLeft /></div>
            </HashLink>

            <div className="content">
                {/* Левая часть: подробности новости */}
                <div className="blockLeft">
                    <h2>{selectedItem.title}</h2>
                    <span className="date">{selectedItem.date}</span>
                    <img src={selectedItem.image} alt={selectedItem.title} />
                    <p>{selectedItem.description}</p>
                </div>

                {/* Правая часть: список новостей */}
                <div className="frame">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className={`block ${item.id === selectedId ? "active" : ""}`}
                            onClick={() => setSelectedId(item.id)}>
                            {/* Лениво загружаем изображения */}
                            <LazyLoadImage
                                src={item.image}
                                alt={item.title}
                                effect="blur" // Эффект размытия при загрузке
                            />
                            <div className="popit">
                                <p className="text">{item.title}</p>
                                <div className="flex">
                                    <span className="date">{item.date}</span>
                                    <button className="click">
                                        <img src={icon5} alt="Иконка" />
                                    </button>
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
