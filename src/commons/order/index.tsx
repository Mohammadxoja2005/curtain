import { FC, useState } from 'react';
import styles from "./index.module.scss";
// png
import GIRL from "../../assets/images/girl.png";
// i18n
import { I18nProvider, LOCALES } from '../../i18n';
// translate 
import TRANSLATE from '../../i18n/translate';
// axios 
import axios from "axios";
// react-redux
import { useSelector, useDispatch } from "react-redux";
// set function
import { set } from '../../features/order'; 

const ORDER: FC = () => {
    const LANGUAGE: any = localStorage.getItem('language');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const isOpen = useSelector((state: any) => state.order.value);
    const dispatch = useDispatch();

    const onSubmit = async () => {
        await axios.post('https://backend.grandshtor.uz/quote', {
            name: name,
            phone: phone
        })

        window.location.reload()
    }

    return (
        <>
            {isOpen.bool ? <I18nProvider locale={LANGUAGE ? LANGUAGE : LOCALES.UZBEK}>
                <div className={styles.order}> 
                    <div className={styles.container}>
                        <div className={styles.orderX} onClick={() => dispatch(set({ bool: false }))} >X</div>
                        {/* <div className={styles.order_img_div}></div> */}
                        <img className={styles.order_img_div} src={GIRL} alt="" /> 

                        <div className={styles.order_input_div} >
                            <h2 className={styles.order_title} ><TRANSLATE text='masteradvice' /></h2>
                            <input type="text" placeholder='Ismingizni kiriting' className={styles.order_input} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder='Telefon raqamingizni kiriting' className={styles.order_input} onChange={(e) => setPhone(e.target.value)} />
                            <p className={styles.order_btn} onClick={() => { onSubmit() }}><TRANSLATE text='freeadvice' /></p>
                        </div>
                    </div>
                </div>
            </I18nProvider> : null}
        </>
    )
}

export default ORDER; 