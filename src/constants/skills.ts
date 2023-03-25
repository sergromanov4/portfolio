import { ISkillsItem } from 'interfaces/common';

import reactIcon from 'icons/skills/react.svg';
import reduxIcon from 'icons/skills/redux.svg';
import reduxSagaIcon from 'icons/skills/redux-saga.svg';
import htmlIcon from 'icons/skills/html.svg';
import cssIcon from 'icons/skills/css.svg';
import sassIcon from 'icons/skills/sass.svg';
import javascriptIcon from 'icons/skills/javascript.svg';
import typescriptIcon from 'icons/typescript.svg';
import antdIcon from 'icons/skills/ant-design.svg';
import figmaIcon from 'icons/skills/figma.svg';
import gitIcon from 'icons/skills/git.svg';
import webpackIcon from 'icons/skills/webpack.svg';
import dockerIcon from 'icons/skills/docker.svg';
import nginxIcon from 'icons/skills/nginx.svg';

import angularIcon from 'icons/skills/angular.svg';
import ionicIcon from 'icons/skills/ionic.svg';
import railsIcon from 'icons/skills/rails.svg';
import mobxIcon from 'icons/skills/mobx.svg';
import materialuiIcon from 'icons/skills/materialui.svg';
import zeplinIcon from 'icons/skills/zeplin.svg';

import { ESkillsTypes } from './enum/ECommonTypes';

const SKILLS_MAIN: ISkillsItem[] = [
    {
        name: 'React JS',
        icon: reactIcon
    },
    {
        name: 'Redux | RTQ',
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
        name: 'Ant.Design',
        icon: antdIcon
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

const SKILLS_EXP: ISkillsItem[] = [
    {
        name: 'React Native',
        icon: reactIcon
    },
    {
        name: 'Angular 4',
        icon: angularIcon
    },
    {
        name: 'Ionic + Cordova',
        icon: ionicIcon
    },
    {
        name: 'Ruby on Rails',
        icon: railsIcon
    },
    {
        name: 'MobX',
        icon: mobxIcon
    },
    {
        name: 'Material UI',
        icon: materialuiIcon
    },
    {
        name: 'Zeplin',
        icon: zeplinIcon
    }
];

const mapSkillsTypesToValue: {
    [key in ESkillsTypes]: ISkillsItem[]
} = {
    [ESkillsTypes.main]: SKILLS_MAIN,
    [ESkillsTypes.exp]: SKILLS_EXP
};

export default mapSkillsTypesToValue;
