import { FC } from 'react'
import styles from "./index.module.scss";
// images
import SECONDLOGO from "../../assets/logos/secondlogo.png";
// commons
import TITLE from '../../commons/title';
// carousel
import Carousel from 'nuka-carousel';
// i18n
import { I18nProvider, LOCALES } from '../../i18n';
// translate 
import TRANSLATE from '../../i18n/translate';

const CLIENTS: FC = () => {

    const show = (): any => {
        const n = window.innerWidth;

        let k;

        if (n > 1200) {
            k = 4;
            return k;
        }

        if (n > 992 && n <= 1200) {
            k = 3;
            return k;
        }

        if (n > 768 && n <= 992) {
            k = 3;
            return k;
        }

        if (n > 576 && n <= 768) {
            k = 2;
            return k;
        }

        if (n < 576) {
            k = 1;
            return k;
        }
    }

    const settings: any = {
        slidesToShow: show(),
        slidesToScroll: 1,
        wrapAround: false,
        defaultControlsConfig: {
            pagingDotsClassName: styles.dot,
            // nextButtonText: <GrFormNext/>, 
            // prevButtonText: <GrFormPrevious/>,  
            nextButtonClassName: styles.next_btn,
            prevButtonClassName: styles.prev_btn
        },
        speed: 500,
        fade: true,
        rows: 1,
    }

    const LANGUAGE: any = localStorage.getItem('language');

    return (
        <I18nProvider locale={LANGUAGE ? LANGUAGE : LOCALES.UZBEK}>
            <div className={styles.clients}>
                <div className={styles.container}>
                    <TITLE title={<TRANSLATE text='clientsaboutus' />} />
                    <Carousel {...settings} className={styles.clients_card}>

                        {[1, 2, 3, 4].map(value => {
                            return (
                                <div className={styles.clients_card_div} key={value}>
                                    <img src={SECONDLOGO} />
                                </div>
                            )
                        })
                        }

                    </Carousel>
                    <p className={styles.products_btn}><TRANSLATE text='all' /></p>
                </div>
            </div>
        </I18nProvider>
    )
}

export default CLIENTS; 