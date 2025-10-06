export interface Project {
  title: string
  description: string
  link: string
  techStack: string[]
}

export const portfolio = {
  name: "Your Name",
  description: "Short tagline or role",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "…",
    // etc
  },
  projects: <Project[]>[
    {
      title: "Project A",
      description: "…",
      link: "https://…",
      techStack: ["React", "Tailwind", "TypeScript"],
    },
    // more
  ],
}
