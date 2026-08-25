const websiteData = {
  founder: {
    name: "Er.Reshma Biswakarma",
    designation: "Principal Engineer & CEO/Founder",
    qualification:
      "M.Tech in Structural Engineering, with a strong academic foundation in structural analysis, design, and engineering practices.",
    experience:
     "With over 9 years of professional experience in structural engineering and infrastructure development, she has contributed to a diverse range of projects spanning buildings, roads, bridges, and tunnels. Her approach combines technical expertise, practical engineering judgment, and a strong commitment to structural safety, quality, and long-term performance.",
    imageUrl: "/images/founder.jpeg",
  },

  about: {
    description:
       "Genesis Engineering and Solutions is a structural engineering firm committed to delivering safe, efficient, and innovative engineering solutions. With a foundation built on technical excellence and attention to detail, we partner with clients to bring their construction visions to life — from concept to completion." +
 "We combine rigorous structural analysis with modern design methodologies to ensure every project meets the highest standards of safety, durability, and performance. A core area of our expertise lies in earthquake-resistant design -engineering structures that are built to withstand seismic forces, protecting lives " +
 "and assets for generations to come.",

    mission:
      "To provide reliable and innovative structural engineering solutions that stand the test of time, while maintaining the highest standards of quality, integrity, and client satisfaction.",

    imageUrl: "/images/about-structure.png",

    whyChooseUs: [
      "Thorough structural analysis and design expertise",
      "Proficiency in modern tools including BIM, AutoCAD, and structural software",
      "Collaborative approach with architects, contractors, and clients",
      "Practical and cost-effective designs",
      "Commitment to timely delivery and transparent communication",
    ],
  },

  services: [
    {
      id: 1,
      name: "Structural Design & Analysis",
      description:
        "Professional structural design and analysis services for residential and commercial projects.",
      imageUrl: "/images/structural-design.jpg",
    },

    {
      id: 2,
      name: "Structural Consultancy",
      description:
        "Expert structural engineering consultancy for safe, efficient and practical construction solutions.",
      imageUrl: "/images/structural-consultancy.jpg",
    },

    {
      id: 3,
      name: "Feasibility & Site Assessment",
      description:
        "Site assessment and feasibility studies to evaluate structural requirements and project conditions.",
      imageUrl: "/images/site-assessment.jpg",
    },

    {
      id: 4,
      name: "Drawing & Documentation",
      description:
        "Detailed structural drawings, documentation and technical project deliverables.",
      imageUrl: "/images/drawing-documentation.jpg",
    },
  ],

  completedProjects: [
    {
      id: 1,
      name: "Jerry Residence",
      description:
        "Residential structural design and analysis project.",
      location: "Rumtek-Sikkim",
      projectType: "Structural Design and Analysis",

      images: [
        {
          imageUrl: "/images/jerry-residence.png",
          caption: "Jerry Residence - Architectural View",
          isPrimary: true,
          displayOrder: 1,
        },
        {
          imageUrl:
            "/images/jerry-residence-structural-model.png",
          caption: "Jerry Residence - Structural Model",
          isPrimary: false,
          displayOrder: 2,
        },
        {
          imageUrl:
            "/images/jerry-residence-drawings-1.png",
          caption: "Jerry Residence - Structural Drawings",
          isPrimary: false,
          displayOrder: 3,
        },
        {
          imageUrl:
            "/images/jerry-residence-drawings-2.png",
          caption:
            "Jerry Residence - Additional Structural Drawings",
          isPrimary: false,
          displayOrder: 4,
        },
      ],
    },

    {
      id: 2,
      name: "Mangkhim-Tingmo",
      description:
        "Structural engineering and design project.",
      location: "West Sikkim",
      projectType: "Structural Design",

      images: [
        {
          imageUrl: "/images/mangkhim-tingmo.png",
          caption:
            "Mangkhim-Tingmo - Architectural View",
          isPrimary: true,
          displayOrder: 1,
        },
        {
          imageUrl:
            "/images/mangkhim-tingmo-drawings-1.png",
          caption:
            "Mangkhim-Tingmo - Structural Drawings 1",
          isPrimary: false,
          displayOrder: 2,
        },
        {
          imageUrl:
            "/images/mangkhim-tingmo-drawings-2.png",
          caption:
            "Mangkhim-Tingmo - Structural Drawings 2",
          isPrimary: false,
          displayOrder: 3,
        },
        {
          imageUrl:
            "/images/mangkhim-tingmo-drawings-3.png",
          caption:
            "Mangkhim-Tingmo - Structural Drawings 3",
          isPrimary: false,
          displayOrder: 4,
        },
      ],
    },
  ],

  ongoingProjects: [
    {
      id: 3,
      name: "Devlok",
      description:
        "Independent Engineer Assigned by Sikkim Housing and Development Board, Government of Sikkim",
      location: "Lumsey, Gangtok, East Sikkim",
      projectType: "Independent Engineer",

      images: [
        {
          imageUrl: "/images/devlok.png",
          caption: "Devlok - Site Visualization",
          isPrimary: true,
          displayOrder: 1,
        },
        {
          imageUrl:
            "/images/devlok-structural-model.png",
          caption: "Devlok - Structural Model",
          isPrimary: false,
          displayOrder: 2,
        },
        {
          imageUrl:
            "/images/devlok-drawings.png",
          caption: "Devlok - Structural Drawings",
          isPrimary: false,
          displayOrder: 3,
        },
      ],
    },
  ],
};

export default websiteData;