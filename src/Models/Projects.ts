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
    title: 'Neo (FE rewrite)',
    goal: 'Our objective was to completely re-write our front end from scratch in a project called Neo Pro. FitogramPro is a comprehensive studio management software which was written as most tech startup are, in a fast paced as long as it works ship it mentality. This led to many issues with deeply interconnected components, unpredictable bugs, and a slow development times. We wanted to transition from a monolithic codebase to a much more maintainable one and reduce the amount interdependancy found throughout the software. Moreover we had proven that over 60% of our users accessed the software via a mobile device and having a codebase rooted in the mobile first approach would ensure a higher quality experience overall',
    description: [
      'The first step was to create a Roadmap so all deparments could plan their resources accordingly. With Product and Management we agreed on a viable MVP which began to redirect all mobile users to our new NEO domain. From there we started developing core features from Pro and temporarily filling in the gaps with iFrames or custom Pro components adapted for Neo',
      'Next up was architecture, as Neo would only be worked on by a few developers at first it was important to establish a solid foundation that would be easy to understand and follow as more devs joined in on the project. We discussed things like Folder structer, Component designs and naming practices. We decided to do away with the wrapper container practices we had in pro and create custom hooks if the component required special logic and import this from a seperate file, as well as deciding to only use named exports. Using MUI was a topic in these meetings as well and we agreed to use it but wrap each MUI component in our own wrapper which would give us the control to customize the output',
      'While this project is large and will still take a number of quarters to achieve completely we have so far been able to release a solid mobile MVP and have begun releasing desktop features as well thus allowing desktop users to access NEO bringing us closer to making the full switch away from our Pro software',
    ],
    images: ['neo-roadmap', 'neo-structure', 'neo'],
    link: { title: 'Fitogram', url: 'www.neo.fitogram.pro' },
    learnings:
      'This project has shown me how to plan a high level projects architecture from the ground up as well as exposed me to a ton of best practices and conventions I was not previously familiar with',
  },
  {
    title: 'Event Service Migration',
    goal: 'For context Fitogram pro is a studio managment software which in 2020 we decided to re write into a project called Neo (see NEO(FE rewrite)). Our backend team had also decided to break up the application from a monolith to a group of micro services, Events (eg.classes, courses) were one such service. Naturally this had to be coordinated with the front-end so that we could serve the customers their event data uninterupted',
    description: [
      'Our first task was to identify every call across three seperate front ends which was related to events which we consolodated into an epic and split into sections based on different screens within the software and their importance. The nice thing about this is approach was that with every completed screen the next ones would get progressively easier since many functions that called an event API were shared across screens otherewise we would refactor them to be more universal',
      'A wonderful side effect of this migration was it gave us the time to gather our calls together vs each component fending for itself and calling what it needs upon mounting. What I mean with that is we were able to create a base of very commonly used event calls and turn them into helper functions that could be used throughout the software and if, heaven forbid, we need to do another event service migration it would be as simple as changing a handful of endpoints in one file and maybe finding the rare edgecase to adjust. You can see here an example of a request function used throughout the software which compared to before is a much more concise and reliable method and, when paired with our new redux event store with its selections and actions, results in less calls overall being made and thus a more responsive software',
      'Overall this migration was a large success. Our software became more responsive, load times decreased and the codebase became measurably smaller. Within our first couple weeks of releasing the migrated components we saw bug tickets and load times decrease and our NPS score rise. Of course other teams were migrating to other micro services as well which aided in the overall prosperity enjoyed from this project',
    ],
    images: ['event-migrate1', 'event-migrate2', 'event-migrate3'],
    link: { title: 'Fitogram', url: 'www.fitogram.de' },
    learnings:
      'Oddly enough up until this point I had very few tasks related to APIs and when we were told this is our next big task I was a bit nervous. Getting into this task however I learned a ton about how they work and how simple they actually are and it gave me a confidence that I have carried forward to subsequent projects',
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
    title: 'Import Feature',
    goal: 'For context Fitogram pro is a studio managment software which in 2020 we decided to re write into a project called Neo (see NEO(FE rewrite)). New customers coming from competing softwares needed a way to import all their data into our software as opposed to entering it manually wich would be very time consuming and potentially cause them to change their mind. This import includes things such as their Customers, Contracts and Credit passes and will save our customer care team hours of time',
    description: [
      'As an MVP we decided to focus solely on a Customer import but build it in such a way that adding other types of imports would automatically adapt to the data without additional coding. Initialy it would be released only for our customer success team to try out on our legacy software before being released to everyone on Neo (see NEO (FE rewrite)). General validation of the excel sheet provided by the customer was done on the Back-end where they created a self contained service for this feature. Once the APIs were ready I added the feature to Pro which was essentially a basic excel template download and upload so we could test the functionality in house. This went well and after working out a few small kinks we moved on to the Neo implementation',
      'This is where the feature became more front end involved as it would guide the user via a dedicated interface mainly utilizing an interactive table representing their customer data but also with a status section and a draft import section. Firstly I researched applicable table librarys knowing that I would need a few features such as filtering, search, pagination and most importantly the ability to add custom table cells eg. JSX elements and I settled on mui-datatables which was ideal because we already use MUI in our software for UI component. I also had to parse through the data returned by our new endpoint and create the appropriate titles and column headers based on it as well as validate for errors and filter for errors',
      'Lastly we needed to show the progress of an import as well as a history of previous and failed imports. If an import failed you would have the chance to review it and fix the errors before trying the upload again. Every import was given a unique ID which would differentiate and catalogue all the different test also every user was able to retrieve a list of all their imports via a GET call using their user ID. We displayed these via this call and were able to evaluate the test status data via a custom hook so that we could display the progress, status, import date. Again everything written is completely adaptive so when the other import types are finished being developed on the back end they will work out of the box on our front end',
    ],
    images: ['neo-import1', 'neo-import2', 'neo-import3'],
    link: { title: 'Fitogram', url: 'www.neo.fitogram.pro' },
    learnings:
      'This project taught me how to parse through large amounts of data and also to design more elegantly reusable components. However most important thing I learned on this project was that I am capable of doing things I didnt think I was, many of the concepts and skills involved were brand new to me and since the other front end dev on my team was on holidays for a majority of this feature I had to dig deep and grow as a developer. So while this may not be the softwares largest or most used feature it was something I am proud I was such a big part of',
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
