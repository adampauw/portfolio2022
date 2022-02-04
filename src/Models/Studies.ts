export interface IStudy {
  title: string;
  description: string[];
  image: string[];
  link: {
    title: string;
    url: string;
  }
}
  
export const Studies: IStudy[] = [
  {
    title: 'Harvard edX',
    description: ['desc1', 'desc2', 'desc4'],
    image: ['img1'],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Code Academy',
    description: ['desc1', 'desc2', 'desc4'],
    image: ['img1'],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Udemy',
    description: ['desc1', 'desc2', 'desc4'],
    image: ['img1'],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Career Foundry',
    description: ['desc1', 'desc2', 'desc4'],
    image: ['img1'],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'CodeCore',
    description: ['desc1', 'desc2', 'desc4'],
    image: ['img1'],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
]
