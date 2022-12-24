import React,{ useState } from "react";
import Image from "next/image";
import styles from '../../styles/selectedWorkCard.module.css'

const SelectedWorkCard = ():JSX.Element=>{
    const [contentStyle,setContentStyle] = useState(styles.contentContainer);
    const mouseIn = ()=>{
        setContentStyle(styles.activecontentContainer)
    }
    return (
        <div className={styles.selectedWorkCard} onMouseOver={mouseIn} onMouseLeave={()=>setContentStyle(styles.contentContainer)}>
            <div className={styles.imgCard}>
                <Image src={'https://images.unsplash.com/photo-1599328580087-15c9dab481f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80'} alt={"img.jpg"} width={250} height={250} />
            </div>
            <div className={contentStyle}>
                <p>Project Name Here</p>
            </div>
        </div>
    )
}

export default SelectedWorkCard