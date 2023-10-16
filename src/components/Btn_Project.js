import React from 'react';
import styles from '../styles/Btn_Project.module.css';
import stylesFlex from '../styles/Flex.module.css'
import { openInNewTab, openInSameTab } from '@/utils/openInNewTab';


const Btn_Project = ({ text = "", href = "", openInNewTabArg = true, fontSize = "1.2rem" }) => {
    return (
        <div
            onClick={() => { openInNewTabArg ? openInNewTab(href) : openInSameTab(href) }}
            className={`textWhite2 ${stylesFlex.flexCC} ${styles.btn_project}`}>
            <h3>{text}</h3>
        </div>
    )
};

export default Btn_Project;