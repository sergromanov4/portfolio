import React from 'react';
import { useInView } from 'react-intersection-observer';

import Animation from 'components/ui/Animation';
import Wrapper from 'components/Wrapper';
import BlockHeader from 'components/BlockHeader';

import PROJECTS from 'constants/projects';

import ProjectCard from './components/ProjectCard';

import styles from './Projects.scss';

const Projects: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    return (
        <div className={styles.projects}>
            <Wrapper>
                <Animation type="fade">
                    <BlockHeader
                        title="getProjects"
                    />
                </Animation>

                <div
                    ref={ref}
                    className={styles.projects__list}
                >
                    {PROJECTS.map((item, index) => (
                        <Animation
                            key={item.name}
                            type={index % 2 ? 'slideRight' : 'slideLeft'}
                            mapIndex={index}
                            delay={0.5}
                            customTrigger={inView}
                            className={styles.projects__wrapper}
                        >
                            <ProjectCard
                                isEven={!!(index % 2)}
                                name={item.name}
                                description={item.description}
                                link={item.link}
                            />
                        </Animation>
                    ))}

                    <div className={styles.projects__list__line} />
                </div>
            </Wrapper>
        </div>
    );
};

export default Projects;
