export interface IProject {
  title: string;
  goal: string;
  description: string[];
  images: string[];
  link: {
    title: string;
    url: string;
  };
  learnings: string;
}

export const Projects: IProject[] = [
  {
    title: 'Neo',
    goal: 'FitogramPro is a comprehensive studio management software which was written as most tech startup are, in a fast paced as long as it works ship it mentality. This led to many issues with deeply interconnected components, unpredictable bugs, and a slow development times. We wanted to transition from a monolithic codebase to a much more maintainable one and reduce the amount interdependancy found throughout the software. Moreover we had proven that over 60% of our users accessed the software via a mobile device and having a codebase rooted in the mobile first approach would ensure a higher quality experience overall',
    description: [
      'The first step was to create a Roadmap so all deparments could plan their resources accordingly. With Product and Management we agreed on a viable MVP which began to redirect all mobile users to our new NEO domain. From there we started developing core features from Pro and temporarily filling in the gaps with iFrames or custom Pro components adapted for Neo ',
      'Next up was architecture, as Neo would only be worked on by a few developers at first it was important to establish a solid foundation that would be easy to understand and follow as more devs joined in on the project. We discussed things like Folder structer, Component designs and naming practices. We decided to do away with the wrapper container practices we had in pro and create custom hooks if the component required special logic and import this from a seperate file, as well as deciding to only use named exports. Using MUI was a topic in these meetings as well and we agreed to use it but wrap each MUI component in our own wrapper which would give us the control to customize the output',
      'While this project is large and will still take a number of quarters to achieve completely we have so far been able to release a solid mobile MVP and have begun releasing desktop features as well thus allowing desktop users to access NEO bringing us closer to making the full switch away from our Pro software',
    ],
    images: ['neo-roadmap', 'neo-structure', 'neo'],
    link: { title: 'Fitogram', url: 'www.fitogram.de' },
    learnings:
      'This project has shown me how to plan a high level projects architecture from the ground up as well as exposed me to a ton of best practices and conventions I was not previously familiar with',
  },
  {
    title: 'Import Feature',
    goal: 'Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.',
    description: [
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    ],
    images: ['browser', 'browser', 'browser'],
    link: { title: 'Fitogram', url: 'www.fitogram.de' },
    learnings: '',
  },
  {
    title: 'Event Service Migration',
    goal: 'Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.',
    description: [
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    ],
    images: ['browser', 'browser', 'browser'],
    link: { title: 'Fitogram', url: 'www.fitogram.de' },
    learnings: '',
  },
  {
    title: 'Import Feature',
    goal: 'Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.',
    description: [
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    ],
    images: ['browser', 'browser', 'browser'],
    link: { title: 'Fitogram', url: 'www.fitogram.de' },
    learnings: '',
  },
  {
    title: 'Neo Events',
    goal: 'Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.',
    description: [
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    ],
    images: ['browser', 'browser', 'browser'],
    link: { title: 'Fitogram', url: 'www.fitogram.de' },
    learnings: '',
  },
  {
    title: 'Adamin Interface',
    goal: 'Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.',
    description: [
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    ],
    images: ['browser', 'browser', 'browser'],
    link: { title: 'Fitogram', url: 'www.fitogram.de' },
    learnings: '',
  },
  {
    title: 'UI Overhaul',
    goal: 'Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.',
    description: [
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    ],
    images: ['browser', 'browser', 'browser'],
    link: { title: 'Fitogram', url: 'www.fitogram.de' },
    learnings: '',
  },
  {
    title: 'Portfolio',
    goal: 'Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue.',
    description: [
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    ],
    images: ['browser', 'browser', 'browser'],
    link: { title: 'Adam Pauw', url: 'www.adampauw.com' },
    learnings: '',
  },
];
