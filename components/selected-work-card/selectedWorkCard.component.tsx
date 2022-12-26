import React,{ useState } from "react";
import Image from "next/image";
import { imagesMap } from "../../utils/imgaes";
import styles from '../../styles/selectedWorkCard.module.css' 

const SelectedWorkCard = ({project_name}:{project_name:string}):JSX.Element=>{
    const [contentStyle,setContentStyle] = useState(styles.contentContainer);
    const mouseIn = ()=>{
        setContentStyle(styles.activecontentContainer)
    }
    const gitRedirect = ()=>{
        window.location.href = `https://github.com/DeepakSaini420/${project_name}`
    }
    return (
        <div className={styles.selectedWorkCard} onMouseOver={mouseIn} onMouseLeave={()=>setContentStyle(styles.contentContainer)} onClick={gitRedirect}>
            <div className={styles.imgCard}>
                <Image src={imagesMap[project_name]} alt={"img.jpg"} width={250} height={250} />
            </div>
            <div className={contentStyle}>
                <p>{project_name}</p>
            </div>
        </div>
    )
}

export default SelectedWorkCard