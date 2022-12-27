import React from 'react'
import { motion as m } from 'framer-motion'
import { CiMonitor } from 'react-icons/ci'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { GiBrain } from 'react-icons/gi'
import styles from '../../styles/homeCard.module.css'

interface props{
    type:String,
    desc:String
}

const HomeCard = ({type,desc}:props)=>{
    return(
        <m.div
        initial={{y:'60%',opacity:0}}
        whileInView={{y:'0%',opacity:1}}
        transition={{duration:0.75,ease:'easeInOut',delay:0.2}}
        viewport={{once:true}}
        className={styles.HomeCard}>
            <div>
                {
                    type==='Web Development' ? <CiMonitor className={styles.Icon}/> : '' 
                }
                {
                    type==='Mobile Development' ? <HiOutlineDevicePhoneMobile className={styles.Icon}/> :''
                }
                {
                    type==='Machine Learning' ? <GiBrain className={styles.Icon}/>:''
                }
            </div>
            <div className={styles.cardHead}>
                <p>{type}</p>
            </div>
            <div className={styles.description}>
                <p>{desc}</p>
            </div>
        </m.div>
    )
}

export default HomeCard