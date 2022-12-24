import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {GiHamburgerMenu} from 'react-icons/gi' 
import styles from  '../../styles/navbar.module.css'

const Navbar = () =>{
    const router = useRouter();
    const [dropDown,setDropDown] = useState(false);
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContain}>
                <div className={styles.logo}>
                    <p>DEEPAK</p>
                </div>
                <div className={styles.navbarList}>
                    <div>
                        <Link href={'/'}>HOME</Link>
                    </div>
                    <div>
                        <Link href={'/about'}>ABOUT</Link>
                    </div>
                    <div>
                        <Link href={'/project'}>PROJECTS</Link>
                    </div>
                    <div>
                        <Link href={'/about'}>CONTACT</Link>
                    </div>
                </div>
                <div className={styles.hamburger} onClick={()=>setDropDown(!dropDown)}>
                    <GiHamburgerMenu className={styles.hamburgerIcon}/>
                </div>
            </div>
            <div className={ dropDown?styles.dropDownActive:styles.dropDown}>
                <div className={styles.linkContainer}>
                    <Link href={'/'}>HOME</Link>
                </div>
                <div className={styles.linkContainer}>
                    <Link href={'/about'}>ABOUT</Link>
                </div>
                <div className={styles.linkContainer}>
                    <Link href={'/project'}>PROJECTS</Link>
                </div>
                <div className={styles.linkContainer}>
                    <Link href={'/about'}>CONTACT</Link>
                </div>
            </div>
            <div className={styles.title}>
                    {
                        router.pathname === '/' ? (
                            <h1>
                                WELCOME TO MY <br/> PORTFOLIO.
                            </h1>
                        ):''
                    }
                    {
                        router.pathname === '/about' ? (
                            <h1>
                                ABOUT ME.
                            </h1>
                        ):''
                    }
                    {
                        router.pathname === '/project' ? (
                            <h1>
                                MY PROJECTS.
                            </h1>
                        ):''
                    }
                    {
                        router.pathname === '/contact' ? (
                            <h1>
                                CONTACT ME.
                            </h1>
                        ):''
                    }
            </div>
        </div>
    )
}

export default Navbar