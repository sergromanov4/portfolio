import React from 'react';

import Wrapper from 'components/Wrapper';
import BlockHeader from 'components/BlockHeader';

import PROJECTS from 'constants/projects';

import ProjectCard from './components/ProjectCard';

import styles from './Projects.scss';

const Projects: React.FC = () => {
    return (
        <div className={styles.projects}>
            <Wrapper>
                <BlockHeader
                    title="getProjects"
                />
                <div className={styles.projects__list}>
                    {PROJECTS.map((item, index) => (
                        <ProjectCard
                            isEven={!!(index % 2)}
                            name={item.name}
                            description={item.description}
                            link={item.link}
                        />
                    ))}

                    <div className={styles.projects__list__line} />
                </div>
            </Wrapper>
        </div>
    );
};

export default Projects;
