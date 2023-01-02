import { FC } from 'react'
import styles from "./index.module.scss"; 

interface Props{
    title: any
}

const TITLE = (props: Props) => {
    const {title} = props; 
    
    return (
        <div className={styles.title_container} >
            <h2 className={styles.title_title}>{title}</h2>
            <div className={styles.title_line}></div>
        </div>
    )
}

export default TITLE; 