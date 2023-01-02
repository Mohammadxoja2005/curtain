import { FC, useEffect, useState } from 'react'
import styles from "./index.module.scss";
// commons
import TITLE from '../../commons/title';
// i18n
import { I18nProvider, LOCALES } from '../../i18n';
// translate 
import TRANSLATE from '../../i18n/translate';
// post  
import { post } from "../../features/products";
// react-redux
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const PRODUCTS: FC = () => {

    const dispatch = useDispatch();

    const products = [
        {
            id: 1,
            width: 10,
            height: 4,
            name: "BESEDKA",
            image: "/assets/images/IMG_BE20.jpg",
            type: "room",
            bycategory: "be"

        },
        {
            id: 2,
            width: 10,
            height: 4,
            name: "BESEDKA",
            image: "/assets/images/IMG_BE2.jpg",
            type: "room",
            bycategory: "be"

        },
        {
            id: 3,
            width: 10,
            height: 4,
            name: "BESEDKA",
            image: "/assets/images/IMG_BE3.jpg",
            type: "room",
            bycategory: "be"

        },
        {
            id: 4,
            width: 10,
            height: 4,
            name: "BESEDKA",
            image: "/assets/images/IMG_BE5.jpg",
            type: "room",
            bycategory: "be"

        },
        {
            id: 5,
            width: 10,
            height: 4,
            name: "BESEDKA",
            image: "/assets/images/IMG_BE5.jpg",
            type: "room",
            bycategory: "be"

        },
        {
            id: 6,
            width: 10,
            height: 4,
            name: "KATTALAR XONASI",
            image: "/assets/images/IMG_KA1.jpg",
            type: "room",
            bycategory: "ka"

        },
        {
            id: 7,
            width: 10,
            height: 4,
            name: "OSHXONA",
            image: "/assets/images/IMG_O1.jpg",
            type: "room",
            bycategory: "o"

        },
        {
            id: 8,
            width: 10,
            height: 4,
            name: "OSHXONA",
            image: "/assets/images/IMG_O2.jpg",
            type: "room",
            bycategory: "o"

        },
        {
            id: 9,
            width: 10,
            height: 4,
            name: "OSHXONA",
            image: "/assets/images/IMG_O3.jpg",
            type: "room",
            bycategory: "o"

        },
        {
            id: 10,
            width: 10,
            height: 4,
            name: "OSHXONA",
            image: "/assets/images/IMG_XO1.jpg",
            type: "room",
            bycategory: "xo"

        },
        {
            id: 11,
            width: 10,
            height: 4,
            name: "XOL",
            image: "/assets/images/IMG_XO2.jpg",
            type: "room",
            bycategory: "xo"

        },
        {
            id: 12,
            width: 10,
            height: 4,
            name: "XOL",
            image: "/assets/images/IMG_XO3.jpg",
            type: "room",
            bycategory: "h"

        },
        {
            id: 13,
            width: 10,
            height: 4,
            name: "XOL",
            image: "/assets/images/IMG_XO4.jpg",
            type: "room",
            bycategory: "h"

        },
        {
            id: 14,
            width: 10,
            height: 4,
            name: "XOL",
            image: "/assets/images/IMG_XO5.jpg",
            type: "room",
            bycategory: "h"

        },
        {
            id: 15,
            width: 10,
            height: 4,
            name: "HI TECH",
            image: "/assets/images/IMG_H3.jpg",
            type: "type",
            bycategory: "h"

        },
        {
            id: 16,
            width: 10,
            height: 4,
            name: "HI TECH",
            image: "/assets/images/IMG_H4.jpg",
            type: "type",
            bycategory: "h"

        },
        {
            id: 17,
            width: 10,
            height: 4,
            name: "HI TECH",
            image: "/assets/images/IMG_H5.jpg",
            type: "type",
            bycategory: "h"

        },
        {
            id: 18,
            width: 10,
            height: 4,
            name: "HI TECH",
            image: "/assets/images/IMG_H6.jpg",
            type: "type",
            bycategory: "h"

        },
        {
            id: 19,
            width: 10,
            height: 4,
            name: "KLASSIKA",
            image: "/assets/images/IMG_KL1.jpg",
            type: "type",
            bycategory: "kl"

        },
        {
            id: 20,
            width: 10,
            height: 4,
            name: "KLASSIKA",
            image: "/assets/images/IMG_KL1.jpg",
            type: "type",
            bycategory: "kl"

        },
        {
            id: 21,
            width: 10,
            height: 4,
            name: "KLASSIKA",
            image: "/assets/images/IMG_KL3.jpg",
            type: "type",
            bycategory: "kl"

        },
        {
            id: 22,
            width: 10,
            height: 4,
            name: "NEO HI TECH",
            image: "/assets/images/IMG_NE1.jpg",
            type: "type",
            bycategory: "ne"
        },
        {
            id: 24,
            width: 10,
            height: 4,
            name: "NEO HI TECH",
            image: "/assets/images/IMG_NEO2.jpg",
            type: "type",
            bycategory: "neo"
        },
        {
            id: 25,
            width: 10,
            height: 4,
            name: "NEO HI TECH",
            image: "/assets/images/IMG_NEO4.jpg",
            type: "type",
            bycategory: "neo"
        },
        {
            id: 26,
            width: 10,
            height: 4,
            name: "NEO HI TECH",
            image: "/assets/images/IMG_NEO5.jpg",
            type: "type",
            bycategory: "neo"
        },
        {
            id: 27,
            width: 10,
            height: 4,
            name: "NEO HI TECH",
            image: "/assets/images/IMG_NEO6.jpg",
            type: "type",
            bycategory: "neo"
        },
        {
            id: 28,
            width: 10,
            height: 4,
            name: "NEO HI TECH",
            image: "/assets/images/IMG_NEO11.jpg",
            type: "type",
            bycategory: "neo"
        },
        {
            id: 29,
            width: 10,
            height: 4,
            name: "RIMSKIY",
            image: "/assets/images/IMG_RI1.jpg",
            type: "type",
            bycategory: "ri"
        },
        {
            id: 29,
            width: 10,
            height: 4,
            name: "RIMSKIY",
            image: "/assets/images/IMG_RI3.jpg",
            type: "type",
            bycategory: "ri"
        },
        {
            id: 30,
            width: 10,
            height: 4,
            name: "RIMSKIY",
            image: "/assets/images/IMG_RI17.jpg",
            type: "type",
            bycategory: "ri"
        },
        {
            id: 31,
            width: 10,
            height: 4,
            name: "BOBON",
            image: "/assets/images/IMG_B16.jpg",
            type: "accessories",
            bycategory: "b"
        },
        {
            id: 32,
            width: 10,
            height: 4,
            name: "BOBON",
            image: "/assets/images/IMG_B17.jpg",
            type: "accessories",
            bycategory: "b"
        },
        {
            id: 33,
            width: 10,
            height: 4,
            name: "BOBON",
            image: "/assets/images/IMG_B18.jpg",
            type: "accessories",
            bycategory: "b"
        },
        {
            id: 34,
            width: 10,
            height: 4,
            name: "BOBON",
            image: "/assets/images/IMG_B19.jpg",
            type: "accessories",
            bycategory: "b"
        },
        {
            id: 34,
            width: 10,
            height: 4,
            name: "BOBON",
            image: "/assets/images/IMG_B20.jpg",
            type: "accessories",
            bycategory: "b"
        },
        {
            id: 35,
            width: 10,
            height: 4,
            name: "DEREJATEL",
            image: "/assets/images/IMG_D1.jpg",
            type: "accessories",
            bycategory: "d"
        },
        {
            id: 36,
            width: 10,
            height: 4,
            name: "DEREJATEL",
            image: "/assets/images/IMG_D2.jpg",
            type: "accessories",
            bycategory: "d"
        },
        {
            id: 37,
            width: 10,
            height: 4,
            name: "DEREJATEL",
            image: "/assets/images/IMG_D3.jpg",
            type: "accessories",
            bycategory: "d"
        },
        {
            id: 38,
            width: 10,
            height: 4,
            name: "DEREJATEL",
            image: "/assets/images/IMG_D4.jpg",
            type: "accessories",
            bycategory: "d"
        },
        {
            id: 39,
            width: 10,
            height: 4,
            name: "DEREJATEL",
            image: "/assets/images/IMG_D5.jpg",
            type: "accessories",
            bycategory: "d"
        },
        {
            id: 40,
            width: 10,
            height: 4,
            name: "DEREJATEL",
            image: "/assets/images/IMG_D6.jpg",
            type: "accessories",
            bycategory: "d"
        },
        {
            id: 41,
            width: 10,
            height: 4,
            name: "DEREJATEL",
            image: "/assets/images/IMG_D7.jpg",
            type: "accessories",
            bycategory: "d"
        },
        {
            id: 42,
            width: 10,
            height: 4,
            name: "DEREJATEL",
            image: "/assets/images/IMG_D8.jpg",
            type: "accessories",
            bycategory: "d"
        },
        {
            id: 43,
            width: 10,
            height: 4,
            name: "DEREJATEL",
            image: "/assets/images/IMG_D9.jpg",
            type: "accessories",
            bycategory: "d"
        },
        {
            id: 44,
            width: 10,
            height: 4,
            name: "KARNIZ",
            image: "/assets/images/IMG_K2.jpg",
            type: "accessories",
            bycategory: "k"
        },
        {
            id: 45,
            width: 10,
            height: 4,
            name: "KARNIZ",
            image: "/assets/images/IMG_K3.jpg",
            type: "accessories",
            bycategory: "k"
        },
        {
            id: 46,
            width: 10,
            height: 4,
            name: "KARNIZ",
            image: "/assets/images/IMG_K7.jpg",
            type: "accessories",
            bycategory: "k"
        },
        {
            id: 47,
            width: 10,
            height: 4,
            name: "KARNIZ",
            image: "/assets/images/IMG_K8.jpg",
            type: "accessories",
            bycategory: "k"
        },
        {
            id: 47,
            width: 10,
            height: 4,
            name: "KARNIZ",
            image: "/assets/images/IMG_K8.jpg",
            type: "accessories",
            bycategory: "k"
        },
        {
            id: 47,
            width: 10,
            height: 4,
            name: "KARNIZ",
            image: "/assets/images/IMG_K8.jpg",
            type: "accessories",
            bycategory: "k"
        },
        {
            id: 48,
            width: 10,
            height: 4,
            name: "KURJUVA",
            image: "/assets/images/IMG_KU1.jpg",
            type: "accessories",
            bycategory: "ku"
        },
        {
            id: 49,
            width: 10,
            height: 4,
            name: "KURJUVA",
            image: "/assets/images/IMG_KU3.jpg",
            type: "accessories",
            bycategory: "ku"
        },
        {
            id: 50,
            width: 10,
            height: 4,
            name: "KURJUVA",
            image: "/assets/images/IMG_KU7.jpg",
            type: "accessories",
            bycategory: "ku"
        },
        {
            id: 51,
            width: 10,
            height: 4,
            name: "KURJUVA",
            image: "/assets/images/IMG_KU15.jpg",
            type: "accessories",
            bycategory: "ku"
        },
        {
            id: 52,
            width: 10,
            height: 4,
            name: "MAGNIT",
            image: "/assets/images/IMG_M1.jpg",
            type: "accessories",
            bycategory: "m"
        },
        {
            id: 53,
            width: 10,
            height: 4,
            name: "MAGNIT",
            image: "/assets/images/IMG_M2.jpg",
            type: "accessories",
            bycategory: "m"
        },
        {
            id: 54,
            width: 10,
            height: 4,
            name: "MAGNIT",
            image: "/assets/images/IMG_M11.jpg",
            type: "accessories",
            bycategory: "m"
        },
        {
            id: 55,
            width: 10,
            height: 4,
            name: "MAGNIT",
            image: "/assets/images/IMG_M12.jpg",
            type: "accessories",
            bycategory: "m"
        },
        {
            id: 56,
            width: 10,
            height: 4,
            name: "PLANKA",
            image: "/assets/images/IMG_P1.jpg",
            type: "accessories",
            bycategory: "p"
        },
        {
            id: 57,
            width: 10,
            height: 4,
            name: "PLANKA",
            image: "/assets/images/IMG_P2.jpg",
            type: "accessories",
            bycategory: "p"
        },
        {
            id: 58,
            width: 10,
            height: 4,
            name: "PLANKA",
            image: "/assets/images/IMG_P3.jpg",
            type: "accessories",
            bycategory: "p"
        },
        {
            id: 59,
            width: 10,
            height: 4,
            name: "PLANKA",
            image: "/assets/images/IMG_P4.jpg",
            type: "accessories",
            bycategory: "p"
        },
        {
            id: 60,
            width: 10,
            height: 4,
            name: "PLANKA",
            image: "/assets/images/IMG_P5.jpg",
            type: "accessories",
            bycategory: "p"
        },

        // {
        //     id: 1,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='kitchen' />,
        //     image: "/assets/images/AP_1(1).JPG",
        //     type: "room",
        //     bycategory: "ap"
        // },
        // {
        //     id: 2,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='livingroom' />,
        //     image: "/assets/images/2p.png",
        //     type: "room",
        //     bycategory: "ap"
        // },
        // {
        //     id: 3,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='livingroom' />,
        //     image: "/assets/images/2p.png",
        //     type: "room",
        //     bycategory: "ap"
        // },
        // {
        //     id: 4,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='bedroom' />,
        //     image: "/assets/images/3p.png",
        //     type: "room",
        //     bycategory: "ap"
        // },
        // {
        //     id: 5,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='kitchen' />,
        //     image: "/assets/images/1p.png",
        //     type: "room"
        // },
        // {
        //     id: 6,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='livingroom' />,
        //     image: "/assets/images/2p.png",
        //     type: "room"
        // },
        // {
        //     id: 7,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='livingroom' />,
        //     image: "/assets/images/2p.png",
        //     type: "room"
        // },
        // {
        //     id: 8,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='bedroom' />,
        //     image: "/assets/images/3p.png",
        //     type: "room"
        // },
        // {
        //     id: 9,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='childrenroom' />,
        //     image: "/assets/images/4p.png",
        //     type: "accessories"
        // },
        // {
        //     id: 10,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='childrenroom' />,
        //     image: "/assets/images/4p.png",
        //     type: "accessories"
        // },
        // {
        //     id: 11,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='livingroom' />,
        //     image: "/assets/images/4p.png",
        //     type: "accessories"
        // },
        // {
        //     id: 12,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='childrenroom' />,
        //     image: "/assets/images/3p.png",
        //     type: "accessories"
        // },
        // {
        //     id: 13,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='childrenroom' />,
        //     image: "/assets/images/4p.png",
        //     type: "type"
        // },
        // {
        //     id: 14,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='childrenroom' />,
        //     image: "/assets/images/4p.png",
        //     type: "type"
        // },
        // {
        //     id: 15,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='livingroom' />,
        //     image: "/assets/images/4p.png",
        //     type: "type"
        // },
        // {
        //     id: 16,
        //     width: 10,
        //     height: 4,
        //     name: <TRANSLATE text='childrenroom' />,
        //     image: "/assets/images/4p.png",
        //     type: "type"
        // },
    ]


    const types = [
        {
            id: 1,
            name: <TRANSLATE text='types1' />,
            type: "room",
        },
        {
            id: 3,
            name: <TRANSLATE text='types2' />,
            type: "type"
        },
        {
            id: 2,
            name: <TRANSLATE text='types3' />,
            type: "accessories"
        },
    ]

    const bycategories = ['be', 'ka'];

    // const [toshow, setToShow] = useState<any>([{
    //     id: 1,
    //     width: 10,
    //     height: 4,
    //     name: "BESEDKA",
    //     image: "/assets/images/IMG_BE20.jpg",
    //     type: "room",
    //     bycategory: "be"

    // }])

    const toShow = [
        {
            id: 1,
            width: 10,
            height: 4,
            name: "BESEDKA",
            image: "/assets/images/IMG_BE20.jpg",
            type: "room",
            bycategory: "be"

        },
        {
            id: 6,
            width: 10,
            height: 4,
            name: "YOTOQXONA",
            image: "/assets/images/IMG_KA1.jpg",
            type: "room",
            bycategory: "ka"

        },
        {
            id: 7,
            width: 10,
            height: 4,
            name: "OSHXONA",
            image: "/assets/images/IMG_O1.jpg",
            type: "room",
            bycategory: "o"

        },
        {
            id: 10,
            width: 10,
            height: 4,
            name: "ZAL",
            image: "/assets/images/IMG_XO1.jpg",
            type: "room",
            bycategory: "xo"

        },
        {
            id: 12,
            width: 10,
            height: 4,
            name: "XOL",
            image: "/assets/images/IMG_XO3.jpg",
            type: "room",
            bycategory: "h"

        },
        {
            id: 19,
            width: 10,
            height: 4,
            name: "CLASSIC",
            image: "/assets/images/IMG_KL1.jpg",
            type: "type",
            bycategory: "kl"

        },
        {
            id: 22,
            width: 10,
            height: 4,
            name: "HI TECH",
            image: "/assets/images/IMG_NE1.jpg",
            type: "type",
            bycategory: "ne"
        },
        {
            id: 24,
            width: 10,
            height: 4,
            name: "NEO HI TECH",
            image: "/assets/images/IMG_NEO2.jpg",
            type: "type",
            bycategory: "neo"
        },
        {
            id: 29,
            width: 10,
            height: 4,
            name: "RIMSKIY",
            image: "/assets/images/IMG_RI1.jpg",
            type: "type",
            bycategory: "ri"
        },
        {
            id: 31,
            width: 10,
            height: 4,
            name: "BOBON",
            image: "/assets/images/IMG_B16.jpg",
            type: "accessories",
            bycategory: "b"
        },
        {
            id: 35,
            width: 10,
            height: 4,
            name: "DEREJATEL",
            image: "/assets/images/IMG_D1.jpg",
            type: "accessories",
            bycategory: "d"
        },
        {
            id: 44,
            width: 10,
            height: 4,
            name: "KARNIZ",
            image: "/assets/images/IMG_K2.jpg",
            type: "accessories",
            bycategory: "k"
        },
        {
            id: 48,
            width: 10,
            height: 4,
            name: "KURJUVA",
            image: "/assets/images/IMG_KU1.jpg",
            type: "accessories",
            bycategory: "ku"
        },
        {
            id: 52,
            width: 10,
            height: 4,
            name: "MAGNIT",
            image: "/assets/images/IMG_M1.jpg",
            type: "accessories",
            bycategory: "m"
        },
        {
            id: 56,
            width: 10,
            height: 4,
            name: "PLANKA",
            image: "/assets/images/IMG_P1.jpg",
            type: "accessories",
            bycategory: "p"
        }
    ]
    
    const LANGUAGE: any = localStorage.getItem('language');
    const [type, setType] = useState<string>('room');
    const [category, setCategory] = useState<any>([]);
    let [count, setCount] = useState<number>(4);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setCategory(toShow.filter(value => value.type === type));
    }, [type])

    return (
        <I18nProvider locale={LANGUAGE ? LANGUAGE : LOCALES.UZBEK}>
            <div className={styles.products} id="products">
                <div className={styles.container}>
                    <div className={styles.products_overall} >
                        <TITLE title={<TRANSLATE text='products' />} />
                        <div className={styles.products_container_choice}>

                            <div className={styles.products_container_btns}>
                                {types && types.map(value => {
                                    return (
                                        <div key={value.id} className={styles.products_btns} onClick={() => setType(value.type)}>{value.name}</div>
                                    )
                                })
                                }
                            </div>

                            <div className={styles.products_container_category}>
                                {category && category.slice(0, count >= category.length ? count = category.length : count).map((value: any) => {
                                    return (
                                        <Link to={'/category'} className={styles.products_link}>
                                            <div className={styles.products_card} key={value.id} onClick={() => dispatch(post(products.filter((v: any) => v.bycategory == value.bycategory)))}>
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
        </I18nProvider >
    )
}

export default PRODUCTS;