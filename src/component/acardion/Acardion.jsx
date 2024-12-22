import React, { useState } from "react";
import styles from "./Acardion.module.css";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";


const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="container">
       <div className={styles.accordion}>
        <div className={styles.title}>
            <p>{title}</p>
            <button className={styles.click}  onClick={toggleAccordion}><span>{isOpen ?<GrSubtract /> : <GrAdd />}</span></button>
        </div>
      
      <div className={`${styles.content} ${isOpen ? styles.open : styles.closed}`}>
        {content}
      </div>
    </div>
    </section>
   
  );
};

export default Accordion;
