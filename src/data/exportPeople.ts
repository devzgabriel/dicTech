import GabrielImg from "../assets/photos/gabriel.jpg";
import SarahImg from "../assets/photos/sarah.jpeg";
import AnaLuizaImg from "../assets/photos/analuiza.png";
import MoniqueImg from "../assets/photos/monique.png";
import YasminImg from "../assets/photos/yasmin.png";
import MarianaImg from "../assets/photos/mariana.png";
import DefaultImg from "../assets/photos/default.jpg";

export default function People() {
  return {
    creators: [
      {
        avatar: GabrielImg,
        bio:
          "An eternal student looking for experience, but able to create solutions like a teacher!",
        name: "Roberto Gabriel Silva",
        occupation: "Programador e Pesquisador",
      },
      {
        avatar: SarahImg,
        bio: "Student at ETE FMC",
        name: "Sarah Beatriz",
        occupation: "Designer e Pesquisadora",
      },
      {
        avatar: AnaLuizaImg,
        bio: "Student at ETE FMC",
        name: "Ana Luiza",
        occupation: "Designer",
      },
      {
        avatar: MoniqueImg,
        bio: "Student at ETE FMC",
        name: "Monique",
        occupation: "Pesquisadora",
      },
      {
        avatar: YasminImg,
        bio: "Student at ETE FMC",
        name: "Yasmin",
        occupation: "Pesquisadora",
      },
      {
        avatar: MarianaImg,
        bio: "Student at ETE FMC",
        name: "Mariana",
        occupation: "Pesquisadora",
      },
    ],
  };
}
