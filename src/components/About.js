import React, { useEffect } from 'react';
import Image from 'next/image'
import styles from '../styles/About.module.css';
import Tag from './Tag';
import stylesFlex from '../styles/Flex.module.css'

const About = () => {

  const [counterNumber, setCounterNumber] = React.useState("Loading..");

  // Fetch a link to get the number of views and eddit the text with id counter-number : https://3k5hrt4uts4s7b24qxcughfwwa0rscay.lambda-url.eu-west-3.on.aws/
  async function updateCounter() {
    let response = await fetch("https://3k5hrt4uts4s7b24qxcughfwwa0rscay.lambda-url.eu-west-3.on.aws/");
    let data = await response.json();
    setCounterNumber(`${data} views so far ! `);
  }

  useEffect(() => {
    // Check if the function has been called before
    const isCalledBefore = localStorage.getItem("useEffectCalled");
    //console.log("Device knonw ?", isCalledBefore)
  
    if (!isCalledBefore) {
      updateCounter();
      // Mark the function as called for this device
      localStorage.setItem("useEffectCalled", "true");
    }
  }, []);

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
            {/*<Tag first_text="" important_text="Play" after_text="with me" href="https://www.insa-toulouse.fr/fr/index.html" />*/}
            <Tag first_text="Listen my" important_text="music" after_text="to focus" href="https://song.link/oxyfoo" />
            <Tag first_text="Turn your life into a " important_text="Game" after_text="(iOS)" href="https://apps.apple.com/fr/app/game-life/id1587486522" />
            <Tag first_text="Turn your life into a " important_text="Game" after_text="(android)" href="https://play.google.com/store/apps/details?id=com.gamelife&hl=fr&gl=US" />
            <Tag first_text="Meet" important_text="Game Life" after_text="community" href="https://discord.gg/FfJRxjNAwS" />
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
        <p>{counterNumber}</p>
      </div>
    </section>
  );
};

export default About;
