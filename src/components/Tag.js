import React from 'react';
import styles from '../styles/Tag.module.css';
import { openInNewTab, openInSameTab } from '@/utils/openInNewTab';
import stylesFlex from '../styles/Flex.module.css'

const Tag = ({ first_text="", important_text="", after_text="", href="", openInNewTabArg = true, flex= true, fontSize="1rem", bigPadding=false }) => {
    return (
        <div 
            onClick={() => { openInNewTabArg?openInNewTab(href):openInSameTab(href) }} 
            className={`${styles.tagBorder} ${stylesFlex.flexCC} ${flex ? stylesFlex.flexOne : stylesFlex.flexCC} ${bigPadding ? styles.bigPaddingTag : styles.smallPaddingTag} ${styles.tagWidth}`}
            style={{ fontSize: fontSize }}>
            <p class={styles.noWrap}>{first_text} <strong>{important_text}</strong> {after_text} </p>
        </div>
    )
};

export default Tag;