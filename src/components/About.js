import React from 'react';
import Image from 'next/image'
import styles from '../styles/About.module.css';
import Tag from './Tag';
import stylesFlex from '../styles/Flex.module.css'

const About = () => {
  return (
    <section className={styles.about}>
      <Image
        //src="https://oxyfoo.com/pierre/source/images/basic_portfolio/ball_cropped.png"
        src="./images/zap/purpleUp.png"
        alt="My Image"
        className={styles.meImage}
        width={200}
        height={200}
      />
      <div>
        <div className={styles.marginSides}>
          <h1 className={'textPurple1'}>Hey !</h1>
          <h1 className={`textWhite1`}>
            I&apos;m <span className={'textPurple1'}>Zap !</span>
          </h1>
          <h4 className={`textWhite1`}>
            I&apos;m a small creature created by <strong><a className={'textPurple1'} href="https://gerem.ca/Projects/">Gerem</a></strong> and <strong><a className={'textPurple1'} href="https://oxyfoo.com/pierre">Pierre</a></strong> and I&apos;m here because it&apos;s funnier with me !
          </h4>

          <div className={stylesFlex.flexWrapper}>
            <Tag first_text="" important_text="Play" after_text="with me" href="https://www.insa-toulouse.fr/fr/index.html" />
            <Tag first_text="Listen my" important_text="music" after_text="to focus" href="https://www.insa-toulouse.fr/fr/index.html" />
            <Tag first_text="Turn your life into a " important_text="Game" after_text="" href="https://www.insa-toulouse.fr/fr/index.html" />
            <Tag first_text="Meet" important_text="Game Life" after_text="community" href="https://www.insa-toulouse.fr/fr/index.html" />
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
