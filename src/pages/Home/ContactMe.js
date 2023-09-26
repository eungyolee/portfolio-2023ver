import {
  faGithub,
  faInstagram,
  faFacebook,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText, } from "@fortawesome/free-solid-svg-icons";

const ContactMe = [
  {
    id: 1,
    content: "eunkyo081223@naver.com",
    href: "mailto:eunkyo081223@naver.com",
    icon: faEnvelopeOpenText
  },
  {
    id: 2,
    content: "https://github.com/eungyolee",
    href: "https://github.com/eungyolee",
    icon: faGithub
  },
  {
    id: 3, 
    content: "@eungyolee_",
    href: "https://www.instagram.com/eungyolee_/",
    icon: faInstagram
  },
  {
    id: 4,
    content: "이은교",
    href: "https://www.facebook.com/profile.php?id=100025765211896",
    icon: faFacebook
  },
  {
    id: 5,
    content: "eungyolee",
    href: "https://discord.com/users/782167918452146176",
    icon: faDiscord
  }
];

export default ContactMe;