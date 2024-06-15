import styles from "./AboutBank.module.css"
import Button from "../components/Buttons/Button";
import debetCard from "../assets/debetCard.png";
import creditCard from "../assets/creditCard.png"
import style from "../styles/common.module.css";

export default function AboutBank() {
    return (
        <div className={style.container}>
            <div className={styles.mainAboutBank}>
                <div className={styles.aboutBank}>
                    <h1 className={styles.title}> Кто ищет - тот всегда найдет! </h1>
                    В мире онлайн-заработков часто встречаются две крайние оппозиции: с одной стороны – небольшие,
                    но стабильные доходы, а с другой – высокие, но скрывающие за собой риски и последствия
                    (обман, мошенничество, пожалуйста будьте внимательны)
                    <br/>
                    <br/>
                    Альфа-Банк на мой взгляд занимает здесь золотую середину.
                    Когда я искал возможности для дохода, я решил попробовать зарабатывать,
                    просто рекомендуя финансовые продукты Альфа Банка своим друзьям, коллегам, знакомым. Именно тогда я обнаружил, что Альфа Банк предлагает
                    не только удобные и выгодные услуги, но и создает беспрецедентные условия для тех,
                    кто хочет расширить свои финансовые горизонты.
                    <br/>
                    <br/>

                    Я узнал, что можно не только рекомендовать дебетовые и кредитные карты,
                    но и стать полноценным партнером банка, привлекая агентов, которые в свою
                    очередь создают дополнительный доход. Это открыло перед мной новые, возможности,
                    позволив увеличить свои финансовые возможности и преобразовать
                    мою деятельность в стабильный и перспективный источник прибыли.

                    <div className={styles.mainBtnAlfa}>
                        <Button styles={styles.btnAlfa} href="https://ag.alfabank.ru/ref/410883" text="Хочу стать партнером"/>
                    </div>
                </div>
            </div>
            <div className={styles.recommendations}>
                <h2 className={styles.titleRec}>Как зарабатывать и что рекомендовать?</h2>
                <span className={styles.subTitle}> Рекомендуйте продукты банка вашим знакомым <span style={{fontWeight: "bold"}}>по вашей
                    уникальной ссылке.</span> <br/>
                    Набирая новых агентов, воспользуйтесь реферальной программой,
                    которая обеспечит вас дополнительными доходами от каждого нового клиента, который начнет путь с Вас.
                    Все интересующие вопросы, можно задать в  <a href="#" style={{fontWeight: 700, textDecoration: "none", color: "#C03A1B",}}>нашем телеграмм канале</a>
                </span>
                <div className={styles.recBlock}>
                    <div className={styles.cardDebitRec}>
                        <div className={styles.cardRec_section}>
                            <div className={styles.cardRec_name}>Дебетовая <br/> Альфа-карта</div>
                            <img className={styles.imgCard} src={debetCard} alt="Дебетовая Альфа-карта" />
                        </div>
                        <div>
                            <Button styles={styles.actionAlfa}
                                    href="https://xplatform.alfabank.ru/universal-dc-form-web-ui/msv-questionnaire/offer?utm=DC-msv_410883_3857468_utm_source=alfapartners_utm_medium=msv_utm_term=DC-msv_utm_campaign=410883_utm_content=alfapartners_msv_DC-msv_410883_3857468"
                                    text="Заказать дебетовую карту"
                            />
                        </div>
                    </div>
                    <div className={styles.cardCreditRec}>
                        <div className={styles.cardRec_section}>
                            <div className={styles.cardRec_name}>Кредитная карта <br/> Целый год без %</div>
                            <img className={styles.imgCard} src={creditCard} alt="Кредитная Альфа-карта" />
                        </div>
                        <div>
                            <Button styles={styles.actionAlfa} href="https://alfabank.ru/get-money/credit-cards/land/365-days-partners/?platformId=alfapartners_msv_CC-365_410883_3857473&utm_source=alfapartners&utm_medium=msv&utm_term=CC-365&utm_campaign=410883&utm_content=alfapartners_msv_CC-365_410883_3857473"
                                    text="Заказать кредитную карту"
                            />
                        </div>
                    </div>
                    <div className={styles.cardCashRec}>
                        <div className={styles.cardRec_section}>
                            <div className={styles.cardRec_name}>Кредит наличными <br/> на любые цели</div>
                            <img className={styles.imgCard} src={creditCard} alt="от 4% кредит наличными" />
                        </div>
                        <div>
                            <Button styles={styles.actionAlfa} href="https://alfabank.ru/get-money/credit/credit-cash-adv/step1/?platformId=alfapartners_msv_PIL-PIL_410883_3857475&utm_source=alfapartners&utm_medium=msv&utm_term=PIL-PIL&utm_campaign=410883&utm_content=alfapartners_msv_PIL-PIL_410883_3857475"
                                    text="Получить кредит наличными"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}