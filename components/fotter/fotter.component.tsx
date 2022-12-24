import React from "react";
import Link from "next/link";
import { BsGithub,BsLinkedin } from 'react-icons/bs'
import styles from '../../styles/fotter.module.css'

const Fotter = ():JSX.Element =>{
    return(
        <div className={styles.aboutUsContainer}>
            <div className={styles.aboutUs}>
                <div id={styles.about}>
                    <p>About Us</p>
                </div>
                <div id={styles.aboutDesc}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quidem mollitia rem id ad minus tempore consectetur, sint laudantium nulla sit earum commodi, veniam corporis.</p>
                </div>
            </div>
            <div className={styles.aboutUs}>
                <div id={styles.about}>
                    <p>Navigation</p>
                </div>
                <div className={styles.navigationList}>
                    <ul>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link href={'/portfolio'}>Portfolio</Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={ styles.socialMedia }>
                <div>
                    <Link href={'https://github.com/DeepakSaini420'}>
                        <BsGithub/>
                    </Link>
                </div>
                <div>
                    <Link href={'https://www.linkedin.com/in/deepak-saini-3790221bb'}>
                        <BsLinkedin/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Fotter