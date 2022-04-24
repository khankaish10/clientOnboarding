
import * as images from '../images/images'

import { SiMaterialdesign } from "react-icons/si";
import { GiSwordBrandish } from "react-icons/gi";
import { AiOutlineBgColors, AiOutlineCloudUpload } from "react-icons/ai";
import { ImFont } from "react-icons/im";
import { MdMood } from "react-icons/md";
import { BsImages } from "react-icons/bs";

const designCardDetails = [
  {
    id: 11,
    isVisible: true,
    cardHeading: "Design Preference",
    Icon: SiMaterialdesign,
    questions: [
      {
        id: 2001,
        q: "Which designs stand out to you the most? Pick as many as you like.",
        selectionBoxes: [
          {
            id: 221,
            url: `${images.vintage}`,
            name: "vintage",
            isChecked: false,
          },
          {
            id: 220,
            url: `${images.masculine}`,
            name: "masculine",
            isChecked: false,
          },
          {
            id: 219,
            url: `${images.typographic}`,
            name: "typography",
            isChecked: false,
          },
          {
            id: 218,
            url: `${images.feminime}`,
            name: "feminime",
            isChecked: false,
          },
        ],
      },
    ],
    videoLink: "https://www.youtube.com/embed/SMKPKGW083c",
  },
  {
    id: 12,
    isVisible: false,
    cardHeading: "Select Your Brand Style",
    Icon: GiSwordBrandish,
    questions: [
      {
        id: 2002,
        slider: [
          {
            id: 901,
            from: "Classic",
            to: "Modern",
            name: "classic"
          },
          {
            id: 902,
            from: "Mature ",
            to: "Youthful",
            name: "mature"
          },
          {
            id: 903,
            from: "Feminine",
            to: "Masculine",
            name: "feminine",
          },
          {
            id: 904,
            from: "Playful",
            to: "Sophisticated",
            name: "playful",
          },
          {
            id: 905,
            from: "Economical",
            to: "Luxurious",
            name: "economical"
          },
          {
            id: 906,
            from: "Geometric",
            to: "Organic",
            name: "geometric"
          },
          {
            id: 907,
            from: "Abstract",
            to: "Literal",
            name: "abstract"
          },
        ],
      },
    ],

    videoLink: "https://www.youtube.com/embed/SMKPKGW083c",
  },
  {
    id: 13,
    isVisible: false,
    cardHeading: "Color’s to Explore",
    Icon: AiOutlineBgColors,
    questions: [
      {
        id: 2003,
        q: "Any Scheme you are more attracted to?",
      },
      {
       id: 2004,
       selectOptions: [
        {
          id: 908,
          option: "Monochromatic",
          name: "monochromatic",
        }, 
        {
          id: 909,
          option: "Bright/Colorful",
          name: "bright",
        }, 
        {
          id: 910,
          option: "Neutral Pallet",
          name: "neutral",
        }, 
        {
          id: 911,
          option: "Let Designer Choose",
          name: "letDesignerChoose",
        }, 
       ]
      }
    ],

    videoLink: "https://www.youtube.com/embed/SMKPKGW083c",
  },
  {
    id: 14,
    isVisible: false,
    cardHeading: "Typeface:",
    Icon: ImFont,
    questions: [
      {
        id: 20051, // mistake in the series of the number so I wrote it as 2005--- 20051
        q: "Any type faces you are drawn to?",
        placeholder:
          "Describe your font preferences, or share some inspirations. You are limited to revisions so the more information we can collect about your desires will eliminate additional design fees. We like dafont.com to give you a free resource to find inspiration or, of course, Pinterest!",
        name: "typeface",
        value: "typeface",
      },
    ],

    videoLink: "https://www.youtube.com/embed/SMKPKGW083c",
  },
  {
    id: 15,
    isVisible: false,
    cardHeading: "Mood",
    Icon: MdMood,
    questions: [
      {
        id: 2005,
        q: "Feel and Mood:",
        placeholder:
          "Please share a link to your inspiration board on Pinterest: (try to include colors, logos, fonts and texture/mood inspiration. Take time to build this on a desktop and make notes under each pin to share what you're attracted to in that image. Be specific about what you like and don't like.",
        name: "feelandmood",
        value: "feelandmood",
      },
    ],

    videoLink: "https://www.youtube.com/embed/SMKPKGW083c",
  },
  {
    id: 16,
    isVisible: false,
    cardHeading: "Website Images",
    Icon: BsImages,
    questions: [
      {
        id: 2006,
        q: "Provide Site Images:",
        // placeholder:
        //   "Please share a link to your inspiration board on Pinterest: (try to include colors, logos, fonts and texture/mood inspiration. Take time to build this on a desktop and make notes under each pin to share what you're attracted to in that image. Be specific about what you like and don't like.",
        // name: "feelandmood",
        // value: "feelandmood",
      },
    ],
    requirement: "Please Note: All images need to be sized, labeled and organized for delivery appropriately. See our post on how to do this",
    videoLink: "https://www.youtube.com/embed/SMKPKGW083c",
  },
  {
    id: 17,
    isVisible: false,
    cardHeading: "Upload Assets",
    Icon: AiOutlineCloudUpload,
    questions: [
      {
        id: 2007,
        q: "Upload Assets:",
        // placeholder:
        //   " Any current logos, design elements or assets we have agreed to incorporate can be uploaded here.",
        // name: "feelandmood",
        // value: "feelandmood",
      },
    ],
    requirement: "Please Note: Any current logos, design elements or assets we have agreed to incorporate can be uploaded here.",
    videoLink: "https://www.youtube.com/embed/SMKPKGW083c",
  },
];

