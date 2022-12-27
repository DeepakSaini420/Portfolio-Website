import React from "react";
import { motion as m } from 'framer-motion'
import styles from '../styles/about.module.css'

const About = ():JSX.Element =>{
    return(
        <div className={styles.about}>
            <div className={styles.aboutBackContainer}>
                <div className={styles.aboutContainer}>
                    <m.div 
                    initial={{y:'-20%',opacity:0}}
                    whileInView={{x:'0%',opacity:1}}
                    transition={{duration:0.75,ease:'easeInOut'}}
                    viewport={{once:true}}
                    className={styles.aboutHead}>
                        <p>About Me</p>
                    </m.div>
                    <m.div
                    initial={{x:'-60%',opacity:0}}
                    whileInView={{x:'0%',opacity:1}}
                    transition={{duration:0.75,ease:'easeInOut'}}
                    viewport={{once:true}}
                    className={styles.aboutDesc}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, possimus quis? Ipsam consectetur maxime vel aliquid tenetur nesciunt eveniet, temporibus reiciendis incidunt dignissimos magni omnis dolorem consequatur quas explicabo mollitia ea voluptatibus.</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi quaerat delectus sit aliquam minima incidunt corrupti mollitia.</p>
                    </m.div>
                </div>
                <m.div
                initial={{x:'60%',opacity:0}}
                whileInView={{x:'0%',opacity:1}}
                transition={{duration:0.75,ease:'easeInOut'}}
                viewport={{once:true}}
                className={styles.imgContainer}>

                </m.div>
            </div>
        </div>
    )
}

export default About;