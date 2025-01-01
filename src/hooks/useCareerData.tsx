
export interface CareerNodeData {
  id: string;
  title: string;
  tooltip?: string;
  description?: string;
  icon?: string;
  shortTitle?: string;
  children: CareerNodeData[];
  color?: 'primary' | 'secondary';
  xPos?: number;
}

export interface CareerEdgeData {
  source: string;
  target: string;
  color?: 'primary' | 'secondary';
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
        title: "Graduated from Amirkabir University of Technology in Tehran",
        description:
          "In 2009, I received my **Bachelor's degree** in Mechanical Engineering. Already during my studies, I started to learn the **german language**. So when the time came " +
          "to choose a country to move to, Germany felt like a natural choice. Up to this day I cannot conjure a more honest reason for moving to germany. Mostly however I have not come to regret my choice." +
          "I have been living in **Germany for over 15 years** now and have come find it as my home. As for staying here indefinitely, I am not sure. I have always been a bit of a **wanderer**...",
        shortTitle: "2009",
        children: [
          {
            id: "Bachelor's Thesis",
            title: "Bachelor's Thesis",
            icon: 'GraduationCap',
            tooltip: "Bachelor's Thesis",
            description:
              "My **Bachelor's thesis** was my first real experience with programming. I developed a **simulation of air flow** of a transformer's box. " +
              "The simulation was done in [**Ansys Fluent**](https://www.ansys.com/products/fluids/ansys-fluent) and was based on the **finite volume method** simulating Navier Stokes and Heat Equation. The result of the simulation was a **temperature distribution** of the transformer's box, allowing the **optimization** of the cooling system.",
            children: [
              {
                id: "Fluent",
                title: "Fluent",
                tooltip: "Ansys Fluent",
                icon: 'AWS',
                description:
                  "Fluent is a software package for computational fluid dynamics. It is used for simulation, visualization and analysis of fluid flow and heat transfer.",
                children: [],
              },
              {
                id: "Finite Volume Method",
                title: "Finite Volume Method",
                tooltip: "Finite Volume Method",
                icon: 'FVM',
                description:
                  "The finite volume method is a method for representing and evaluating partial differential equations in the form of algebraic equations.",
                children: [],
              },
              {
                id: "Navier Stokes",
                title: "Navier Stokes",
                tooltip: "Navier Stokes",
                icon: 'NS',
                description:
                  "The Navier-Stokes equations are a set of nonlinear partial differential equations that describe the flow of fluids.",
                children: [],
              },
              {
                id: "Heat Equation",
                title: "Heat Equation",
                tooltip: "Heat Equation",
                icon: 'HeatEq',
                description:
                  "The heat equation is a parabolic partial differential equation that describes the distribution of heat (or variation in temperature) in a given region over time.",
                children: [],
              },
            ],
          },
          {
            id: "Bachelor's Grade",
            title: "Bachelor's Grade",
            icon: 'Award',
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
        title:
          "Graduated from RWTH University in Aachen Germany - Energy Engineering",
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
            icon: 'GraduationCap',
            description: "My thesis focused on optimal control strategies for reducing noise in a two-dimensional plane jet using adjoint-based optimization methods. I developed and implemented both first-order (Conjugate Gradient) and second-order (Newton Conjugate Gradient)" +
              "optimization algorithms to minimize noise in the jet's far-field while satisfying the Navier-Stokes equations as constraints. Through direct numerical simulation (DNS) and careful consideration of control intervals, I achieved significant noise reductions of up to 6 dB using various control strategies including mass, momentum, and internal energy controls." +
              "The work demonstrated that while stream-wise momentum control was particularly effective, all control types successfully reduced noise by subtly modifying turbulence structures rather than dramatically altering the overall flow. I also encountered and analyzed interesting challenges with the second-order optimization approach, particularly regarding negative Hessian curvature, and provided suggestions " +
              "for future research directions including improved cost functional definitions and alternative optimization methods." +
              "The research was a tour de france of fluid dynamics, optimization, and numerical methods. Much of my fundamental knowledge in mathematics and programming was acquired during this time.",
            children: [
              {
                id: "Adjoint-based Optimization",
                title: "Adjoint-based Optimization",
                icon: 'Adjoint',
                description:
                  "Adjoint-based optimization is a method for optimizing a function by calculating the gradient of the objective function with respect to the design variables.",
                children: [],
              },
              {
                id: "Conjugate Gradient",
                title: "Conjugate Gradient",
                icon: 'CG',
                description:
                  "The conjugate gradient method is an algorithm for the numerical solution of systems of linear equations.",
                children: [],
              },
              {
                id: "Newton Conjugate Gradient",
                title: "Newton Conjugate Gradient",
                icon: 'NCG',
                description:
                  "The Newton conjugate gradient method is an algorithm for the numerical solution of systems of nonlinear equations.",
                children: [],
              },
              {
                id: "Navier-Stokes",
                title: "Navier-Stokes",
                icon: 'NS',
                description:
                  "The Navier-Stokes equations are a set of nonlinear partial differential equations that describe the flow of fluids.",
                children: [],
              },
              {
                id: "Direct Numerical Simulation",
                title: "Direct Numerical Simulation",
                icon: 'DNS',
                description:
                  "Direct numerical simulation is a numerical technique for solving the Navier-Stokes equations without turbulence modeling.",
                children: [],
              },
            ],
          },
          {
            id: "Master's Grade",
            title: "Master's Grade",
            icon: 'Award',
            description:
              "I graduated with a grade of 1.7. In the German grading system, 1.0 is the best grade and 4.0 is the worst. I graduated top of my class.",
            children: [],
          }
        ],
      },
      {
        id: "2015",
        color: "secondary",
        xPos: 2,
        title: "Finished a two-year postgraduate program as research assistant at the Chair of Fluid Dynamics University of Siegen",
        shortTitle: "2015",
        tooltip: "Research Assistant",
        description: "After finishing my Master's degree, I was offered a position as a research assistant at the Chair of Fluid Dynamics at the University of Siegen. The position was part of a two-year postgraduate program that allowed me to work on my PhD while also teaching courses in fluid dynamics and heat transfer. " +
          "The program was a great opportunity to deepen my knowledge in fluid dynamics and heat transfer and to gain experience in teaching and research. I also had the chance to work on several research projects and to publish papers in international journals. " +
          "Under the supervision of Prof. Dr. Holger Foysi, I worked on the development of numerical methods for the simulation of turbulent flows and heat transfer. I also had the opportunity to collaborate with other research groups and to attend conferences and workshops. " +
          "I also had the opportunity to teach courses in fluid dynamics and heat transfer, " +
          "which helped me to develop my communication and presentation skills.",
        children: [
          {
            id: "Research Assistant",
            title: "Research Assistant",
            icon: 'Research',
            tooltip: "Research Assistant",
            description: "This research role involved creating high-performance computational tools to model complex " +
            "fluid-structure interactions. The work supported pioneering advances in fluid mechanics " +
              "through state-of-the-art simulation and numerical methods. ",
            children: [],
          },
          {
            id: "Teaching Assistant",
            title: "Teaching Assistant",
            icon: 'Teaching',
            tooltip: "Teaching Assistant",
            description: "As a teaching assistant, I was responsible for leading tutorials, grading assignments, " +
              "and providing support to students. I also developed course materials and " +
              "assisted with the design and delivery of lectures." +
              "During this time, I consulted multiple master's students on their theses and helped them to develop their research skills.",
            children: [],
          }
        ]
      }
    ],
    edges: [{ source: "2009", target: "2012", color: 'secondary' }, { source: "2012", target: "2015", color: 'secondary' }],
  };
};

export default useCareerData;
