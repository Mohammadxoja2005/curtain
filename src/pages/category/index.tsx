import { FC, Fragment } from 'react'
import styles from "./index.module.scss";
// components 
import CARD from '../../components/card';
import CHOOSECARD from '../../components/choosecard';
import ORDER from '../../commons/order';
// helmet 
import { Helmet } from "react-helmet-async";

const CATEGORY: FC = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Категории товаров - Grandshtor</title>
        <meta
          name="description"
          content="Современные шторы высокого качества в Узбекистане"
        />
        <link rel="canonical" href="/category" />
      </Helmet>
      <ORDER />
      <CARD />
      <CHOOSECARD />
    </Fragment>
  )
}

export default CATEGORY; 