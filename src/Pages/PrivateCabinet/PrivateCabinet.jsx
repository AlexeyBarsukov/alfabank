import styles from "../AboutBank.module.css";
import statistics from "../../assets/stasistics.png";
import pay from "../../assets/pay.png";
import rules from "../../assets/rules.png";
import ads from "../../assets/ads.png";
import css from "./PrivateCabinet.module.css";
import style from "../../styles/common.module.css";

export default function PrivateCabinet() {
    return (
        <>
            <div className={style.container}>
                <h1 className={styles.titleRec}>Для вас — удобный личный кабинет<br/> и все инструменты для работы</h1>
                <div style={{marginBottom: '3rem'}}>
                    <h1 className={css.title}>Статистика</h1>
                    <img style={{width:"100%"}} src={statistics} alt="статистика" />
                </div>
                <hr/>
                <div style={{marginBottom: '3rem'}}>
                    <h1 className={css.title}>Выплаты</h1>
                    <img style={{width:"100%"}} src={pay} alt="Выплаты" />
                </div>
                <hr/>
                <div style={{marginBottom: '3rem'}}>
                    <h1 className={css.title}>Правила</h1>
                    <img style={{width:"100%"}} src={rules} alt="Правила" />
                </div>
                <hr/>
                <div style={{marginBottom: '3rem'}}>
                    <h1 className={css.title}>Рекламные материалы</h1>
                    <img style={{width:"100%"}} src={ads} alt="Рекламные материалы" />
                </div>
            </div>
        </>
    )
}