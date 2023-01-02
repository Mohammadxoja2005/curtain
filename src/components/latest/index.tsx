import { FC, useState, useEffect } from 'react'
import styles from "./index.module.scss";
import BACKIMG from "../../assets/images/hero_back.png";
// commons
import TITLE from '../../commons/title';
// i18n
import { I18nProvider, LOCALES } from '../../i18n';
// translate 
import TRANSLATE from '../../i18n/translate';
import { post } from "../../features/products";
// react-redux
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const LATEST: FC = () => {
    const products = [
        {
            id: 1,
            width: 9, 
            height: 10, 
            name: <TRANSLATE text='kitchen' />,
            image: "/assets/images/1p.png",
            type: "modern"
        },
        {
            id: 2, 
            width: 9, 
            height: 10, 
            name: <TRANSLATE text='livingroom' />,
            image: "/assets/images/2p.png",
            type: "modern"
        },
        {
            id: 3, 
            width: 9, 
            height: 10, 
            name: <TRANSLATE text='livingroom' />,
            image: "/assets/images/2p.png",
            type: "modern"
        },
        {
            id: 4, 
            width: 9, 
            height: 10, 
            name: <TRANSLATE text='bedroom' />,
            image: "/assets/images/3p.png",
            type: "modern"
        },
        {
            id: 5, 
            width: 9, 
            height: 10, 
            name: <TRANSLATE text='kitchen' />,
            image: "/assets/images/1p.png",
            type: "modern"
        },
        {
            id: 6, 
            width: 9, 
            height: 10, 
            name: <TRANSLATE text='livingroom' />,
            image: "/assets/images/2p.png",
            type: "modern"
        },
        {
            id: 7, 
            width: 9, 
            height: 10, 
            name: <TRANSLATE text='livingroom' />,
            image: "/assets/images/2p.png",
            type: "modern"
        },
        {
            id: 8, 
            width: 9, 
            height: 10, 
            name: <TRANSLATE text='bedroom' />,
            image: "/assets/images/3p.png",
            type: "modern"
        },
        {
            id: 9, 
            width: 9, 
            height: 10, 
            name: <TRANSLATE text='childrenroom' />,
            image: "/assets/images/4p.png",
            type: "latest"
        },
        {
            id: 10, 
            width: 9, 
            height: 10, 
            name: <TRANSLATE text='childrenroom' />,
            image: "/assets/images/4p.png",
            type: "latest"
        },
        {
            id: 11, 
            width: 9, 
            height: 10, 
            name: <TRANSLATE text='livingroom' />,
            image: "/assets/images/4p.png",
            type: "latest"
        },
        {
            id: 12, 
            width: 9, 
            height: 10, 
            name: <TRANSLATE text='childrenroom' />,
            image: "/assets/images/3p.png",
            type: "latest"
        }
    ]

    const types = [
        {
            id: 1,
            name: <TRANSLATE text='lastproducts' />,
            type: "latest"
        },
        {
            id: 2,
            name: <TRANSLATE text='popularproducts' />,
            type: "modern"
        }
    ]

    const LANGUAGE: any = localStorage.getItem('language');

    const [type, setType] = useState<string>('modern');
    const [category, setCategory] = useState<any>([]);
    let [count, setCount] = useState<number>(4);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setCategory(products.filter(value => value.type === type));
    }, [type])

    return (
        <I18nProvider locale={LANGUAGE ? LANGUAGE : LOCALES.UZBEK}>
            <div className={styles.products}>
                <div className={styles.container}>
                    <div className={styles.products_overall} >
                        <TITLE title={<TRANSLATE text='products' />} />
                        <div className={styles.products_container_choice}>

                            <div className={styles.products_container_btns}>
                                {types && types.map(value => {
                                    return (
                                        <div className={styles.products_btns} key={value.id} onClick={() => setType(value.type)}>{value.name}</div>
                                    )
                                })

                                }
                            </div>

                            <div className={styles.products_container_category}>
                                {category && category.slice(0, count >= category.length ? count = category.length : count).map((value: any) => {
                                    return (
                                        <Link to="/category" className={styles.products_link}>
                                            <div className={styles.products_card} key={value.id} onClick={() => dispatch(post(category))}>
                                                <img className={styles.products_card_img} src={value.image} />
                                                <p className={styles.products_card_title}>{value.name}</p>
                                            </div>
                                        </Link>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>

                    {show ? null : <p className={styles.products_btn} onClick={() => setCount(count += 4)}><TRANSLATE text='all' /></p>}

                </div>
            </div>
        </I18nProvider>
    )
}

export default LATEST;