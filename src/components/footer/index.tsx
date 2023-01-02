import { FC, Fragment } from 'react'
import styles from "./index.module.scss";
// commmons 
import SOCIAL from '../../commons/social';
// i18n
import { I18nProvider, LOCALES } from '../../i18n';
// translate 
import TRANSLATE from '../../i18n/translate';
// components
import GOOGLEMAPS from '../../commons/map';

const FOOTER: FC = () => {

  const LANGUAGE: any = localStorage.getItem('language');

  return (
    <Fragment>
      <I18nProvider locale={LANGUAGE ? LANGUAGE : LOCALES.UZBEK}>
        <div className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footer_contact} >

              <div className={styles.footer_contact_first}>
                <h2 className={styles.footer_title}><TRANSLATE text='location' /></h2>
                <p className={styles.footer_des} >toshkent shahri olmazor</p>
                <p className={styles.footer_des} >tumani o'ratepa mahallasi</p>
                <p className={styles.footer_des} >nurafshon ko'chasi 41a uy</p>
              </div>

              <div className={styles.footer_contact_second}>
                <h2 className={styles.footer_title} ><TRANSLATE text='forcontact' /></h2>
                <p className={styles.footer_des}>+998 99 655 55 50</p>
                <p className={styles.footer_des}>+998 99 150 50 55</p>
              </div>
            </div>

            {/* <div className={styles.footer_map}>

            </div> */}
            <GOOGLEMAPS />
            {/* {new GOOGLEMAPS()} */}
          </div>
        </div>
      </I18nProvider>

      <SOCIAL color='#343434' />
    </Fragment>
  )
}

export default FOOTER; 