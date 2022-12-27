import React, { useState } from "react";
import Link from "next/link";
import { motion as m } from 'framer-motion'
import { useRouter } from "next/router";
import {GiHamburgerMenu} from 'react-icons/gi' 
import styles from  '../../styles/navbar.module.css'

const Navbar = () =>{
    const router = useRouter();
    const [dropDown,setDropDown] = useState(false);
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContain}>
                <m.div 
                initial={{y:'30%',opacity:0}}
                animate={{y:'0%',opacity:1}}
                transition={{duration:1.1,ease:'easeInOut'}}
                exit={{opacity:0}}
                className={styles.logo}>
                    <Link href={'/'}>DEEPAK</Link>
                </m.div>
                <m.div 
                initial={{y:'30%',opacity:0}}
                animate={{y:'0%',opacity:1}}
                transition={{duration:1.1,ease:'easeInOut'}}
                exit={{opacity:0}}
                className={styles.navbarList}>
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
                        <Link href={'/contact'}>CONTACT</Link>
                    </div>
                </m.div>
                <div className={styles.hamburger} onClick={()=>setDropDown(!dropDown)}>
                    <GiHamburgerMenu className={styles.hamburgerIcon}/>
                </div>
            </div>
            <div className={ dropDown?styles.dropDownActive:styles.dropDown}>
                <div className={styles.linkContainer} onClick={()=>{setDropDown(false)}}>
                    <Link href={'/'}>HOME</Link>
                </div>
                <div className={styles.linkContainer} onClick={()=>{setDropDown(false)}}>
                    <Link href={'/about'}>ABOUT</Link>
                </div>
                <div className={styles.linkContainer} onClick={()=>{setDropDown(false)}}>
                    <Link href={'/project'}>PROJECTS</Link>
                </div>
                <div className={styles.linkContainer} onClick={()=>{setDropDown(false)}}>
                    <Link href={'/contact'}>CONTACT</Link>
                </div>
            </div>
            <m.div 
                className={styles.title}
                initial={{y:'30%',opacity:0}}
                animate={{y:'0%',opacity:1}}
                transition={{duration:1.1,ease:'easeInOut'}}
                exit={{opacity:0}}
            >
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
            </m.div>
        </div>
    )
}

export default Navbar