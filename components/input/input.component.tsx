import React from "react";
import styles from '../../styles/input.module.css'

const InputConmponent= ({inputName,isTextArea}:{inputName:String,isTextArea:boolean}):JSX.Element=>{
    return(
        <div className={styles.inputContainer}>
            <p>{inputName}</p>
            {
                isTextArea ? <textarea className={styles.input} rows={10}></textarea> : <input type={"text"} className={styles.input}/>
            }
        </div>
    )
}

export default InputConmponent