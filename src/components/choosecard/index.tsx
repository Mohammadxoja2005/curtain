import { FC } from 'react';
import styles from "./index.module.scss";
// slider import 
import Carousel from 'nuka-carousel';
// react-redux 
import { useDispatch } from "react-redux";
// function import
import { post } from "../../features/card";
import { useSelector } from "react-redux";
import NEXT from "../../assets/logos/next.png";
import PREV from "../../assets/logos/prev.png";

const CHOOSECARD: FC = () => {
  const dispatch = useDispatch();
  const products: any = useSelector<any>(state => state.products.value);
  const selector = useSelector((state: any) => state.order.value);
  
  const show = (): number | undefined => {
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
    wrapAround: true,
    defaultControlsConfig: {
      nextButtonText: <img src={NEXT} />,
      prevButtonText: <img src={PREV} />,
      pagingDotsClassName: styles.dot,
      nextButtonClassName: selector.bool ? styles.btns_none : styles.next_btn,
      prevButtonClassName: selector.bool ? styles.btns_none : styles.prev_btn
    },
    speed: 500,
    fade: true,
    rows: 1,
  }


  return (
    <div className={styles.choose}>
      <div className={styles.container}>
        <Carousel {...settings}>
          {products && products.map((value: any) => {
            return (
              <div key={value.id} className={styles.choose_img_container} onClick={() => dispatch(post({ id: value.id, width: value.width, height: value.height, image: value.image }))}>
                <img src={value.image} className={styles.choose_img_self} />
              </div>
            )
          })
          }
        </Carousel>
      </div>
    </div>
  )
}

export default CHOOSECARD;
