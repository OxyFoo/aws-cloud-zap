import React, { useState, useEffect } from 'react';
import styles from '../styles/Projects.module.css';
import stylesFlex from '../styles/Flex.module.css';
import { ClickableSvg } from './ClickableImage';
import { openInNewTab } from '@/utils/openInNewTab';
import Image from 'next/image';
import Tag from './Tag';
import Btn_Project from './Btn_Project';

const Projects = () => {

  const [projectsData, setProjectsData] = useState([]);
  const [uniqueTypes, setUniqueTypes] = useState([]);

  useEffect(() => {
    fetch('https://oxyfoo.com/pierre/source/data/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjectsData(data);
        setUniqueTypes([...new Set(data.map(project => project.subName))]);
        setProjectsFiltered(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        console.log("Data downloaded");
      });
  }, []);


  const [projectsFiltered, setProjectsFiltered] = useState(projectsData);
  const [activeFilters, setActiveFilters] = useState();

  const fontSize = "1.5rem"

  const filterProjects = (subName) => {
    if (subName === activeFilters) {
      setProjectsFiltered(projectsData);
      setActiveFilters("");
    } else {
      const filtered = projectsData.filter(project => project.subName === subName);
      setProjectsFiltered(filtered);
      setActiveFilters(subName);
    }
  };

  const formatDescription = (description) => {
    return { __html: description.replace(/\n/g, '<br />') };
  };

  return (
    <section id="projects">
      <h1 className="textRed1 centeredTitle">Projects</h1>

      <div className={`${stylesFlex.flexRowCC} ${stylesFlex.flexWrapper}`}>
        {uniqueTypes.map((subName, index) => (
          <h3
            onClick={() => { filterProjects(subName) }}
            className={`${stylesFlex.flexCC} ${styles.btnFilter} ${subName === activeFilters ? styles.btnFilterActive : "textWhite2"}`}
            key={index}>
            {subName}
          </h3>
        ))}
      </div>

      <div className={`${stylesFlex.flexWrapper} ${styles.projectsContainer}`} id="all-projects">
        <div className={` ${styles.blurred}`}></div>
        {projectsFiltered.map((project, index) => (
          <div className={styles.projectDiv} key={index}>
            <div style={{}}>

              <div style={{}}>
                <div className={stylesFlex.flexRowSC}>
                  <h2 className={`textWhite2 ${styles.projectTitle}`}>{project.title}</h2>
                </div>
              </div>
              <div style={{}}>
                <h3 className={"textWhite2"}>{project.subName}</h3>
                <p className={`textGray1 smallText ${styles.projectDescription}`} dangerouslySetInnerHTML={formatDescription(project.description)}></p>
              </div>
              <div style={{}}>
                <h3 className={"textWhite2"}>Technologies</h3>
                <div className={`${stylesFlex.flexRowSC} ${stylesFlex.flexWrapper} ${styles.projectTech}`}>
                  {project.languages.map((language, index) => (
                    <Tag first_text={language} key={index} href={project.languagesLink[index]} flex={false} bigPadding={true} fontSize={"0.9rem"} />
                  ))}
                  {project.libraries.map((library, index) => (
                    <Tag first_text={library} key={index} href={project.librariesLink[index]} flex={false} bigPadding={true} fontSize={"0.9rem"} />
                  ))}
                </div>
              </div>
              <div style={{}}>
                <div className={stylesFlex.flexRowSC}>
                  {project.demo && <Btn_Project text={"Demo"} href={project.demo} fontSize={fontSize} />}
                  {project.live && <Btn_Project text={"Test it"} href={project.live} fontSize={fontSize} />}
                  {project.code && <Btn_Project text={"Code"} href={project.code} fontSize={fontSize} />}
                  {project.iOS && <Btn_Project text={"iOS"} href={project.iOS} fontSize={fontSize} />}
                  {project.Android && <Btn_Project text={"Android"} href={project.Android} fontSize={fontSize} />}
                  {/*project.repo &&
                <ClickableSvg src="/images/icon/github.png" alt="Github logo" onClick={() => openInNewTab(project.repo)} size="50" fillColor={"#f9f9f9"} />
              */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
