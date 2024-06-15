import styles from "./Header.module.css";
import style from "../../styles/common.module.css"
import Button from "../Buttons/Button";


export default function Header() {
    return (
        <div className={styles.header}>
            <div className={style.container}>
                <div style={{paddingLeft: '16px'}}>
                    <h1 className={styles.title}>Как я зарабатываю <br/> с Альфа-банком?</h1>
                    <div className={styles.description}>Рекомендуя его услуги и привлекая агентов!</div>
                    <div className={styles.mainBtnAlfa}>
                        <Button styles={styles.btnAlfa} text="Стать агентом" href="https://ag.alfabank.ru/ref/410883"></Button>
                    </div>
                </div>
            </div>

        </div>
    )
}