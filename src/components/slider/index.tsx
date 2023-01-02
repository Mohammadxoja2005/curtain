import { FC, Fragment } from 'react'
import styles from "./index.module.scss";
// commons 
import SIDEBAR from '../../commons/sidebar';
// slider
import Carousel from "nuka-carousel";
// image 
import HERO from "../../assets/images/hero.png";
// i18n 
import { I18nProvider, LOCALES } from '../../i18n';
// translate 
import TRANSLATE from '../../i18n/translate';
// react-redux 
import { useDispatch, useSelector } from "react-redux";
// set function import 
import { set } from "../../features/order";

const SLIDER: FC = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state.order.value)

  const settings = {
    defaultControlsConfig: {
      pagingDotsClassName: selector.bool ? styles.slider_dots_none : styles.slider_dots,
      nextButtonClassName: styles.slider_next_btn,
      prevButtonClassName: styles.slider_prev_btn,
    }
  }

  const LANGUAGE: any = localStorage.getItem('language');

  return (
    <Fragment>
      <I18nProvider locale={LANGUAGE ? LANGUAGE : LOCALES.UZBEK}>
        <SIDEBAR bottom={50} position="fixed"/>
        <div className={styles.slider} >
          <div className={styles.container} >

            <Carousel {...settings}>
              {[1].map(value => {
                return (
                  <div className={styles.slider_inner} key={value}>

                    <div className={styles.slider_info}>
                      <h1 className={styles.slider_title} >{<TRANSLATE text='about' values={{ path: <span className={styles.slider_high} >GRAND SHTOR</span> }} />} </h1>
                      <p className={styles.slider_des} >{<TRANSLATE text='info' />}</p>
                      <div className={styles.slider_btn} onClick={() => dispatch(set({ bool: true }))}>{<TRANSLATE text='order' />}</div>
                    </div>

                    <div className={styles.slider_img} style={{ backgroundImage: `url(${HERO})` }}>
                      {/* <img src=""/> */}
                    </div>

                  </div>
                )
              })

              }
            </Carousel>

          </div>
        </div>
      </I18nProvider>
    </Fragment>

  )
}

export default SLIDER; 