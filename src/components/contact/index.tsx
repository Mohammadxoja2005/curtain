import { FC, useState } from 'react'
import styles from "./index.module.scss";
import axios from "axios";  

import { I18nProvider, LOCALES } from '../../i18n';
// translate 
import TRANSLATE from '../../i18n/translate';

const CONTACT: FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');  
    // http://localhost:5000/quote 

    const onSubmit =  async () => {  
       await axios.post('https://backend.grandshtor.uz/quote', {
            name: name, 
            phone: phone
        }).then(res => console.log(res));  

        window.location.reload()
    } 

    const LANGUAGE: any = localStorage.getItem('language'); 

    return ( 
        <I18nProvider locale={LANGUAGE ? LANGUAGE : LOCALES.UZBEK}>
              <div className={styles.contact}>
            <div className={styles.container}>

                <div className={styles.contact_info}>
                    <h2 className={styles.contact_title} >{<TRANSLATE text='about' values={{ path: <span className={styles.slider_high} >GRAND SHTOR</span> }} />}</h2>
                </div>

                <div className={styles.contact_form}>
                    <h3 className={styles.contact_form_title}><TRANSLATE text='masteradvice'/></h3>
                    <input className={styles.contact_form_input} type="text" placeholder={'Ismingizni kiriting'} onChange={(e) => setName(e.target.value)} />
                    <input className={styles.contact_form_input} type="text" placeholder='Telefon raqamingizni kiriting' onChange={(e) => setPhone(e.target.value)} />
                    <div className={styles.contact_form_btn} onClick={() => {onSubmit()}}><TRANSLATE text='freeadvice'/></div>
                </div>
            </div>
        </div>
        </I18nProvider>
    )
}

export default CONTACT;