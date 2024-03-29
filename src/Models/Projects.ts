export interface IProject {
  title: string;
  goal: string;
  description: string[];
  images: string[];
  thumbnail: string;
  link: {
    title: string;
    url: string;
  };
  learnings: string;
}

export const Projects: IProject[] = [
  {
    title: 'Ecommerce site',
    goal: 'To build an Ecommerce site that will promote and sell my electrolytes for a side business I have recently started building. It will interact directly with shopify for the fullfillment side of things. I also wanted to better my understanding of NextJs and GraphQl. ',
    description: [
      'Since I had not used Next before and time was a constraint I forked a project to avoid set up issues. In hindsight since I deleted about 99% of the forked project I would have been better of starting from scratch. I also added EmotionJs for creating styled components and added some Jest tests using Enzyme.',
      'The product selection page includes three flavours all with the option of sugar or no sugar, once the quantity is selected I implimented two ways for the data to link to shopify. Since I was not ready to start paying for a shopify account to verify which method I needed I simply pepared both options. One sends the data as params in the route and the other way calls an endpoint loading a GraphQl object with the selected items',
      'Other features include a scaling slider that displays how many packages a customer might need based on their weekly workout schedule. Still to implement will be more tests, hosting the images on cloudinary, setting up lighthouse and creating a backend to store my product data.',
    ],
    images: ['tenacle-1', 'tenacle-2', 'tenacle-3'],
    thumbnail: 'tenacle',
    link: { title: 'Tenacle', url: 'https://www.tenacle.ca' },
    learnings:
      'I learned a lot about GraphQl and Next during this project such as how intuative GraphQl can be and how much it simplfies API calls. Also how nexts file structure can be so crucial to pages displaying or not which was a fun little bug to solve. Both these were things which are something I have been wanting to explore for a while now and I am happy to say I will continue to use them going forward.',
  },
  {
    title: 'Google Calendar',
    goal: 'To create a calendar similar to Googles that will give the customers a day and week overview of all their events/classes. Using position absolute and some calculations I could position calendar events anywhere and have them react to the events around them',
    description: [
      'Initially I query the width of the week view then divide that by the days of the week giving me my even day spaces. day view was full width. Then I created a hook which would return the layout(width,height) for each day as well as the position(x & y), I calculated these by using two functions: getCollisions() would create an array of 15 minute segments for a 24hr period and map through the events/classes setting their start / duration / end times as 1s in their appropriate places in the array. It would then do the same for the next event and so on. If the same index was found to have a collision (both 1s) it would add it to the collisions array to be deciphered by the getAttributes() which would modify each events width in relation to how many collisions it had. 3 collision would set it to 1/3 of a day as well as offset it the width of itself times previous collisions. The end result being a div positioned exactly where it needed to be with the correct widths and offset',
      'Afterwards I created a simple timeline divider which would move up and down the day depending on the current local time. Any events in the past were then faded out to provide a better user experience. I also added a hover effect for when events became too narrow to remain legible.',
      'The filter menu will add or remove events based on the selected options and I cant actually take credit for as it was implemented by my colleague Mykola Voropinov shortly after I left the company but I thought it was really nicely done. Further iterations would have events be dragable as well as clicking a blank slot would initiate a new events creation',
    ],
    images: ['calendar-1', 'calendar-2', 'calendar-3'],
    thumbnail: 'calendar',
    link: { title: 'Fitogram', url: 'https://www.fitogram.pro/' },
    learnings:
      'My first year as a developer I watched a colleague build a calendar for the old version of Fitogram Pro and all I remember thinking is wow that looks impossible to figure out. So in being tasked to develop this feature it helped me understand how far my capabilities have come over the years and to not look at such grand features as daunting anymore.',
  },
  {
    title: 'FrontEnd Rewrite',
    goal: 'Our objective was to completely re-write our front end from scratch in a project called Neo. FitogramPro is a comprehensive studio management software that was written as most tech startups are, in a fast-paced as long as it works mentality. This led to many issues with deeply interconnected components, unpredictable bugs, and slow development times. We wanted to transition from a monolithic codebase to a much more maintainable one and reduce the amount of interdependency found throughout the software. Moreover, we had proven that over 60% of our users accessed the software via a mobile device and having a codebase rooted in the mobile-first approach would ensure a higher quality experience overall.',
    description: [
      'The first step was to create a Roadmap so all departments could plan their resources accordingly. With Product and Management, we agreed on a viable MVP which began to redirect all mobile users to our new NEO domain. From there we started developing core features from Pro and temporarily filling in the gaps with iFrames or custom Pro components adapted for Neo.',
      'Next up was architecture, as Neo would only be worked on by a few developers at first it was important to establish a solid foundation that would be easy to understand and follow as more devs joined in on the project. We discussed things like Folder structure, Component designs, and naming practices. We decided to do away with the wrapper container practices we had in FitogramPro and create custom hooks if the component required special logic and import this from a separate file, as well as for deciding to only use named exports. Using MUI was a topic in these meetings as well and we agreed to use it but wrap each MUI component in our own wrapper which would give us the control to customize the output.',
      'While this project is large and will still take several quarters to achieve completely we have so far been able to release a solid mobile MVP and have begun releasing desktop features as well thus allowing more users to access NEO bringing us closer to making the full switch away from our FitogramPro software.',
    ],
    images: ['neo-roadmap', 'neo-structure', 'neo'],
    thumbnail: 'rewrite',
    link: { title: 'Fitogram', url: 'https://www.fitogram.pro/' },
    learnings:
      'This project has shown me how to plan a high-level projects architecture from the ground up as well as exposed me to a ton of best practices and conventions I was not previously familiar with. This also taught the inverse which was evident in FitogramPros codebase on how important these types of fundamental practices are and how even something as basic as a well organised global state management can save hours of dev time over the course of a sprint.',
  },
  {
    title: 'Micro Service Migration',
    goal: 'For context, FitogramPro is a studio management software which in 2020 we decided to rewrite into a project called Neo (see Software Rewrite). Our backend team had also decided to break up the application from a monolith to a group of microservices, Events (eg. classes, courses) were one such service. Naturally, this had to be coordinated with the front-end so that we could serve the customers their event data uninterrupted.',
    description: [
      'Our first task was to identify every call across three separate front ends which was related to events which we consolidated into an epic and split into sections based on different screens within the software and their importance. The nice thing about this is approach was that with every completed screen the next ones would get progressively easier since many functions that called an event API were shared across screens otherwise we would refactor them to be more universal.',
      'A wonderful side effect of this migration was it gave us the time to gather our calls together vs each component fending for itself and calling what it needs upon mounting. What I mean with that is we were able to create a base of very commonly used event calls and turn them into helper functions that could be used throughout the software and if, heaven forbid, we need to do another event service migration it would be as simple as changing a handful of endpoints in one file and maybe finding the rare edge-case to adjust. You can see here an example of a request function used throughout the software which compared to before is a much more concise and reliable method and, when paired with our new redux event store with its selections and actions, results in fewer calls overall being made and thus a more responsive software.',
      'Overall this migration was a large success. Our software became more responsive, load times decreased and the codebase became measurably smaller. Within our first couple weeks of releasing the migrated components we saw bug tickets and load times decrease and our NPS score rise. Of course, other teams were migrating to other microservices as well which aided in the overall prosperity enjoyed from this project.',
    ],
    images: ['event-migrate1', 'event-migrate2', 'event-migrate3'],
    thumbnail: 'micro',
    link: { title: 'Fitogram', url: 'https://www.fitogram.pro/' },
    learnings:
      'Oddly enough up until this point, I had very few tasks related to APIs, and when we were told this is our next big task I was a bit nervous. Getting into this task however, I learned a ton about how they work and how simple they can be and it gave me a confidence that I have carried forward to subsequent projects.',
  },
  {
    title: 'Event Feature',
    goal: 'For context, Fitogram pro is a studio management software which in 2020 we decided to rewrite into a project called Neo (see Software Rewrite). A major feature in the software is the ability for the user to create events, for example, a Yin Yoga class every Tuesday at 5 pm. Currently, the user can do this on FitogramPro but not on our new Neo version which will soon replace FitogramPro entirely and this feature will be a big leap towards achieving that goal.',
    description: [
      'Although this feature was a large one we were still able to base the functionality off of Pros current implementation since it would be using all the same APIs. That said everything about the UI/UX was completely redesigned and we gave it much more detailed validation and error handling this time. Additionally, since we would be writing this all from scratch we needed to design ways to re-use this process and its components to create other features in our software such as products and contracts etc. To achieve this we held many Front-end meetings on design architecture until we all agreed upon what we figured was the cleanest solution.',
      'The main driver for us was user experience so we focused a lot on making it very clear which fields were mandatory, validation with error messages describing which data needed correcting as well as pre-filling out information for the user based on what our Business Intelligence team said was the most common values. To do this we created some helper functions to evaluate which fields had been filled out and if the values were appropriate. In this example, we check if they are creating a Free Training (events with no timeframe eg. swimming) and if so check a more limited set of inputs otherwise we include more such as the start time being before the end time.',
      'There is a growing subset of users in the software that had to be handled a little bit differently than the average user. These users dont have access to the full software so many flows needed to be tweaked to either show or hide event creation inputs as well as adjust our validation logic to allow normally mandatory fields to be an option for them. Lastly, we needed to create fallback values to send to the creation endpoint if the data was returning null due to the fields being hidden, we did this within a custom hook built to manage event creation and had it align with existing validation.',
    ],
    images: ['neo-event-1', 'neo-event-2', 'neo-event-3'],
    thumbnail: 'event',
    link: { title: 'Fitogram', url: 'https://www.fitogram.pro/' },
    learnings:
      'Ive learned that sometimes the greatest measure of success is silence in regards to complaints and bug tickets and and that way this project was a huge success. We developed a complex and heavily used feature and after release, there was only one minor bug which was fixed promptly. Upon reflection this was due to a couple of factors such as working on the much cleaner code base of the Neo Project which gave us the freedom to build cleaner components and run reliable tests, also the high level of QA we put this feature through before release influenced the end product.',
  },
  {
    title: 'Import Feature',
    goal: 'For context, Fitogram pro is a studio management software which in 2020 we decided to rewrite into a project called Neo (see Software Rewrite). New customers coming from competing softwares needed a way to import all their data into our software as opposed to entering it manually which was very time-consuming and potentially could cause them to change their minds. This import includes things such as their Customers, Contracts, and Credit passes and will save the customer care team hours of time.',
    description: [
      'As an MVP we decided to focus solely on a Customer import but build it in such a way that adding other types of imports would automatically adapt to the data without additional coding. Initially, it would be released only for our customer success team to try out on our legacy software before being released to everyone on Neo. General validation of the excel sheet provided by the customer was done on the Back-end where they created a self-contained service for this feature. Once the APIs were ready I added the feature to Pro which was essentially a basic excel template download and upload so we could test the functionality in-house. This went well and after working out a few small kinks we moved on to the Neo implementation.',
      'This next step was implemented on Neo and is where the feature became more front end involved as it would guide the user via a dedicated interface mainly utilizing an interactive table representing their customer data but also with a status section and a draft import section. Firstly I researched applicable table libraries knowing that I would need a few features such as filtering, search, pagination and most importantly the ability to add custom table cells eg. JSX elements and I settled on mui-datatables which was ideal because we already use MUI in our software for UI component. I also had to parse through the data returned by our new endpoint and create the appropriate titles and column headers based on it as well as validate for errors and filter for errors.',
      'Lastly, we needed to show the progress of an import as well as a history of previous and failed imports. If an import failed you would have the chance to review it and fix the errors before trying the upload again. Every import was given a unique ID that would differentiate and catalog all the different tests and allow every user to retrieve a list of all their imports via a GET call using their user ID. We displayed these via this call and were able to evaluate the test status data via a custom hook so that we could display the progress, status, import date. Again everything written is completely adaptive so when the other import types are finished being developed on the back end they will work out of the box on our front end.',
    ],
    images: ['neo-import1', 'neo-import2', 'neo-import3'],
    thumbnail: 'import',
    link: { title: 'Fitogram', url: 'https://www.fitogram.pro/' },
    learnings:
      'This project taught me how to parse through large amounts of data and also to design more elegantly reusable components. However, the most important thing I learned on this project was that I could quickly expand my skillset. Many of the concepts and skills involved were brand new to me and since the other front end dev on my team was on holiday for a majority of this feature I had to dig deep and grow as a developer. So while this may not be the softwares largest or most used feature it was something I am proud I was such a big part of.',
  },
  {
    title: 'Admin Panel',
    goal: 'My very first project at my first job was to build a dashboard for internal use within the company where we could do things such as run tests, look up users, check the health of all the microservices and approve testimonials before publishing them. The need for this was large as before this the only way for non-tech employees to do these things was to approach a developer and have them manually do it in the database. The main benefit of this of course was the amount of time it saved us devs on a daily basis and over the years it has grown as more features were added to it.',
    description: [
      'For the login page, I wanted to avoid people having to log in if they didnt need to. To do this I would check their token when the page first loads and if it was of type admin I would re-route them to the dashboard page automatically. If the token was not present however they would need to login and on submit I sent their login credentials to our authorization service which returned its token to be decoded and then checked if the user was of type admin. When the user was deemed unauthorized the authenticationFailed state was set to true which would show the user an error message and they could then try again.',
      'In one of the companys Hackathons, we were given the subject of improving internal operations within the company and our idea was to add a much-needed feature to the admin panel which would take more load off our tech team. The feature enabled internal employees to delete providers/users and their customers via a simple interface where they would enter the UUID of the provider or customer into the text input and click submit and all without the aid of the tech teams.',
      'Once submit was hit the proper endpoint was called with a PATCH method and the UUID passed on while in the backend this would start a soft deletion process which would enable us or the provider to change their minds for 15 days at which point they would be hard deleted. I set up some error handling for this as well in case it didnt work as expected which checked the response and if it was not ok would let the user know via the UI that there has been an error and that the action did not go through and did the opposite for a successful action. Either outcome would reset the fields and state of the form so that a second attempt couldnt be contaminated.',
    ],
    images: ['adamin-1', 'adamin-2', 'adamin-3'],
    thumbnail: 'admin',
    link: { title: 'Fitogram', url: 'www.admin.fitogram.pro' },
    learnings:
      'As this was my first real project for a company I learned a Ton of things such as how tokens work and how to set up an API call with the proper data and since I hadnt worked with react before I learned many things about components and their lifecycles and how to alter and use the states within them. All very fun stuff and Im glad I had the chance to work on something like this when it was still so early in my career.',
  },
  {
    title: 'UI Overhaul',
    goal: 'The UI brush-up as it was modestly called was a complete overhaul of the software that included every page totaling over 283 screens and components. The project came to light because, before hiring a senior designer, the product managers (and sometimes the CEO) would create their own designs and as long as they generally matched the software it was graciously accepted. The goal was to rebrand the software with a fresh new look to get the customers talking about Fitogram and show it off.',
    description: [
      'Before the Covid-19 days, we had participated in a Trade Fair and many people at the fair commented on how much better our software looked compared to the competitors a few booths down. I was surprised at this because while it was indeed nicer it was nothing to shake a stick at but it did highlight the importance design has on how a company is viewed. This image not only brings back memories but it displays what the dashboard used to look like before the brushup.',
      'The new dashboard was given a much cleaner feel along with the rest of the software. We did this page by page and another dev and I managed to finish all the pages and components a month ahead of schedule. When most of the software was originally written the attention given to mobile was very small however since then we realized the number of people using it from a mobile device was staggering so while it was focused on the UI we had to adapt the UX of most components as well as re-design them so that each page would function from a mobile-first perspective.',
      'To centralize our designs and avoid duplicated components being created with every feature among a growing team of developers we introduced Storybook into the software. Storybook allowed us to preview all the components we were using in our UI without having to integrate them into any kind of project as well as interact with them to play with their different states and themes. It ran locally as well as on an Amazon Server viewable in Storybooks web-editor and also provided hints and code on how to use and implement each component.',
    ],
    images: ['ui-1', 'ui-2', 'ui-3'],
    thumbnail: 'ui',
    link: { title: 'Fitogram', url: 'https://www.fitogram.pro/' },
    learnings:
      'We knew how tightly intertwined our software had become and a major hurdle in the project was to attempt to decouple components or re-write them entirely. Something as simple as moving a date-time picker up and beside the title would turn into a day of refactoring components just to enable the right props to reach the right place. I learned how important architecture planning is before starting software of this complexity and how entangled a software could become if no structure was established at the foundation. Of course, I also got to learn how to resolve these kinds of issues efficiently.',
  },
  {
    title: 'Portfolio',
    goal: 'I was looking for a project to showcase some of the things I know and what better showcase than a showcase so here we are with an over-engineered portfolio! I added things such as google analytics to track its viewership and spy on you as well as cloudinary, and a ton of stylized components because they are just fun to have around. I had initially planned to add Redux to the mix but my only state management is with my modal component so even when aiming for overkill it was too overkill. There are still a few things Id like to try to improve on such as setting up a real backend instead of the mock JSON object I have with all my projects in it as well as a couple of bugs Ive noticed going forward. Overall though I am happy with what I built in a small amount of time and I hope you enjoyed it as well.',
    description: [
      'I wanted to have more state-based logic to exhibit but theres no sense in adding what isnt needed just to be fancier, thats just good coding practice. So here we have a hook I made for my modal component which lets you toggle it between open and closed as well as returns an isShown boolean so I can trigger my React Portal to show or not. The content for the modal I rendered simply by mapping through the data I have saved in my mock projects JSON found in Project.tsx if you want to check the source code on my Github.',
      'One thing Im always super happy to be able to use is a library called emotionJs because it gives you the freedom to control the UI based on props/state. Even when I was just starting to learn how to develop I found the adding of classnames to divs based on props etc archaic and searched for a better way. With emotionJs you can write styles with ternary operators that could change for example the font colour to be red if an error is present, that said I didnt have to adjust any UI based on state/props in this project but thats where the other half of emotionJs comes in. You can see here Ive created styled-components instead of a generic div with a class that adds styles to it the div is rendered completely styled as soon as its used. Stuff like this is great for heavily reused elements and can be exported throughout the app. Another thing you might notice here are the variables I used in place of font sizes and colours, I did this because maybe in the future I learn to passionately the text colour and the solution would be to change the hex value in one file instead of in a bazillion files.',
      'The more I planned this project out the more I realized how many images I could have and when I add more projects over time that will continue to grow. To avoid this slowing down my sites page load times I turned to Cloudinary to host all my images and serve them to me whenever I request them which really simplifies the process and has reduced the bundle size significantly. This here is a simple component I created that I used whenever I had an image to display. It queries my Cloudinary account and inserts the image I want to retrieve based on a prop passed into it. So for this image right here I just had to import Image with the prop "portfolio-3" and easy as pie Ive got an image of my Image. There were a few scenarios when 100% was not an ideal width such as the picture of me with the circles around it and in these cases, I added a custom width, this just avoids having to add redundant classnames all returning almost the same styles.',
    ],
    images: ['portfolio-1', 'portfolio-2', 'portfolio-3'],
    thumbnail: 'portfolio',
    link: { title: 'GitHub', url: 'https://github.com/adampauw/portfolio2022' },
    learnings:
      'The biggest learning while building this was how much I appreciate having a design team to supply the answers and designs I need when building features at my job. Its one thing to build something based on designs and documented functionality but to create from scratch is another ballgame entirely. I easily spent over half the time designing and deliberating and if anything this project has made me really appreciate how much work my wifes job as a UX/UI designer entails.',
  },
];
