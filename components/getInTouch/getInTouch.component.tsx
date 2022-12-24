import React from "react";
import Link from "next/link";
import styles from '../../styles/getInTouch.module.css'

const GetInTouch = ():JSX.Element =>{
    return(
        <div className={styles.getInTouch}>
          <div className={styles.getInTouchCard}>
            <p className={styles.getInTouchHead}>Get Started</p>
            <p className={styles.getInTouchDesc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa.</p>
            <Link href={'contact'}>Get In Touch</Link>
          </div>
        </div>
    )
}

export default GetInTouch;