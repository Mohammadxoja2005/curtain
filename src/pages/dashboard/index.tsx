import { FC, useEffect, useState } from 'react';
import styles from "./index.module.scss";
import axios from "axios";

const DASHBOARD: FC = () => {
    const [data, setData] = useState([]);

    useEffect(() => { 
        try {
            axios.get('https://backend.grandshtor.uz/quote').then(res => {
                setData(res.data);
            })
        } catch(e) {
            console.log(e); 
        }
    }, [])

    return (
        <div className={styles.dashboard} >
            <div className={styles.container} >

                {data && data.map((value: any) => {
                    return (
                        <div className={styles.dash_overall} key={value.id}>
                            <div className={styles.dash_div} >{value.id}</div>
                            <div className={styles.dash_div} >{value.name}</div>
                            <div className={styles.dash_div} >{value.phone}</div>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}

export default DASHBOARD; 