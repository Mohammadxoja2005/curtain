import { FC, Fragment } from 'react'
// COMPONENTS
import SLIDER from '../../components/slider';
import INFO from "../../components/info";
import PRODUCTS from '../../components/products';
import CONTACT from "../../components/contact";
import ABOUTUS from '../../components/aboutus';
import LATEST from '../../components/latest';
import CLIENTS from '../../components/clients';
import QUESTIONS from '../../components/questions';
import FOOTER from '../../components/footer';
import TELEGRAMCALL from '../../commons/telegramcall';
// commons 
import ORDER from '../../commons/order';
// STYLES
import styles from "./index.module.scss";
import IMG from "../../assets/images/hero_back.png";
// helmet 
import { Helmet } from "react-helmet-async";

const HOME: FC = () => {
  return (
    <Fragment>

      <Helmet>
        <title>Современные шторы высокого качества в Узбекистане - Grandshtor</title>
        <meta
          name="description"
          content="Современные шторы высокого качества в Узбекистане"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <ORDER />
      <TELEGRAMCALL />
      <div className={styles.home_hero}>
        <SLIDER />
      </div>
      <INFO />
      <PRODUCTS />
      <CONTACT />
      <ABOUTUS />
      <LATEST />
      <CLIENTS />
      <QUESTIONS />
      <FOOTER />
    </Fragment>
  )
}

export default HOME; 