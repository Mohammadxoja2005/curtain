import { Fragment, useState, useEffect } from 'react'
import styles from "./index.module.scss";
import MAINLOGO from "../../assets/logos/mainlogo.png";
import MAINTEXT from "../../assets/logos/textlogo.png";
import PHONELOGO from "../../assets/logos/phonelogo.png";
import DOWNLOGO from "../../assets/logos/downlogo.png";
// router
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
// i18n
import { I18nProvider, LOCALES } from '../../i18n';
// translate 
import TRANSLATE from '../../i18n/translate';

interface props {
    bottom: number,
    position?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const SIDEBAR = (props: props) => {
    const { bottom, position } = props;
    const [open, setOpen] = useState<boolean>(false);
    console.log(position);

    const onSubmit = (): void => {
        setOpen(!open);
    }

    const LinkScroll = Scroll.Link;

    const LANGUAGE: any = localStorage.getItem('language');

    useEffect(() => {
        const li: any = document.querySelectorAll('#lichoose');
        const main: any = document.querySelector("#main");
        const lan: any = document.querySelector('#lan');
        const navbar: any = document.querySelector("#navbar");
        const navbarPhone: any = document.querySelector("#navbar_adaptive");
        const sticky = navbar.offsetTop;

        let count = 1;

        main.addEventListener('click', () => {
            count++

            if (count % 2 == 0) {
                lan.style.display = "block";
            }

            if (count % 2 == 1) {
                lan.style.display = "none";
            }


        })

        li.forEach((value: any) => {
            value.addEventListener('click', () => {
                localStorage.setItem('lan', value.innerText);
                main.innerText = value.innerText;
            })
        })

        window.addEventListener("scroll", () => {
            if (position == 'fixed') {
                if (window.scrollY >= 20) {
                    navbar.classList.add(styles.fixed);
                    navbarPhone.classList.add(styles.fixed);
                } else if (window.scrollY <= navbar.offsetTop) {
                    navbar.classList.remove(styles.fixed);
                    navbarPhone.classList.remove(styles.fixed);
                }
            } else {
                if (window.pageYOffset >= sticky) {
                    navbar.classList.add(styles.sticky);
                    navbarPhone.classList.add(styles.sticky);
                } else {
                    navbar.classList.remove(styles.sticky);
                    navbarPhone.classList.remove(styles.sticky);
                }
            }

        })

    }, [window.scrollY])

    return (
        <Fragment>
            <I18nProvider locale={LANGUAGE ? LANGUAGE : LOCALES.UZBEK}>
                <div className={styles.sidebar} style={{ marginBottom: `${bottom}px` }} id="navbar">
                    <div className={styles.container}>
                        <div className={styles.sidebar_logo_side} id={styles.bottom}>
                            <img src={MAINLOGO} />
                            <img src={MAINTEXT} />
                        </div>

                        <div className={styles.sidebar_menu_side} >

                            <ul className={styles.sidebar_links} >
                                <Link to="/" className={styles.sidebar_links_element}><TRANSLATE text='homepage' /></Link>
                                <LinkScroll to='products' spy={true} smooth={true} offset={50} duration={500} className={styles.sidebar_links_element}><TRANSLATE text='allkinds' /> </LinkScroll>
                            </ul>

                            <div className={styles.sidebar_info}>

                                <div className={styles.sidebar_phone}>
                                    <img className={styles.sidebar_phone_img} src={PHONELOGO} />
                                    <p className={styles.sidebar_phone_num}>(99)655-55-50</p>
                                </div>

                                <div className={styles.sidebar_lan}>
                                    <ul className={styles.select}>
                                        <li className={styles.mainText} id="main">{localStorage.getItem('lan') ? localStorage.getItem('lan') : 'UZ'}<img src={DOWNLOGO} className={styles.logo} /></li>
                                        <div className={styles.lan} id="lan">
                                            <li className={styles.lan_li} id='lichoose' onClick={() => { localStorage.setItem('language', LOCALES.UZBEK), window.location.reload() }} >UZ</li>
                                            <li className={styles.lan_li} id='lichoose' onClick={() => { localStorage.setItem('language', LOCALES.RUSSIAN), window.location.reload() }} >RU</li>
                                            <li className={styles.lan_li} id='lichoose' onClick={() => { localStorage.setItem('language', LOCALES.ENGLISH), window.location.reload() }} >EN</li>
                                        </div>
                                    </ul>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.sidebar_adapt} style={{ marginBottom: `${bottom}px` }} id="navbar_adaptive">

                    <div className={styles.sidebar_adapt_main} >
                        <div className={styles.container}>
                            <div className={styles.sidebar_logo_side} >
                                <img className={styles.sidebar_mainlogo} src={MAINLOGO} />
                                <img className={styles.sidebar_maintext} src={MAINTEXT} />
                            </div>
                            <div onClick={onSubmit} >
                                <div className={styles.sidebar_burger}>

                                </div>
                            </div>
                        </div>
                    </div>

                    {open ? <div className={styles.justline}>
                        <div className={styles.sidebar_container}>
                            <ul className={styles.sidebar_links}>
                                <Link to="/" className={styles.sidebar_links_element}>Bosh sahifa</Link>
                                <Link to="/category" className={styles.sidebar_links_element}>Barcha turdagi </Link>
                            </ul>

                            <div className={styles.sidebar_lan}>
                                <div className={styles.sidebar_lan_bar} onClick={() => { localStorage.setItem('language', LOCALES.UZBEK), window.location.reload() }}>UZ</div>
                                <div className={styles.sidebar_lan_bar} onClick={() => { localStorage.setItem('language', LOCALES.RUSSIAN), window.location.reload() }}>RU</div>
                                <div className={styles.sidebar_lan_bar} onClick={() => { localStorage.setItem('language', LOCALES.ENGLISH), window.location.reload() }}>EN</div>
                            </div>

                        </div>
                    </div> : null}

                </div>
            </I18nProvider>

        </Fragment>
    )
}

export default SIDEBAR;

