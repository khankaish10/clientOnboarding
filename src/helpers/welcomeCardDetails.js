
import {FaBusinessTime} from 'react-icons/fa'
import {BiPaintRoll} from 'react-icons/bi'
import {BsReverseLayoutSidebarReverse} from 'react-icons/bs'
import {MdBusinessCenter} from 'react-icons/md'

const welcomeCardDetails = [
  {
    id: 1,
    isVisible: true,
    cardHeading: "Intro",
    Icon: BiPaintRoll,
    questions: [
      {
        id: 1001,
        q: "What is your desired project deadline?",
        placeholder: "",
        name: "desiredproject",
        value: "desiredproject",
      },
    ],
    videoLink: "https://www.youtube.com/embed/SMKPKGW083c",
  },

  {
    id: 2,
    isVisible: false,
    cardHeading: "Business Details",
    Icon: FaBusinessTime,
    questions: [
      {
        id: 1002,
        q: "Business Name & License ?",
        placeholder:
          "Requirement: Must have a business name secured and business license purchased before retaining our services. If you need some help choosing your name a securing a license check out our tip here. (link coming soon)",
        name: "businessname",
        value: "businessname",
      },
      {
        id: 1003,
        q: "The business name you want in your logo?",
        placeholder: "Your business logo...",
        name: "businessnamelogo",
        value: "businessnamelogo",
      },
      {
        id: 1004,
        q: "Do you have a slogan you want to be incorporated in your logo?",
        placeholder: "ex: open happiness, just do it.",
        name: "slogan",
        value: "slogan",
      },
      {
        id: 1005,
        q: "And If you could choose three words to describe your brand, what would those be?",
        placeholder: "three words to describe your project...",
        name: "threeword",
        value: "threeword",
      },
      {
        id: 1006,
        q: "Business Address:",
        placeholder: "ex: 13th street 47w newyork",
        name: "businessaddress",
        value: "businessaddress",
      },
      {
        id: 1007,
        q: "Phone:",
        placeholder: "+123456789",
        name: "phone",
        value: "phone",
      },
      {
        id: 1008,
        q: "Email:",
        placeholder: "youremail@email.com",
        name: "email",
        value: "email",
      },
      {
        id: 1009,
        q: "Links to all Social Media Accounts:",
        placeholder: "link to social media",
        name: "linktosocialmedia",
        value: "linktosocialmedia",
      },
    ],
    videoLink: "https://www.youtube.com/embed/ftlvreFtA2A",
  },
  {
    id: 3,
    isVisible: false,
    cardHeading: "About Your Business",
    Icon: MdBusinessCenter ,
    questions: [
      {
        id: 1010,
        q: "Please describe what your organization or product does:",
        placeholder:
          "Requirement: Three qualitative statements about what you offer.",
        name: "whatyourorganization",
        value: "whatyourorganization",
      },
      {
        id: 1011,
        q: "Who is your target audience:",
        placeholder:
          "Requirement: Three qualitative statements about what your client wants.",
        name: "targetaudience",
        value: "targetaudience",
      },
      {
        id: 1012,
        q: "Tell me about the industry you are in?",
        placeholder: "about industry",
        name: "aboutindustry",
        value: "aboutindustry",
      },
      {
        id: 1013,
        q: "What is the prevailing wisdom and do you feel you operate differently? ",
        placeholder: "prevailing wisdom",
        name: "prevailingwisdom",
        value: "prevailingwisdom",
      },
      {
        id: 1014,
        q: "What are the core values of your business?",
        placeholder: "core values",
        name: "corevalue",
        value: "corevalue",
      },
    ],
    videoLink: "https://www.youtube.com/embed/YRyLAR6A1Wc",
  },

  {
    id: 4,
    isVisible: false,
    cardHeading: "All About You!",
    Icon: BsReverseLayoutSidebarReverse,
    questions: [
      {
        id: 1015,
        q: "What is life about for you?",
        placeholder:
          "life to me is learning to work with the good and the ugly and allowing them not to define me - but to shape me into who I am, and who I want to be.",
        name: "life",
        value: "life",
      },
      {
        id: 1016,
        q: "In life, what driving needs are you most motivated by:",
        // name:"drivingneeds",
        // value: "drivingneeds",
        selectionBoxes: [
          {
            id: 121,
            isChecked: false,
            name:
              "Certainty/Security: assurance you can avoid pain and gain pleasure, perhaps most importantly that you can have your needs met and feel safety and comfort.",
          },
          {
            id: 120,
            isChecked: false,
            name:
              "Freedom/Uncertainty/Variety: the need for the unknown, change, new stimul",
          },
          {
            id: 119,
            isChecked: false,
            name:
              "Identity/Significance: a belief that you matter, are unique, important, special, and are needed.",
          },
          {
            id: 118,
            isChecked: false,
            name:
              "Connection/Community/Acceptance: feeling linked, close, or associated with a person, people, or idea.",
          },
          {
            id: 117,
            isChecked: false,
            name:
              "Love/Empathy/Passion: a strong feeling of deep care or empathy for someone or something",
          },
          {
            id: 116,
            isChecked: false,
            name:
              "Creation/Expression/Purpose: enjoy bringing something into existence. Fueled by a need to create.",
          },
          {
            id: 115,
            isChecked: false,
            name:
              "Growth/Development/Mastery: an expansion of capacity, capability, or understanding.",
          },
          {
            id: 114,
            isChecked: false,
            name:
              "Contribution/Empowerment/Inspire: a sense of service and focus on helping, giving to, and supporting others.",
          },
        ],
      },
    ],
    videoLink: "https://www.youtube.com/embed/YRyLAR6A1Wc",
  },
];

export default welcomeCardDetails;
