import { ECompany } from 'constants/enum/ECommonTypes';

interface IMenuItem {
    name: string;
    link: string;
}

interface IContactsItem {
    name: string;
    link: string;
    icon: string;
}

interface ISkillsItem {
    name: string;
    icon: string;
}

interface ICompanyItem {
    name: string;
    postFrom: string;
    postTo: string;
    dateFrom: string;
    dateTo: string;
    link: string;
    imgType: ECompany,
}

export {
    IMenuItem,
    IContactsItem,
    ISkillsItem,
    ICompanyItem
};
