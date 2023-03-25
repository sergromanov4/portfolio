import { ICompanyItem } from 'interfaces/common';
import { ECompany } from './enum/ECommonTypes';

const COMPANIES: ICompanyItem[] = [
    {
        name: 'Kodep',
        postFrom: 'Intern',
        postTo: 'Junior',
        dateFrom: '02/2019',
        dateTo: '08/2019',
        imgType: ECompany.kodep,
        link: 'https://kodep.ru/en'
    },
    {
        name: 'Digital League',
        postFrom: 'Junior',
        postTo: 'Frontend lead',
        dateFrom: '08/2019',
        dateTo: 'Present',
        imgType: ECompany.league,
        link: 'https://www.digitalleague.ru/'
    }
];

export default COMPANIES;
