import css from "./Partners.module.css"
import image1 from "../../assets/image 1899.png"
import image2 from "../../assets/image 1895.png"
import image3 from "../../assets/image 1896.png"
import image4 from "../../assets/image 1898.png"
import image5 from "../../assets/image 1897.png"

const Partners = () => {
    const images = [image1, image2, image3, image4, image5];

    return (
        <div className={css.partnersContainer}>
            {/* Основной слайдер */}
            <div className={css.slider}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Partner ${index + 1}`} />
                ))}
            </div>

            {/* Дублированный слайдер для бесконечности */}
            <div className={css.slider + " " + css.duplicate}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Duplicate Partner ${index + 1}`} />
                ))}
            </div>
        </div>
        
        
    );
};

export default Partners;