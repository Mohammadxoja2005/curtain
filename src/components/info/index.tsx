import { FC, useEffect, useState } from 'react'
import styles from "./index.module.scss"
import CountUp from "react-countup";

import { I18nProvider, LOCALES } from '../../i18n';
// translate 
import TRANSLATE from '../../i18n/translate';
const INFO: FC = () => {

    const fakeData = [
        {
            id: 1,
            title: "3000+",
            des: <TRANSLATE text='curtains' />
        },
        {
            id: 2,
            title: "16+",
            des: <TRANSLATE text='yearly' />
        },
        {
            id: 3,
            title: "3000+",
            des: <TRANSLATE text='color' />
        },
        {
            id: 4,
            title: "5000+",
            des: <TRANSLATE text='clients' />
        }
    ]
    const LANGUAGE: any = localStorage.getItem('language');
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 42) {
                setShow(true);
            }
        })
    }, [window.scrollY])

    return (
        <I18nProvider locale={LANGUAGE ? LANGUAGE : LOCALES.UZBEK}>
            <div className={styles.info}>
                <div className={styles.container}>
                    {fakeData && fakeData.map(value => {
                        return (
                            <div className={styles.info_info} key={value.id}>

                                <h2 className={styles.info_title}>
                                    {show && show ? <CountUp duration={1} start={0} end={parseInt(value.title)} /> : 0}
                                    +</h2>

                                <p className={styles.info_des}>{value.des}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </I18nProvider>
    )
}

export default INFO;