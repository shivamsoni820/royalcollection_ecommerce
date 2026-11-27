import {
  LuSmartphone,
  LuCable,
  LuHeadphones,
  LuPlugZap,
  LuSpeaker
} from "react-icons/lu";

const categories = [
  {
    id: 1,
    name: "Mobiles",
    slug: "mobiles",
    icon: LuSmartphone,
    count: 5
  },
  {
    id: 2,
    name: "Mobile Accessories",
    slug: "mobile-accessories",
    icon: LuCable,
    count: 10
  },
  {
    id: 3,
    name: "Headphones & Earbuds",
    slug: "headphones",
    icon: LuHeadphones,
    count: 15
  },
  {
    id: 4,
    name: "Chargers",
    slug: "chargers",
    icon: LuPlugZap,
    count: 5
  },
  {
    id: 5,
    name: "Speakers",
    slug: "speakers",
    icon: LuSpeaker,
    count: 12
  }
];

export default categories;