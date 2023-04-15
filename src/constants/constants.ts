type HistorySectionListItem = {
 title: string,
 description: string,
 org: string,
 type: string,
 location: string,
 duration: string,
 logo: string
};

type HeroSectionLinkItem = {
  label: string,
  url: string,
}

type HeroSectionConfig = {
  links: HeroSectionLinkItem[],
  greet: string,
  name: string,
  subtitle: string,
  linkedInUrl: string
}

type FeatureSectionConfigListItem = {
  svgName: string,
  title: string,
  description: string
}

type FeatureSectionConfig = {
  titleSmall: string,
  title: string,
  list: FeatureSectionConfigListItem[]
}

type HistorySectionConfig = { list: HistorySectionListItem[] }
type Constants = {
  heroSectionConfig: HeroSectionConfig,
  featureSectionConfig: FeatureSectionConfig,
  historySectionConfig: HistorySectionConfig,
}

const constants: Constants = {
  heroSectionConfig: {
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/haribalajip/"
      },
      {
        label: "Github",
        url: "https://github.com/haribalajip"
      },
      {
        label: "Stack Overflow",
        url: "https://stackoverflow.com/users/5080620/hhsb"
      },
      {
        label: "Strava",
        url: "https://www.strava.com/athletes/65738581"
      },
    ],
    greet: "Hi 👋, I'm ",
    name: "Hari Balaji",
    subtitle: "A frontend developer and a JS enthusiast building awesome features for Freshworks CRM.",
    linkedInUrl: "https://www.linkedin.com/in/haribalajip/"
  },
  featureSectionConfig: {
    titleSmall: "MY LIFE",
    title: "My daily activities",
    list: [
      {
        svgName: 'CodeIcon',
        title: "Code",
        description: "Email is a crucial area for a CRM. And I take care of Frontend engineering for email and email related features."
      },
      {
        svgName: 'AnnotationIcon',
        title: "Do code reviews for peers",
        description: "I ensure that the code shipped from our squad is of world class quality. I also make sure that the code conforms to our product's coding standards."
      },
      {
        svgName: 'UserGroupIcon',
        title: "Collaborate",
        description: "I engage with my team in conversations where my advice makes value. Often, I see myself mentoring a few new joiners."
      },
      {
        svgName: 'HeartIcon',
        title: 'Run a mile',
        description: "I love mornings. And I love running. What more else one would would ask when the weather is great for a morning run! I make sure I do one mile run atleast 4 days a week."
      }
    ]
  },
  historySectionConfig: {
    list: [
      {
        title: "Senior software engineer - Frontend",
        description: "Working as a Senior frontend engineer and acting as a Squad lead, for the Email squad. Where I write maintainable code. I also ensure that the code that my peers write don't compromise on quality.",
        org: "Freshworks",
        type: "Full-time",
        location: "Chennai",
        duration: "Apr 2018 - Present",
        logo: "fw-logo.svg"
      },
      {
        title: "Project engineer",
        description: "I built router health monitoring apps that relies on data visualization for clients such as Nokia, and Ericsson.",
        org: "Wipro Ltd",
        type: "Full-time",
        location: "Chennai",
        duration: "Aug 2015 - Apr 2018",
        logo: "wipro_logo.svg"
      }
    ]
  }
};
export default constants;