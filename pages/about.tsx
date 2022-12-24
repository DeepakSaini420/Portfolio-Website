import React from "react";
import styles from '../styles/about.module.css'

const About = ():JSX.Element =>{
    return(
        <div className={styles.about}>
            <div className={styles.aboutBackContainer}>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutHead}>
                        <p>About Me</p>
                    </div>
                    <div className={styles.aboutDesc}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, possimus quis? Ipsam consectetur maxime vel aliquid tenetur nesciunt eveniet, temporibus reiciendis incidunt dignissimos magni omnis dolorem consequatur quas explicabo mollitia ea voluptatibus.</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi quaerat delectus sit aliquam minima incidunt corrupti mollitia.</p>
                    </div>
                </div>
                <div className={styles.imgContainer}>

                </div>
            </div>
        </div>
    )
}

export default About;