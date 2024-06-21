// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I&apos;m Ravinder</h1>
            <p className={styles.description}>I&apos;m a fullstack developer with 1 year of experince using React and NodeJS. Reach out if you&apos;d like to learn more.</p>
            <a className={styles.contactBtn} href='mailto:ravinder.jnv2019@gmail.com'>Contact me</a>
        </div>
        <img 
            className={styles.heroImg} 
            src={getImageUrl("hero/heroImage.png")} 
            alt='Hero image'
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
