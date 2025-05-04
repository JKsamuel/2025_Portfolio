const person = {
  firstName: "Samuel",
  lastName: "Kim",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Business Intelligence Developer",
  avatar: "/images/samkim.jpg",
  email: "ghassad87@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier
  languages: ["English", "Korean"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/JKsamuel/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/samuelkim87/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/jongeun_k87/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Data drives Insight Insight shapes Strategy.</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role} transforming raw data into clear
      visual stories.
      <br />
      After hours, I dive into data innovations.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.name} is a {person.role} dedicated to converting raw data into
        meaningful visual stories and strategic solutions. His expertise
        includes data modeling, interactive dashboards, and aligning data-driven
        insights with business goals.
        <br />
        <br />
        Beyond his professional career, he is a proud father of two and a loving
        husband. He also served as an infantry officer for 10 years in the
        Republic of Korea Army, including distinguished roles within the Special
        Forces and Commando units.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Samuel, Son & Co.",
        timeframe: "2023.09 - Present",
        role: "Business Intelligence Developer",
        achievements: [
          <>
            Developed a Tabular Cube using SSAS Tabular Project and implemented
            pre-aggregated ETL pipelines and optimized data models, resulting in
            a 30% improvement in Power BI dashboard performance.
          </>,
          <>
            Designed KPIs (e.g., AR/AP turnover, order-to-cash cycle) by
            analyzing ERP data, enabling insight-driven executive reporting.
          </>,
          <>
            Consolidated ERP data into Azure Data Lake, ensuring scalable,
            cross-system analytics.
          </>,
        ],
        images: [],
      },
      {
        company: "Samuel, Son & Co.",
        timeframe: "2023.04 – 2023.09",
        role: "Jr. BI Developer (Co-op)",
        achievements: [
          <>
            Migrated 30+ SSRS reports from MDX to DAX, improving report
            performance and usability.
          </>,
          <>
            Developed tailored dashboards in Power BI aligned with user needs
            and KPIs.
          </>,
          <>
            Completed all development tasks ahead of schedule in a fast-paced
            agile environment.
          </>,
        ],
        images: [],
      },
      {
        company: "Samuel, Son & Co.",
        timeframe: "2022.01 – 2022.08",
        role: "IT Plant Support Analyst (Co-op)",
        achievements: [
          <>
            Automated Excel-based forecasting of device replacement cycles,
            improving visibility and control over IT asset lifecycle planning.
          </>,
          <>
            Built a Windows application to analyze invoice bills and automate
            the identification of billable users, cutting manual reporting time
            by over 90% and significantly enhancing IT asset management.
          </>,
          <>
            Resolved critical software/network issues across North America,
            ensuring high uptime.
          </>,
        ],
        images: [],
      },
      {
        company: "Republic of Korea Army",
        timeframe: "2010 – 2020",
        role: "Army Captain (Company Commander / S1 Officer)",
        achievements: [
          <>
            Commanded infantry and airborne units; led mission planning under
            OPLAN 5027.
          </>,
          <>
            Coordinated inter-agency military logistics and personnel management
            in overseas missions.
          </>,
          <>
            Initiated projects like introducing a Korean restaurant to U.S. Army
            base via bidding process.
          </>,
        ],
        images: [],
      },
    ],
  },
  // work: {
  //   display: true, // set to false to hide this section
  //   title: "Work Experience",
  //   experiences: [
  //     {
  //       company: "FLY",
  //       timeframe: "2022 - Present",
  //       role: "Senior Design Engineer",
  //       achievements: [
  //         <>
  //           Redesigned the UI/UX for the FLY platform, resulting in a 20%
  //           increase in user engagement and 30% faster load times.
  //         </>,
  //         <>
  //           Spearheaded the integration of AI tools into design workflows,
  //           enabling designers to iterate 50% faster.
  //         </>,
  //       ],
  //       images: [
  //         // optional: leave the array empty if you don't want to display images
  //         {
  //           src: "/images/projects/project-01/cover-01.jpg",
  //           alt: "Once UI Project",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //     {
  //       company: "Creativ3",
  //       timeframe: "2018 - 2022",
  //       role: "Lead Designer",
  //       achievements: [
  //         <>
  //           Developed a design system that unified the brand across multiple
  //           platforms, improving design consistency by 40%.
  //         </>,
  //         <>
  //           Led a cross-functional team to launch a new product line,
  //           contributing to a 15% increase in overall company revenue.
  //         </>,
  //       ],
  //       images: [],
  //     },
  //   ],
  // },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Mowak College",
        description: <>Advanced Diploma | Studied Software Development.</>,
      },
      {
        name: "Korea Army Academy at Yeong-cheon",
        description: <>BA | Studied International Relations.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "SSAS Tabular",
        description: (
          <>
            Built enterprise-grade Tabular Cubes using SSAS Tabular Project to
            support fast and scalable data models for Power BI.
          </>
        ),

        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/portfolio/ssas_logo.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/portfolio/ssas_logo_01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Power BI Desktop",
        description: (
          <>
            Developed interactive dashboards and analytical reports in Power BI
            Desktop, optimizing performance and delivering business insights.
          </>
        ),

        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/portfolio/powerbi_logo.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Power BI Report Builder",
        description: (
          <>
            Created paginated reports using Power BI Report Builder for
            print-ready formats and detailed operational reporting needs.
          </>
        ),

        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/portfolio/powerbiReportbuilder.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "DAX",
        description: (
          <>
            Wrote advanced DAX measures, calculated columns, and calculated
            tables to implement complex business logic, KPIs, and time
            intelligence in Power BI reports.
          </>
        ),

        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/portfolio/daxstudio_logo.png",
            alt: "Project image",
            width: 9,
            height: 9,
          },
          {
            src: "/images/projects/portfolio/daxlogo.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "T-SQL | PL/SQL",
        description: (
          <>
            Designed and optimized complex queries, stored procedures, and ETL
            processes using T-SQL and PL/SQL for data transformation and
            integration.
          </>
        ),

        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/portfolio/sqlLogo.png",
            alt: "Project image",
            width: 9,
            height: 9,
          },
          {
            src: "/images/projects/portfolio/datastudio.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js | React.js",
        description: <>Building next gen apps with Next.js | React.js.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/5.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
