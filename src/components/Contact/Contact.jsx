// import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Get in touch with me!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt='Email icon'/>
                <a href='mailto:ravinder.jnv2019@gmail.com'>ravinder.jnv2019@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt='LinkedIn icon'/>
                <a href='https://www.linkedin.com/in/ravinder6183'>linkedin.com/ravinder6183</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt='Github icon'/>
                <a href='https://github.com/ravinder6183'>github.com/ravinder6183</a>
            </li>
        </ul>
    </footer>
  )
}