export const allSwatchColors = [
  [
    '#E3998E', '#E5A79C', '#C39F89', '#CBAC9A', '#E7C0AF', '#E9CDC2', '#EAD6CD', '#AB8874', '#E6AD92', '#F2C7A5',
    '#C4B8AA','#D4B69A','#CFA984','#D5A774','#CC9A65','#BD8B56','#C58347','#E8E1CF','#D5C8B8','#AE866D',
    '#62766A','#7C8E82','#8F9595','#ACB0AF','#9A8F79','#B9B0A1','#AB9E8B','#6A5E38','#69694F','#717260',
  ],
  [
    '#1b3848', '#2b5d76', '#317395', '#235764', '#2c6e7e', '#3e8194', '#c4ded3', '#adcbbf', '#95b5a8', '#7ba894',
    '#1a286f', '#063b49', '#36a6b1', '#68e2d3', '#b0ede5', '#a4b7b5', '#babad2', '#a97cbf', '#663d8b', '#431e4a',
    '#431e4a', '#a91f5d', '#d81981', '#e26a90', '#f0c6d0', '#f5cbd5', '#c0b0b1', '#998181', '#7a6262', '#59275a'
  ],                            
  [
    '#fa50a9', '#932c59', '#ebc9ca', '#f4bdc0', '#ef929c', '#d7b1e2', '#9e75ad', '#562868', '#fb507a', '#fd95ad',
    '#16774a', '#0f5636', '#052b16', '#a6cf59', '#54b649', '#e9e14e', '#f9ee5e', '#ffd308', '#fbdf58', '#fff3ab',
    '#7ed4b1', '#2ca464','#707ba9', '#99a7d8', '#f68121', '#ffa14a', '#eb7545', '#f8672e', '#213aae', '#192684',
  ],
  [
    '#842c28', '#a53820', '#cb5642', '#ed703a', '#a4543b', '#de9954', '#f5b051', '#f1c16d', '#cfa55d', '#d4b072',
    '#d87087', '#eb899e', '#e5a6b9', '#c9636e', '#d97985', '#f1949f', '#f9b6bf', '#b56c65', '#964d47', '#5d3939',
    '#a1646c', '#c78390', '#e3a4af', '#f2dedd', '#e8d3d2', '#d9c1bf', '#ff9192', '#fb7a7e', '#e15c5f', '#c4494b',
  ],
]

export default designCardDetails;
