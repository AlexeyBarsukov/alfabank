import styles from "./Footer.module.css"
import style from "../../styles/common.module.css";

export default function Footer() {
    return (
        <>
            <div className={styles.main}>
                <div className={style.container}>
                    <div className={styles.footer}>
                        <div className={styles.blockLink}>
                            <a className={styles.link} rel="noreferrer" href="#">Телеграмм</a>
                            <a className={styles.link} rel="noreferrer" href="https://ag.alfabank.ru/ref/410883" target="_blank">Стать партнером</a>
                            <a className={styles.link} rel="noreferrer" href="https://xplatform.alfabank.ru/universal-dc-form-web-ui/msv-questionnaire/offer?utm=DC-msv_410883_3857468_utm_source=alfapartners_utm_medium=msv_utm_term=DC-msv_utm_campaign=410883_utm_content=alfapartners_msv_DC-msv_410883_3857468"
                            >
                                Заказать дебетовую карту</a>
                            <a className={styles.link} rel="noreferrer" target="_blank" href="https://alfabank.ru/get-money/credit-cards/land/365-days-partners/?platformId=alfapartners_msv_CC-365_410883_3857473&utm_source=alfapartners&utm_medium=msv&utm_term=CC-365&utm_campaign=410883&utm_content=alfapartners_msv_CC-365_410883_3857473"
                            >
                                Заказать кредитную карту</a>
                            <a className={styles.link} rel="noreferrer" target="_blank" href="https://alfabank.ru/get-money/credit/credit-cash-adv/step1/?platformId=alfapartners_msv_PIL-PIL_410883_3857475&utm_source=alfapartners&utm_medium=msv&utm_term=PIL-PIL&utm_campaign=410883&utm_content=alfapartners_msv_PIL-PIL_410883_3857475"
                            >
                                Заказать кредит наличными</a>
                        </div>
                        <div className={styles.logo}>
                            Данный сайт не является официальном сайтом Альфа-Банка. <br/>
                            Сайт рассказывает о возможностях и услугах банка
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}