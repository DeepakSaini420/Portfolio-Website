import React from "react";
import InputConmponent from "../components/input/input.component";
import styles from '../styles/form.module.css'

const Contact = ():JSX.Element=>{
    return(
        <div className={styles.contact}>
            <div className={styles.formContainer}>
                <div className={styles.flexContainer}>
                    <div className={styles.flexItems}>
                        <InputConmponent inputName={"Name"} isTextArea={false}/>
                    </div>
                    <div className={styles.flexItems}>
                        <InputConmponent inputName={"Phone"} isTextArea={false}/>
                    </div>
                </div>
                <div className={styles.inputCt}>
                    <InputConmponent inputName={"Email"} isTextArea={false}/>
                </div>
                <div className={styles.inputCt}>
                    <InputConmponent inputName={"Send Message"} isTextArea={true}/>
                </div>
                <div className={styles.inputCt}>
                    <button className={styles.btn}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact