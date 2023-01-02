import { Fragment } from 'react'
import styles from "./index.module.scss";
// images 
import CATEGORY from "/assets/images/category.png"; 
// commons 
import SIDEBAR from '../../commons/sidebar';
// react-redux
import { useSelector } from "react-redux";
// i18n 
import { I18nProvider, LOCALES } from '../../i18n';
// translate 
import TRANSLATE from '../../i18n/translate';
// react-redux
import { useDispatch } from "react-redux";
// set function 
import { set } from "../../features/order";

interface props {
    id?: number,
    width?: number,
    height?: number,
    name?: string,
}

const CARD = (props: props) => {
    const dispatch = useDispatch();

    const card: any = useSelector<any>(state => state.card.value);
    const LANGUAGE: any = localStorage.getItem('language');  

    return (
        <Fragment>
            <I18nProvider locale={LANGUAGE ? LANGUAGE : LOCALES.UZBEK}>
                <div style={{ background: `url(${card.image})`, backgroundSize: "cover"}} key={card.id}>
                    <SIDEBAR bottom={0} />

                    <div className={styles.card_container}>
                        <div className={styles.container}>
                            <div className={styles.card_div}>

                            </div>

                            <div className={styles.card_info}>
                                <h3 className={styles.card_title}>Tashkent </h3>
                                <p className={styles.card_des}>{card.width}x {card.height}<TRANSLATE text='metre' />  </p>
                                <div className={styles.card_btn} onClick={() => dispatch(set({ bool: true }))}><TRANSLATE text='order' /></div>
                            </div>

                        </div>
                    </div>

                </div>
            </I18nProvider>
        </Fragment>
    )
}

export default CARD; 