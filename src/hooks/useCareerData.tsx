export interface CareerNodeData {
  id: string;
  title: string;
  hideTitle?: boolean;
  tooltip?: string;
  description?: string;
  icon?: string;
  shortTitle?: string;
  hideIcon?: boolean;
  children: CareerNodeData[];
  color?: "primary" | "secondary";
  xPos?: number;
}

export interface CareerEdgeData {
  source: string;
  target: string;
  color?: "primary" | "secondary";
}

export interface CareerData {
  nodes: CareerNodeData[];
  edges: CareerEdgeData[];
}

const useCareerData = (): CareerData => {
  return {
    nodes: [
      {
        color: "secondary",
        id: "2009",
        xPos: 0,
        title:
          "B.Sc. Mechanical Engineering - Amirkabir University of Technology in Tehran",
        description:
          "In 2009, I received my **Bachelor's degree** in Mechanical Engineering. Already during my studies, I started to learn the **german language**. So when the time came " +
          "to choose a country to move to, Germany felt like a natural choice. Up to this day I cannot conjure a more honest reason for moving to germany. Mostly however I have not come to regret my choice." +
          "I have been living in **Germany for over 15 years** now and have come find it as my home. As for staying here indefinitely, I am not sure. I have always been a bit of a **wanderer**...",
        shortTitle: "2009",
        children: [
          {
            id: "Bachelor's Thesis",
            title: "Bachelor's Thesis",
            icon: "GraduationCap",
            tooltip: "Bachelor's Thesis",
            description:
              "My **Bachelor's thesis** was my first real experience with programming. I developed a **simulation of air flow** of a transformer's box. " +
              "The simulation was done in [**Ansys Fluent**](https://www.ansys.com/products/fluids/ansys-fluent) and was based on the **finite volume method** simulating Navier Stokes and Heat Equation. The result of the simulation was a **temperature distribution** of the transformer's box, allowing the **optimization** of the cooling system.",
            children: [
              {
                id: "Fluent",
                title: "Fluent",
                tooltip: "Ansys Fluent",
                icon: "Fluent",
                description:
                  "Fluent is a software package for computational fluid dynamics. It is used for simulation, visualization and analysis of fluid flow and heat transfer.",
                children: [],
              },
              {
                id: "Finite Volume Method",
                title: "Finite Volume Method",
                tooltip: "Finite Volume Method",
                icon: "FVM",
                description:
                  "The finite volume method is a method for representing and evaluating partial differential equations in the form of algebraic equations.",
                children: [],
              },
              {
                id: "Navier Stokes",
                title: "Navier Stokes",
                tooltip: "Navier Stokes",
                icon: "NS",
                description:
                  "The Navier-Stokes equations are a set of nonlinear partial differential equations that describe the flow of fluids.",
                children: [],
              },
              {
                id: "Heat Equation",
                title: "Heat Equation",
                tooltip: "Heat Equation",
                icon: "HeatEq",
                description:
                  "The heat equation is a parabolic partial differential equation that describes the distribution of heat (or variation in temperature) in a given region over time.",
                children: [],
              },
            ],
          },
          {
            id: "Bachelor's Grade",
            title: "Bachelor's Grade",
            icon: "Award",
            description:
              "I graduated with a grade of 18.51 out of 20. Not top of the class, but close enough. Considering Amirkabir University of Technology is one of the top universities in Iran, I was quite happy with my grade, and that I survived the 4 years of rigorous studying.",
            children: [],
          },
        ],
      },
      {
        id: "2012",
        xPos: 1,
        color: "secondary",
        title: "M.Sc. Energy Engineering - RWTH University in Aachen Germany",
        shortTitle: "2012",
        description:
          "In 2012, I received my Master's degree in Energy Engineering. The program was a mix of mechanical engineering and electrical engineering with a focus on energy systems." +
          "I was particularly interested in the field of renewable energy and energy storage." +
          "However, I was deeply interested in the theory of fluid dynamics and heat transfer, which I had already encountered during my Bachelor's studies." +
          "Fortunately, the program at RWTH Aachen University was very broad and allowed me to explore many different fields of engineering." +
          "So when I had the opportunity to do my Master's thesis at the [Institute of Aerodynamics and Chair of Fluid Mechanics](https://www.aia.rwth-aachen.de/), I was thrilled.",
        children: [
          {
            id: "Master's Thesis",
            title: "Master's Thesis",
            icon: "GraduationCap",
            description:
              "My thesis focused on optimal control strategies for reducing noise in a two-dimensional plane jet using adjoint-based optimization methods. I developed and implemented both first-order (Conjugate Gradient) and second-order (Newton Conjugate Gradient)" +
              "optimization algorithms to minimize noise in the jet's far-field while satisfying the Navier-Stokes equations as constraints. Through direct numerical simulation (DNS) and careful consideration of control intervals, I achieved significant noise reductions of up to 6 dB using various control strategies including mass, momentum, and internal energy controls." +
              "The work demonstrated that while stream-wise momentum control was particularly effective, all control types successfully reduced noise by subtly modifying turbulence structures rather than dramatically altering the overall flow. I also encountered and analyzed interesting challenges with the second-order optimization approach, particularly regarding negative Hessian curvature, and provided suggestions " +
              "for future research directions including improved cost functional definitions and alternative optimization methods." +
              "The research was a tour de france of fluid dynamics, optimization, and numerical methods. Much of my fundamental knowledge in mathematics and programming was acquired during this time.",
            children: [
              {
                id: "Adjoint-based Optimization",
                title: "Adjoint-based Optimization",
                icon: "Adjoint",
                description:
                  "Adjoint-based optimization is a method for optimizing a function by calculating the gradient of the objective function with respect to the design variables.",
                children: [],
              },
              {
                id: "Conjugate Gradient",
                title: "Conjugate Gradient",
                icon: "CG",
                description:
                  "The conjugate gradient method is an algorithm for the numerical solution of systems of linear equations.",
                children: [],
              },
              {
                id: "Newton Conjugate Gradient",
                title: "Newton Conjugate Gradient",
                icon: "NCG",
                description:
                  "The Newton conjugate gradient method is an algorithm for the numerical solution of systems of nonlinear equations.",
                children: [],
              },
              {
                id: "Navier-Stokes",
                title: "Navier-Stokes",
                icon: "NS",
                description:
                  "The Navier-Stokes equations are a set of nonlinear partial differential equations that describe the flow of fluids.",
                children: [],
              },
              {
                id: "Direct Numerical Simulation",
                title: "Direct Numerical Simulation",
                icon: "DNS",
                description:
                  "Direct numerical simulation is a numerical technique for solving the Navier-Stokes equations without turbulence modeling.",
                children: [],
              },
            ],
          },
          {
            id: "Master's Grade",
            title: "Master's Grade",
            icon: "Award",
            description:
              "I graduated with a grade of 1.7. In the German grading system, 1.0 is the best grade and 4.0 is the worst. I graduated top of my class.",
            children: [],
          },
        ],
      },
      {
        id: "2015",
        color: "secondary",
        xPos: 2,
        title: "Research Assistant at the University of Siegen",
        shortTitle: "2015",
        tooltip: "Research Assistant",
        description:
          "After finishing my Master's degree, I was offered a position as a research assistant at the Chair of Fluid Dynamics at the University of Siegen. The position was part of a two-year postgraduate program that allowed me to work on my PhD while also teaching courses in fluid dynamics and heat transfer. " +
          "The program was a great opportunity to deepen my knowledge in fluid dynamics and heat transfer and to gain experience in teaching and research. I also had the chance to work on several research projects and to publish papers in international journals. " +
          "Under the supervision of Prof. Dr. Holger Foysi, I worked on the development of numerical methods for the simulation of turbulent flows and heat transfer. I also had the opportunity to collaborate with other research groups and to attend conferences and workshops. " +
          "I also had the opportunity to teach courses in fluid dynamics and heat transfer, " +
          "which helped me to develop my communication and presentation skills.",
        children: [
          {
            id: "Research Assistant",
            title: "Research Assistant",
            icon: "Research",
            tooltip: "Research Assistant",
            description:
              "This research role involved creating high-performance computational tools to model complex " +
              "fluid-structure interactions. The work supported pioneering advances in fluid mechanics " +
              "through state-of-the-art simulation and numerical methods. ",
            children: [],
          },
          {
            id: "Teaching Assistant",
            title: "Teaching Assistant",
            icon: "Teaching",
            tooltip: "Teaching Assistant",
            description:
              "As a teaching assistant, I was responsible for leading tutorials, grading assignments, " +
              "and providing support to students. I also developed course materials and " +
              "assisted with the design and delivery of lectures." +
              "During this time, I consulted multiple master's students on their theses and helped them to develop their research skills.",
            children: [],
          },
        ],
      },
      {
        id: "2019",
        color: "secondary",
        xPos: 3,
        title: "Lead Software Engineer at Dear Reality",
        shortTitle: "2019",
        tooltip: "Lead Software Engineer",
        description:
          "In 2019, I joined Dear Reality as a Lead Software Engineer. Dear Reality is a software company that develops audio plugins for music production and virtual reality. " +
          "As a Lead Software Engineer, I was responsible for leading a team of developers and designers to create innovative audio software products. I worked on a range of projects, " +
          "including virtual reality audio plugins, spatial audio tools, and audio processing algorithms. I also collaborated with other teams to integrate our software products with " +
          "third-party platforms and technologies. During my time at Dear Reality, I had the opportunity to work on cutting-edge audio technologies and to collaborate with " +
          "industry-leading companies and artists. I also had the chance to mentor junior developers and to share my knowledge and expertise with the team.",
        children: [
          {
            id: "C++",
            title: "C++",
            icon: "c++",
            tooltip: "C++",
            description:
              "During my time at Dear Reality, I worked extensively with C++ to develop audio plugins and software tools.",
            children: [],
          },
          {
            id: "Audio Plugins",
            title: "Audio Plugins",
            icon: "Audio",
            tooltip: "Audio Plugins",
            description:
              "I developed a range of audio plugins for music production and virtual reality, including spatial audio tools, " +
              "audio processing algorithms, and virtual reality audio plugins.",
            children: [],
          },
          {
            id: "C# Unity",
            title: "C# Unity",
            icon: "unity",
            tooltip: "C# Unity",
            description:
              "I also worked with C# and Unity to develop virtual reality audio plugins and spatial audio tools." +
              "I collaborated with other teams to integrate our software products with third-party platforms and technologies.",
            children: [],
          },
        ],
      },
      {
        id: "2020",
        color: "secondary",
        xPos: 4,
        title: "Senior Software Engineer at RISE Remote",
        shortTitle: "2020",
        tooltip: "Senior Software Engineer",
        description:
          "In 2020, I joined RISE Remote as a Senior Software Engineer. RISE Remote is a software company that develops remote collaboration tools for virtual teams. " +
          "As a Senior Software Engineer, I was responsible for leading the development of new features and products, " +
          "as well as maintaining and optimizing existing codebases. I worked on a range of projects, including video conferencing software, " +
          "collaboration tools, and remote work solutions. I also collaborated with other teams to integrate our software products with " +
          "third-party platforms and technologies. During my time at RISE Remote, I had the opportunity to work on cutting-edge remote collaboration technologies " +
          "and to collaborate with industry-leading companies and organizations. I also had the chance to mentor junior developers and to share my knowledge and expertise with the team.",
        children: [
          {
            id: "CI/CD",
            title: "CI/CD",
            icon: "CI",
            tooltip: "CI/CD",
            description:
              "I implemented continuous integration and continuous deployment pipelines to automate the testing and deployment of software products in K8s.",
            children: [],
          },
          {
            id: "React Native Plugins",
            title: "React Native Plugins",
            icon: "React",
            tooltip: "React Native Plugins",
            description:
              "I developed React Native plugins for video conferencing software and collaboration tools in iOS and Android.",
            children: [],
          },
          {
            id: "Built-in Quality",
            title: "Built-in Quality",
            icon: "Quality",
            tooltip: "Built-in Quality",
            description:
              "I implemented built-in quality practices to ensure the reliability, security, and performance of software products through automated testing and code reviews.",
            children: [],
          },
          {
            id: "Github Actions",
            title: "Github Actions",
            icon: "Github",
            tooltip: "Github Actions",
            description:
              "I used Github Actions to automate the testing and deployment of software products",
            children: [],
          },
        ],
      },
      {
        id: "2021",
        color: "secondary",
        xPos: 5,
        title: "Chief Technology Officer at SCALARA",
        shortTitle: "2021",
        tooltip: "Chief Technology Officer",
        description:
          "In 2021, I joined SCALARA as a Chief Technology Officer. SCALARA is an innovative, compliance-driven SaaS tailored for the property managers. Automating complex" +
          "property operations enables streamline workflows",
        children: [
          {
            id: "Seed Funding",
            title: "Seed Funding",
            icon: "Funding",
            tooltip: "Seed",
            description:
              "I secured seed funding for SCALARA, enabling the company to accelerate product development and scale operations.",
            children: [],
          },
          {
            id: "Business Analysis",
            title: "Business Analysis",
            icon: "Analysis",
            tooltip: "Business",
            description:
              "Collaborated in business analysis of property management, accounting, and marketplace",
            children: [],
          },
          {
            id: "ReactJS",
            title: "ReactJS",
            icon: "React",
            tooltip: "ReactJS",
            description:
              "The frontend of SCALARA was built with ReactJS, a JavaScript library for building user interfaces.",
            children: [],
          },
          {
            id: "NestJS",
            title: "NestJS",
            icon: "Nest",
            tooltip: "NestJS",
            description:
              "The backend of SCALARA was built with NestJS, a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.",
            children: [],
          },
          {
            id: "Typescript",
            title: "Typescript",
            icon: "ts",
            tooltip: "Typescript",
            description:
              "Typescript was used in the development of SCALARA to enable static typing and other advanced features.",
            children: [],
          },
          {
            id: "PostgreSQL",
            title: "PostgreSQL",
            icon: "db",
            tooltip: "PostgreSQL",
            description:
              "PostgreSQL was used as the database management system for SCALARA, providing a powerful, open-source relational database solution.",
            children: [],
          },
          {
            id: "Docker and Kubernetes",
            title: "Docker and Kubernetes",
            icon: "Docker",
            tooltip: "Docker and Kubernetes",
            description:
              "Docker and Kubernetes were used to containerize and orchestrate the deployment of SCALARA, ensuring scalability and reliability.",
            children: [],
          },
        ],
      },
      {
        id: "2022",
        color: "secondary",
        xPos: 6,
        title: "Engineering Manager - Web Applications at Open Reply",
        shortTitle: "2022",
        tooltip: "Engineering Manager - Web Applications",
        description:
          "In 2022, I joined Open Reply as an Engineering Manager for Web Applications. Open Reply is a leading digital services company that specializes in " +
          "designing and implementing innovative solutions for clients in various industries. As an Engineering Manager, I am responsible for leading a team of developers " +
          "and designers to create cutting-edge web applications and digital experiences. I work closely with clients to understand their needs and requirements, " +
          "and I collaborate with other teams to deliver high-quality solutions that meet and exceed client expectations. I also mentor junior developers and " +
          "provide guidance and support to help them grow and develop their skills. I am excited to be part of the Open Reply team and to work on challenging projects " +
          "that push the boundaries of technology and creativity.",
        children: [
          {
            id: "Team Leadership",
            title: "Team Leadership",
            icon: "team",
            tooltip: "Team Leadership",
            description:
              "I lead a team of developers and designers to create cutting-edge web applications and digital experiences.",
            children: [],
          },
          {
            id: "Client Collaboration",
            title: "Client Collaboration",
            icon: "user",
            tooltip: "Client Collaboration",
            description:
              "I work closely with clients to understand their needs and requirements and collaborate with other teams to deliver high-quality solutions.",
            children: [],
          },
          {
            id: "Mentorship",
            title: "Mentorship",
            icon: "Mentorship",
            tooltip: "Mentorship",
            description:
              "I mentor junior developers and provide guidance and support to help them grow and develop their skills.",
            children: [],
          },
          {
            id: "Node.js",
            title: "Node.js",
            icon: "Node",
            tooltip: "Node.js",
            description:
              "I used Node.js to build scalable and efficient web applications for clients in various industries.",
            children: [],
          },
          {
            id: "React",
            title: "React",
            icon: "React",
            tooltip: "React",
            description:
              "I used React to create interactive and dynamic user interfaces for web applications and digital experiences.",
            children: [],
          },
          {
            id: "Vue.js",
            title: "Vue.js",
            icon: "Vue",
            tooltip: "Vue.js",
            description:
              "I used Vue.js to build responsive and user-friendly web applications for clients in various industries.",
            children: [],
          },
          {
            id: "Go",
            title: "Go",
            icon: "Go",
            tooltip: "Go",
            description:
              "I used Go to build high-performance and scalable web applications for IoT applications.",
            children: [],
          },
          {
            id: "GraphQL",
            title: "GraphQL",
            icon: "GraphQL",
            tooltip: "GraphQL",
            description:
              "I used GraphQL to query and manipulate data in web applications, providing a flexible and efficient way to interact with APIs.",
            children: [],
          },
          {
            id: "MongoDB",
            title: "MongoDB",
            icon: "MongoDB",
            tooltip: "MongoDB",
            description:
              "I used MongoDB as the database management system for web applications, providing a scalable and flexible solution for storing and retrieving data.",
            children: [],
          },
          {
            id: "AWS",
            title: "AWS",
            icon: "AWS",
            tooltip: "AWS",
            description:
              "I used AWS to deploy and manage web applications, leveraging cloud services to build scalable and reliable solutions.",
            children: [],
          },
        ],
      },
      {
        id: "2024",
        color: "secondary",
        xPos: 7,
        title: "Program Manager - Data and Platform at Open Reply",
        shortTitle: "2024",
        tooltip: "Program Manager - Data and Platform",
        description:
          "In 2024, I was promoted to Program Manager for Data and Platform at Open Reply. In this role, I am responsible for leading a team of developers, data scientists, and platform engineers to design and implement innovative solutions for clients in various industries. I work closely with clients to understand their data and platform needs and collaborate with other teams to deliver high-quality solutions. I also mentor developers and provide guidance and support to help them grow and develop their skills. I manage 6 Million Euros in revenue and 20 team members.",
        children: [
          {
            id: "Team Management",
            title: "Team Management",
            icon: "team",
            tooltip: "Team Management",
            description:
              "I lead a team of developers, data scientists, and platform engineers to design and implement innovative solutions for clients in various industries. I also oversee full stack delivery across mobile, infrastructure, frontend & backend development",
            children: [],
          },
          {
            id: "Revenue Management",
            title: "Revenue Management",
            icon: "Revenue",
            tooltip: "Revenue Management",
            description:
              "I manage 5 Million Euros in revenue and ensure the profitability and growth of the program.",
            children: [],
          },
          {
            id: "Platform Engineering",
            title: "Platform Engineering",
            icon: "platform",
            tooltip: "Platform Engineering",
            description:
              "I oversee the design and implementation of platform solutions for clients in various industries.",
            children: [],
          },
          {
            id: "OBI",
            title: "OBI",
            hideTitle: true,
            icon: "obi",
            hideIcon: true,
            tooltip: "OBI",
            description:
              "Managed and Developed 360 customer experience & CRM platforms for OBI, a leading European DIY retailer.",
            children: [
              {
                id: "CRM",
                title: "CRM",
                icon: "team",
                tooltip: "CRM",
                description:
                  "Managed and Developed 360 customer experience & CRM platforms for OBI, a leading European DIY retailer.",
                children: [],
              },
              {
                id: "Pricing Migration",
                title: "Pricing",
                icon: "price",
                tooltip: "Pricing",
                description:
                  "Lead a team of two solution architects to migrate pricing data from legacy systems (many excel files) to a new pricing platform and SaaS. Oversaw the migration strategy, data mapping, data validation, and proper interfaces to reduce couplings and increase cohesion.",
                children: [],
              },
            ],
          },
          {
            id: "PORSCHE",
            title: "PORSCHE",
            hideTitle: true,
            icon: "porsche",
            hideIcon: true,
            tooltip: "PORSCHE",
            description:
              "In 2024, I built and managed a team who improved client data insights by developing a survey analytics platform for PORSCHE. The team consisted of 5 cross-functional team members from data engineers to ux/ui designers.",
            children: [
              {
                id: "Azure Data Factory",
                title: "Azure Data Factory",
                icon: "Azure",
                tooltip: "Azure Data Factory",
                description:
                  "We used Azure Data Factory to orchestrate and automate data movement and data transformation.",
                children: [],
              },
              {
                id: "Next.js",
                title: "Next.js",
                icon: "Next",
                tooltip: "Next.js",
                description:
                  "We used Next.js to build a server-side rendered web application for the survey analytics platform. Enabling faster page loads and responsive design.",
                children: [],
              },
            ],
          },
        ],
      },
    ],
    edges: [
      { source: "2009", target: "2012", color: "secondary" },
      { source: "2012", target: "2015", color: "secondary" },
      { source: "2015", target: "2019", color: "secondary" },
      { source: "2019", target: "2020", color: "secondary" },
      { source: "2020", target: "2021", color: "secondary" },
      { source: "2021", target: "2022", color: "secondary" },
      { source: "2022", target: "2024", color: "secondary" },
    ],
  };
};

export default useCareerData;
