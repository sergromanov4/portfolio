import { ISkillsItem } from 'interfaces/routers';

import reactIcon from 'icons/skills/react.svg';
import reduxIcon from 'icons/skills/redux.svg';
import reduxSagaIcon from 'icons/skills/redux-saga.svg';
import htmlIcon from 'icons/skills/html.svg';
import cssIcon from 'icons/skills/css.svg';
import sassIcon from 'icons/skills/sass.svg';
import javascriptIcon from 'icons/skills/javascript.svg';
import typescriptIcon from 'icons/typescript.svg';
import figmaIcon from 'icons/skills/figma.svg';
import gitIcon from 'icons/skills/git.svg';
import webpackIcon from 'icons/skills/webpack.svg';
import dockerIcon from 'icons/skills/docker.svg';
import nginxIcon from 'icons/skills/nginx.svg';

const SKILLS: ISkillsItem[] = [
    {
        name: 'React JS',
        icon: reactIcon
    },
    {
        name: 'Redux',
        icon: reduxIcon
    },
    {
        name: 'Redux Saga',
        icon: reduxSagaIcon
    },
    {
        name: 'HTML',
        icon: htmlIcon
    },
    {
        name: 'CSS',
        icon: cssIcon
    },
    {
        name: 'SASS',
        icon: sassIcon
    },
    {
        name: 'JavaScript',
        icon: javascriptIcon
    },
    {
        name: 'TypeScript',
        icon: typescriptIcon
    },
    {
        name: 'Figma',
        icon: figmaIcon
    },
    {
        name: 'Git',
        icon: gitIcon
    },
    {
        name: 'Webpack',
        icon: webpackIcon
    },
    {
        name: 'Docker',
        icon: dockerIcon
    },
    {
        name: 'Nginx',
        icon: nginxIcon
    }
];

export default SKILLS;
