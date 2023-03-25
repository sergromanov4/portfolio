import { IMenuItem, IContactsItem } from 'interfaces/common';

import linkedinIcon from 'icons/contacts/linkedin.svg';
import gitHubIcon from 'icons/contacts/github.svg';

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
        link: ''
    },
    {
        name: 'Github',
        icon: gitHubIcon,
        link: ''
    }
];

export {
    MENU_LIST,
    CONTACTS
};
