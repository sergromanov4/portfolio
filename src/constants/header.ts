import { IMenuItem, IContactsItem } from 'interfaces/common';

import linkedinIcon from 'icons/contacts/linkedin.svg';
import gitHubIcon from 'icons/contacts/github.svg';
import emailIcon from 'icons/contacts/email.svg';

const MENU_LIST: IMenuItem[] = [
    {
        name: 'About',
        link: ''
    },
    {
        name: 'Skills',
        link: ''
    },
    {
        name: 'Projects',
        link: ''
    }
];

const CONTACTS: IContactsItem[] = [
    {
        name: 'Linkedin',
        icon: linkedinIcon,
        link: 'https://www.linkedin.com/in/sergei-romanov-231809244'
    },
    {
        name: 'Github',
        icon: gitHubIcon,
        link: 'https://github.com/sergromanov4/portfolio'
    },
    {
        name: 'email',
        icon: emailIcon,
        link: 'mailto:4romanov4@gmail.com'
    }
];

export {
    MENU_LIST,
    CONTACTS
};
