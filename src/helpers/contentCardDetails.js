import { CgWebsite } from "react-icons/cg";
import { SiMicrostrategy } from "react-icons/si";
import { SiOpenaccess } from "react-icons/si";

const contentCardDetails = [
  {
    id: 21,
    isVisible: true,
    cardHeading: "Your Website",
    Icon: CgWebsite,

    questions: [
      {
        id: 3001,
        q: "About Page",
        placeholder:
          "Let's get clear about the purpose of an About page and what we need to craft a page that converts: We will need a bit from you outlined in the accompanying video. Watch it as much as you need to answer this section well.",
        name: "AboutPage",
        value: "AboutPage",
      },
      {
        id: 3002,
        q: "Home Page:",
        placeholder:
          "What are the most important things that need to happen on your home page?",
        name: "HomePage",
        value: "HomePage",
      },
      {
        id: 3003,
        q: "Contact:",
        placeholder:
          "What contact information do you want to be displayed on your site? If you are using a submission form for an email campaign service we need access to this email service account or find the appropriate link for embedding.",
        name: "Contact",
        value: "Contact",
      },
      {
        id: 3004,
        q: "Menu Preferences:",
        placeholder: "What Navigation menu options do you want for your site?",
        name: "MenuPreferences",
        value: "MenuPreferences",
      },
      {
        id: 3005,
        q: "Products or Services:",
        placeholder:
          "Do you need a commerce section or isolated page sharing the details and pricing of your services? What information do you want to be sure people know or you can direct them to in order to get a greater understanding of what you do and or make a purchase?",
        name: "ProductsorService",
        value: "ProductsorService",
      },
      {
        id: 3006,
        q: "Custom Pages:",
        placeholder:
          "Are there additional pages needed to compliment the basics and set your site apart. Describe in detail each page and what your hopes are for this page.",
        name: "CustomPages",
        value: "CustomPages",
      },
      {
        id: 3007,
        q: "Dynamic Content:",
        placeholder:
          "This is usually your blog section that has frequently updated content and information that changes often to encourage visitors (and search engines) to keep returning to your site. A blog, news page, videos, and a forum are great ways to keep your site fresh and accomplish this goal. How will create dynamic content that serves a mutual value exchange?",
        name: "DynamicContent",
        value: "DynamicContent",
      },
    ],
    videoLink: "https://www.youtube.com/embed/SMKPKGW083c",
  },
  {
    id: 22,
    isVisible: false,
    cardHeading: "Content Strategy ",
    Icon: SiMicrostrategy,
    questions: [
      {
        id: 3008,
        q: "Personal Clarity:",
        placeholder:
          "We have likely already discussed how we will incorporate this piece into your project but here is your opportunity to share some dreams and details about your desires for integration and fulfillment. What can you share here that will help me support you and your endeavors?",
        name: "PersonalClarity",
        value: "PersonalClarity",
      },
      {
        id: 3009,
        q: "Dynamic Content Strategy:",
        placeholder:
          "List your pillars of truth/content and 5 post ideas for each pillar. (See video)",
        name: "DynamicContentStrategy",
        value: "DynamicContentStrategy",
      },
      {
        id: 3010,
        q: "Social Media",
        placeholder:
          "We are building your strategy based on your pillars and this will funnel down from your larger content blocks discussed in the blog section. Use this section to brainstorm some content ideas, work to share your desires here regardless of your execution skills. What would you like to see happen and what do you want to cultivate on your social channels?",
        name: "SocialMedia",
        value: "SocialMedia",
      },
      {
        id: 3011,
        q: "Email/Newsletter:",
        placeholder:
          "If we are to support your growth desires we highly recommend having a connection to your audience you own. What kinds of value can you share to your subscribers? ",
        name: "Email_Newsletter",
        value: "Email_Newsletter",
      },
    ],
    videoLink: "https://www.youtube.com/embed/SMKPKGW083c",
  },

  {
    id: 23,
    isVisible: false,
    cardHeading: "Account Access:",
    Icon: SiOpenaccess,
    questions: [
      {
        id: 3012,
        q: "All of the following must be completed to be put in the design queue and submit this form. ",
        selectionBoxes: [
          {
            id: 321,
            name: "Purchase and set up a domain email @yourbusiness.com",
            isChecked: false,
          },
          {
            id: 320,
            name: "Set up Google Search Console and add hello@clientonboarding as an admin.",
            isChecked: false,
          },
          {
            id: 319,
            name: "Set Up Google Analytics for your domain and add hello@clientonboarding as an admin. ",
            isChecked: false,
          },
          {
            id: 318,
            name: "Set up your Google My Business Listing and add us as a user. ",
            isChecked: false,
          },
          {
            id: 317,
            name: "Add us as an administrator on your website platform.",
            isChecked: false,
          },
        ],
      },
    ],
    videoText:
      "Anything we have negotiated to adjust for you we need administrative access to. Please set us up as an admin with hello@clientonboarding.com in your website back end.This may include your social media accounts, your google account, your website domain provider, and your host. You must have your passwords tested and access granted for us to add you to the design queue.",
    videoLink: "https://www.youtube.com/embed/SMKPKGW083c",
  },
  {
    id: 24,
    isVisible: false,
    cardHeading: "Social Account Access",
    Icon: SiMicrostrategy,
    questions: [
      {
        id: 3013,
        q: "Username",
        placeholder: "please provide account username",
        name: "username",
        value: "username",
      },
      {
        id: 3014,
        q: "password",
        placeholder: "please provide your password",
        name: "password",
        value: "password",
      },
    ],
    videoText:
      "Please provide any accounts you want us to have access to as part of your marketing strategy and negotiated social posts. This means we need your username and password or if you can add a user, create our own username and password where you can and share those credentials with us here.",
    videoLink: "https://www.youtube.com/embed/SMKPKGW083c",
  },
];

export default contentCardDetails;
