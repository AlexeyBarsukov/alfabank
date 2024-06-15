import style from "./Button.module.css"

export default function Button({styles, text, href}) {
    return (
        <>
            <a href={href} className={`${style.button} ${styles}`} rel="noreferrer" target="_blank">{text}</a>
        </>
    )
}