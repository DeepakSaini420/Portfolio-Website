import React from 'react'
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
        <div className={styles.HomeCard}>
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
        </div>
    )
}

export default HomeCard