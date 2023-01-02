import { FC } from 'react'
import styles from "./index.module.scss";
import FACEBOOK from "../../assets/logos/facebooklogo.png";
import INSTAGRAM from "../../assets/logos/instagramlogo.png";
import TELEGRAM from "../../assets/logos/telegramlogo.png";

import { I18nProvider, LOCALES } from '../../i18n';
// translate 
import TRANSLATE from '../../i18n/translate';

interface props {
    color: string,
}

const SOCIAL = (props: props) => {
    const { color } = props;
    const LANGUAGE: any = localStorage.getItem('language');

    return (
        <I18nProvider locale={LANGUAGE ? LANGUAGE : LOCALES.UZBEK}>
            <div className={styles.social} style={{ background: color }}>
                <div className={styles.container} >
                    <h2 className={styles.social_title}><TRANSLATE text='social' /></h2>

                    <div className={styles.social_info_elements}>
                        <div className={styles.social_info_elements_div} ><img className={styles.social_info_img} src={FACEBOOK} /><p className={styles.social_info_name} >FACEBOOK</p></div>
                        <div className={styles.social_info_elements_div} ><img className={styles.social_info_img} src={INSTAGRAM} /><p className={styles.social_info_name} >INSTAGRAM</p></div>
                        <div className={styles.social_info_elements_div} ><img className={styles.social_info_img} src={TELEGRAM} /><p className={styles.social_info_name} >TELEGRAM</p></div>
                    </div>
                </div>
            </div>
        </I18nProvider>
    )
}

export default SOCIAL