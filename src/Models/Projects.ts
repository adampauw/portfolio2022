import Browser from "../Assets/Images/browser.png"
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
    description: ['The goal of this project was to project a project worth projecting so that other projects could be projected. thus allowing more projects', 'desc2', 'desc4'],
    images: [Browser, Browser, Browser],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Event Service Migration',
    description: ['desc1', 'desc2', 'desc4'],
    images: [Browser, Browser, Browser],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Import Feature',
    description: ['desc1', 'desc2', 'desc4'],
    images: [Browser, Browser, Browser],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Neo',
    description: ['desc1', 'desc2', 'desc4'],
    images: [Browser, Browser, Browser],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Neo Events',
    description: ['desc1', 'desc2', 'desc4'],
    images: [Browser, Browser, Browser],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Adamin Interface',
    description: ['desc1', 'desc2', 'desc4'],
    images: [Browser, Browser, Browser],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'UI Overhaul',
    description: ['desc1', 'desc2', 'desc4'],
    images: [Browser, Browser, Browser],
    link: {title: 'Fitogram', url: 'www.fitogram.de'}
  },
  {
    title: 'Portfolio',
    description: ['desc1', 'desc2', 'desc4'],
    images: [Browser, Browser, Browser],
    link: {title: 'Adam Pauw', url: 'www.adampauw.com'}
  }
]
