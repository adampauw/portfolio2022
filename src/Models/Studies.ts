export interface IStudy {
  title: string;
  description: string[];
  image: string[];
  link: {
    title: string;
    url: string;
  };
}

export const Studies: IStudy[] = [
  {
    title: 'Harvard edX',
    description: [
      'Harvard Universitys introduction to the intellectual enterprises of computer science and the art of programming for majors and non-majors alike, with or without prior programming experience. An entry-level course taught by David J. Malan, CS50x teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Languages include C, Python, SQL, and JavaScript plus CSS and HTML. Problem sets inspired by real-world domains of biology, cryptography, finance, forensics, and gaming. The on-campus version of CS50x , CS50, is Harvards largest course.Students who earn a satisfactory score on 9 problem sets (i.e., programming assignments) and a final project are eligible for a certificate. ',
    ],
    image: ['CS50'],
    link: {
      title: 'CS50',
      url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0',
    },
  },
  {
    title: 'Codecademy',
    description: [
      'This course will guide you through combining HTML, CSS, and JavaScript to make exciting interactive sites! The concepts covered in this course lay the foundation for adding interactivity to websites and can help you bridge the gap between learning JavaScript principles and actually applying JavaScript to real web development projects. Take-Away Skills Learn about the DOM architecture and manipulation, browser events and handlers, as well as a new web templating framework Handlebars.js.',
    ],
    image: ['browser'],
    link: {
      title: 'CodeAcademy',
      url: 'https://www.codecademy.com/learn/build-interactive-websites',
    },
  },
  {
    title: 'Udemy',
    description: [
      'How to use Test and Behavior Driven Development to build React applications. The ability to discuss the approach of Test Driven Development with fellow software engineers. How to build full React applications with thorough tests. How to use libraries like Jest, Enzyme, and more to test React components. How to use Redux in React applications, including asynchronous actions and middleware. How to apply advanced es6 concepts to write more concise code. How to extend React applications with third-party libraries.',
    ],
    image: ['udemyTest'],
    link: { title: 'Udemy', url: 'https://www.udemy.com/course/react-tdd/' },
  },
  {
    title: 'Career Foundry',
    description: [
      'In this program I learned how to create a series of web applications entirely from scratch using javascript, html and css. Most of the apps were built using Ruby on Rails and we got into things like authentication via a functioning login page, caching data to reduce page load times and even some Stripe payment integration where we set up a dummy account and charged it fake money on stripes dev API. This was my first intensive program on the road to becoming a developer and I came out of it inspired, I would say however I have never used Ruby on Rails since then but the concept I learned I found applicable in my career so far',
    ],
    image: ['careerFoundry'],
    link: {
      title: 'Career Foundry',
      url: 'https://careerfoundry.com/en/courses/become-a-web-developer-with-your-bildungsgutschein/',
    },
  },
  {
    title: 'CodeCore',
    description: [
      'Start with the basics then dive deep with hands-on training and guidance. This introduction to programming starts with theory on programming basics and building websites. It is structured to give you a strong foundation to utilize programming in your career. After the course, you have the option to use your new tools to make a basic Web App which our developers will review with you.',
    ],
    image: ['codeCore'],
    link: { title: 'CodeCore', url: 'https://codecore.ca/programs/fundamentals' },
  },
];
