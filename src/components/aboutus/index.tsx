import { FC, Fragment } from 'react'
import styles from "./index.module.scss";
// commons 
import SOCIAL from '../../commons/social';
// icons
import YOUTUBE from "../../assets/logos/youtube.png"
// i18n
import { I18nProvider, LOCALES } from '../../i18n';
// translate 
import TRANSLATE from '../../i18n/translate';
// helmet

const ABOUTUS: FC = () => { 
    const LANGUAGE: any = localStorage.getItem('language');   

    return (
        <Fragment>
            <I18nProvider locale={LANGUAGE ? LANGUAGE : LOCALES.UZBEK}>
                <SOCIAL color={'#252525'} />
                <div className={styles.aboutus} >
                    <div className={styles.container} >

                        <div className={styles.aboutus_about_elements}>

                            <h2 className={styles.aboutus_title}><TRANSLATE text='aboutus'/></h2>
                            <p className={styles.aboutus_des}><TRANSLATE text='feel' values={{path: <span className={styles.aboutus_des_custom} >GRAND SHTOR</span>}}/></p>

                            <div className={styles.aboutus_btn_div} >
                                <div className={styles.aboutus_about_btn}><TRANSLATE text='catalog'/></div>
                                <div className={styles.aboutus_about_btn}><TRANSLATE text='freeadvice'/></div>
                            </div>

                        </div>
                        <div className={styles.aboutus_about_img}>
                            <img className={styles.aboutus_img_anim} src={YOUTUBE} />
                            <div className={styles.aboutus_circle} id={styles.first} ></div>
                            <div className={styles.aboutus_circle} id={styles.second} ></div>
                        </div>
                    </div>
                </div>
            </I18nProvider>
        </Fragment>
    )
}

export default ABOUTUS