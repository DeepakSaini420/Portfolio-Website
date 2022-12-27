import Head from 'next/head'
import { motion as m } from 'framer-motion'
import HomeCard from '../components/home-card/homeCard.component'
import SelectedWorkCard from '../components/selected-work-card/selectedWorkCard.component'
import styles from '../styles/Home.module.css'

export default function Home():JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <m.main 
        initial={{y:'100%'}}
        animate={{y:'0%'}}
        transition={{duration:0.75,ease:'easeInOut'}}
        exit={{opacity:1}}
      >
        <div className={styles.homeCardContainer}>
          <HomeCard type={"Web Development"} desc="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptate maiores libero possimus magni sequi laboriosam ducimus, totam, impedit, voluptatibus quaerat illo earum. Modi, soluta!"/>
          <HomeCard type={"Mobile Development"} desc="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptate maiores libero possimus magni sequi laboriosam ducimus, totam, impedit, voluptatibus quaerat illo earum. Modi, soluta!"/>
          <HomeCard type={"Machine Learning"} desc="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptate maiores libero possimus magni sequi laboriosam ducimus, totam, impedit, voluptatibus quaerat illo earum. Modi, soluta!"/>
        </div>
        <div className={styles.selectedWork}>
          <div className={styles.selectedWorkHead}>
            <div>
              <h1>Selected Work</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Odio voluptas, voluptatum <br/>nihil eligendi excepturi dolorum?</p>
            </div>
          </div>
          <div className={styles.workCard}>
            <m.div 
            initial={{x:'-60%',opacity:0,position:'relative'}}
            whileInView={{x:'0%',opacity:1}}
            transition={{duration:0.75,ease:'easeInOut'}}
            viewport={{once:true}}
            >
              <SelectedWorkCard project_name={"Blood-Donation-Website"}/>
            </m.div>
            <m.div
            initial={{x:'60%',opacity:0,position:'relative'}}
            whileInView={{x:'0%',opacity:1}}
            transition={{duration:0.75,ease:'easeInOut'}}
            viewport={{once:true}}
            >
              <SelectedWorkCard project_name={"Clothing-Website-NextJS-Frontend"}/>
            </m.div>
            <m.div
            initial={{x:'-60%',opacity:0,position:'relative'}}
            whileInView={{x:'0%',opacity:1}}
            transition={{duration:0.75,ease:'easeInOut'}}
            viewport={{once:true}}
            >
              <SelectedWorkCard project_name={"Paddy_Disease_Detection_Using_CNN"}/>
            </m.div>
            <m.div
            initial={{x:'60%',opacity:0,position:'relative'}}
            whileInView={{x:'0%',opacity:1}}
            transition={{duration:0.75,ease:'easeInOut'}}
            viewport={{once:true}}
            >
              <SelectedWorkCard project_name={"React-Projects"}/>
            </m.div>
          </div>
        </div>
      </m.main>
    </>
  )
}
