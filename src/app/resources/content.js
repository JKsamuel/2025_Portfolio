const person = {
  firstName: "Jongeun",
  lastName: "Kim",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data analyst | Business Intelligence Developer",
  avatar: "/images/sam_kim.jpg",
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
      I'm {person.firstName}, a {person.role} who discovers the hidden value
      behind data and turns it into actionable insights.
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
        I’m a Business Intelligence Developer passionate about transforming raw
        data into meaningful visual stories and strategic solutions. My
        expertise lies in data modeling, building interactive dashboards, and
        aligning data-driven insights with real business objectives.
        <br /> Beyond my professional work, I’m also a proud father of two and a
        loving husband. Before transitioning into the tech industry, I served
        for 10 years as an infantry officer in the Republic of Korea Army,
        including distinguished assignments with the Special Forces and Commando
        units—an experience that shaped my discipline, leadership, and
        problem-solving mindset.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Samuel, Son & Co.",
        timeframe: "2023.09 - 2025.05",
        role: "Business Intelligence Developer",
        achievements: [
          <>
            Designed and maintained a risk reporting Data Mart, using SQL and
            Excel VBA to automate data cleansing, validation, and quality
            control processes—significantly improving data accuracy and workflow
            efficiency.
          </>,
          <>
            Developed interactive Power BI dashboards to visualize Key Risk
            Indicators (KRIs) and performance metrics, enabling stakeholders to
            monitor mitigation strategies in real time.
          </>,
          <>
            Standardized and transformed data from five ERP systems using stored
            procedures, improving cross-system data consistency and reducing
            reporting discrepancies.
          </>,
          <>
            Modeled and optimized a Tabular Cube to enhance the accuracy of
            On-Time Delivery KPIs, enabling advanced operational risk analysis
            and executive-level reporting.
          </>,
          <>
            Collaborated with cross-functional teams to validate data lineage
            and ensure end-to-end traceability and reliability of risk metrics
            used in enterprise reporting.
          </>,
          <>
            Conducted large-scale data analysis using SQL and DAX, supporting
            KRI refinement and proactive identification of potential risk
            patterns across business units.
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
            Migrated 30+ SSRS reports from MDX to DAX due to the transition from
            a multidimensional to a tabular data model, delivering user-focused
            Power BI dashboards and optimizing DAX calculations for enhanced
            performance.
          </>,
          <>
            Delivered all assigned tasks ahead of schedule by proactively
            managing priorities using Azure DevOps Boards and ServiceNow
            tickets, improving team efficiency and maintaining project momentum
            in a high-pressure development environment.
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
            Managed inventory and warranty tracking for internal user
            equipment—including laptops, monitors, and ERP-related devices—and
            created a report to analyze and forecast replacement cycles based on
            remaining warranty periods, supporting proactive budgeting and
            reducing equipment downtime.
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
    // {
    //   src: "/images/gallery/1.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/2.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/3.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
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
