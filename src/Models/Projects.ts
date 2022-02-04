export interface IProject {
  title: string;
  description: string[];
  images: string[];
  link: {
    title: string;
    url: string;
  }
}
  
export const Projects: IProject[] = [
  {
    title: 'Import Feature',
    description: ['desc1', 'desc2', 'desc4'],
    images: ['img1','img2','img3'],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Event Service Migration',
    description: ['desc1', 'desc2', 'desc4'],
    images: ['img1','img2','img3'],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Import Feature',
    description: ['desc1', 'desc2', 'desc4'],
    images: ['img1','img2','img3'],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Neo',
    description: ['desc1', 'desc2', 'desc4'],
    images: ['img1','img2','img3'],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Neo Events',
    description: ['desc1', 'desc2', 'desc4'],
    images: ['img1','img2','img3'],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Adamin Interface',
    description: ['desc1', 'desc2', 'desc4'],
    images: ['img1','img2','img3'],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'UI Overhaul',
    description: ['desc1', 'desc2', 'desc4'],
    images: ['img1','img2','img3'],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Portfolio',
    description: ['desc1', 'desc2', 'desc4'],
    images: ['img1','img2','img3'],
    link: {title: 'Adam Pauw', url: 'www.adampauw.com'}
  }
]
