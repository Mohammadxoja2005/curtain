import { FC } from 'react'
import styles from "./index.module.scss";
import PHONELOGO from "../../assets/logos/phonelogo.png"; 
// import TELEGRAM from "./assets/logos/telegram.png"; 
import { Link } from "react-router-dom";

const TELEGRAMCALL: FC = () => {
    return (
        <a href="https://www.instagram.com/" target="_blank"> 
            <div className={styles.telegram_phone}> 
                <img className={styles.telegram_phone_img} src="./assets/logos/telegram.png" />
                <div className={styles.telegram_circle} id={styles.first}></div>
                {/* <div className={styles.telegram_circle} id={styles.second}></div> */}
            </div>
        </a>
    )
}

export default TELEGRAMCALL; 