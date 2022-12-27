import React, { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import SelectedWorkCard from '../components/selected-work-card/selectedWorkCard.component';
import styles from '../styles/project.module.css'

const Project = ()=>{
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        async function load(){
            const response = await fetch('https://api.github.com/users/DeepakSaini420/repos');
            setProjects(await response.json());
        }
        load()
    },[])
    if(projects.length===0){
        return <div>Loading....</div>
    }
    return(
        <div className={styles.projectContainer}>
            <div className={styles.projects}>
                <div className={styles.projectHead}>
                    <h1>PROJECTS</h1>
                </div>
                <div className={styles.projectsHolder}>
                    {
                        projects.map(({name,id})=> {
                            if(name==='CyclUI' || name=='JWT-TOKEN_AUTHENTICATION' || name=='politicalPartiesAPI' || name=="Portfolio-Website"||name=="ST2-Backend" || name=="ST2-Frontend" || name=='Streaming-App') return ''
                            return <m.div initial={{y:'60%',opacity:0}}
                            whileInView={{y:'0%',opacity:1}}
                            transition={{duration:0.75,ease:'easeInOut',delay:0.2}}
                            viewport={{once:true}}><SelectedWorkCard project_name={name} key={id}/></m.div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Project;