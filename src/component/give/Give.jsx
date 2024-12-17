import styles from "./Give.module.css"
import wait1 from "../../assets/log(4).png"
import wait2 from "../../assets/log(5).png"
import wait3 from "../../assets/log(6).png"
import wait4 from "../../assets/log(7).png"
import { LuMapPin } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhone } from "react-icons/md";
import Form from "../form/Form"



function Give() {
    return (
        <div className="container">
            <div className={styles.content}>
                <div className={styles.block1}>
                    <h4>Техническая поддержка, сотрудничество и PR</h4>
                    <a href="#"></a>
                    <div className={styles.phone_number}>
                        <div className={styles.addres+' '+styles.am}>
                        <span><LuMapPin /></span>
                        <p>Кыргызская республика, г.Бишкек, Проспект Манаса 64/1</p>
                    </div>
                    <div className={styles.addres}>
                        <span><CgMail /></span>
                        <p>+996 (502)-800-202 <br />+996 (502)-800-202 </p>
                    </div>
                    <div className={styles.addres}>
                        <span><MdOutlinePhone /></span>
                        <p>navisasset@mail.com</p>
                    </div>
                    </div>
                    
                    <div className={styles.network}>
                        <h5>Мы в соцсетях</h5>
                        <div className={styles.logos}>
                            <div className={styles.divk}><img src={wait1} alt="" /></div> 
                            <div className={styles.divk}><img src={wait2} alt="" /></div>
                            <div className={styles.divk}><img src={wait3} alt="" /></div>
                            <div className={styles.divk}><img src={wait4} alt="" /></div>
                        </div>
                    </div>
                    <p className={styles.title}>Если у Вас возникли вопросы технического
                        или финансового плана, напишите нам и мы поможем Вам в решении
                        вашего вопроса. Мы отвечаем на вопросы
                        в течение 15-60 минут, в зависимости от загрузки сервиса.</p>
                </div>

                <div>
                    <Form/>
                </div>
                    </div>
                    </div>
                    

                    );
}

                    export default Give