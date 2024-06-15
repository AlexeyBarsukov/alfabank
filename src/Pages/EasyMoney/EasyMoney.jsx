import styles from "../AboutBank.module.css";
import style from "../../styles/common.module.css";
import css from "./EasyMoney.module.css";

export default function EasyMoney() {
    return (
        <div className={style.container}>
            <div className={css.mainBlock}>
                <div className={css.easyMoneyMain}>
                    <h2 className={styles.titleRec}> Зарабатывать с Альфой — легко </h2>
                </div>
                <div className={css.steps}>
                    <div className={`${css.steps__item} ${css.alfaLogo}`}>
                        <div className={css.steps__item__number}>01</div>
                        <div className={css.steps__item__text}>Станьте партнером Альфа-банка</div>
                    </div>
                    <div className={`${css.steps__item} ${css.getMoney}`}>
                        <div className={css.steps__item__number}>02</div>
                        <div className={css.steps__item__text}>Привлекайте клиентов по вашей ссылке</div>
                    </div>
                    <div className={`${css.steps__item} ${css.money}`}>
                        <div className={css.steps__item__number}>03</div>
                        <div className={css.steps__item__text}> Получайте деньги за каждую продажу</div>
                    </div>
                </div>
            </div>

        </div>
    )
}