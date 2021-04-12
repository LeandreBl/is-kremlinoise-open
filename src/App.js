import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Card, Container, Jumbotron } from "react-bootstrap";
import ThibautContentTarte from "./assets/thibaut-content.png";
import MarcPasContent from "./assets/marc_pas_content.png";
import AstekPoContent from "./assets/astek_po_content.jpg";
import FlyToKremlinoise from "./assets/fly_to_kremlinoise.png";
import RomainSad from "./assets/romain_sad.jpg";
import ISleepWell from "./assets/i_sleep_well.jpg";
import JeremyContent from "./assets/jeremy_content.png";
import JeSuisSiContent from "./assets/je_suis_si_content.jpg";
import LaTailleDesJeannetes from "./assets/la_taille_des_jeannettes.jpg";
import PizzaChevre from "./assets/ho_oui_la_pizza_chevre.jpg";
import BeurkCafet from "./assets/beurk_la_cafet.jpeg";
import TartesAuCitron from "./assets/ho_oui_les_tartes_au_citron.jpg";
import PrevientBro from "./assets/previent_bro.jpg";

const imgs_urls = [
  {
    url:
      "https://www.pagesjaunes.fr/media/ugc/la_kremlinoise_09404300_114940656",
    msg: "Un batiment d'exception !",
  },
  {
    url:
      "https://lh5.googleusercontent.com/p/AF1QipOO0lshBb1eRUWwgAOpXyQsO2OZT3KkCO-IGKxe=s508-k-no",
    msg: "Des patisseries à couper le soufle !",
  },
  {
    url:
      "https://lh5.googleusercontent.com/p/AF1QipNsaC904OUM4W0GyTSAbtz5e2ei8c8Hn4fiE0MU=s508-k-no",
    msg: "Des gateaux, pour 6 personnes !",
  },
  {
    url:
      "https://lh5.googleusercontent.com/p/AF1QipOLRc6wNOZSzUzRlMl6CKKkcExdjUAkrHVX0QYc=s387-k-no",
    msg: "Une panoplie toujours grandissante de pâtisseries !",
  },
  {
    url:
      "https://lh5.googleusercontent.com/p/AF1QipP6ge4KgM1-ZyHINlp-agvadCDeEBeSeXr2MITR=s451-k-no",
    msg: "De délicieux éclairs aux multiples parfums !",
  },
  {
    url:
      "https://lh5.googleusercontent.com/p/AF1QipPntMWjJWE2OtUzHGfm6jUB44IGa-MhNKXp76Nx=s387-k-no",
    msg: "Venez essayer nos incroyables milles-feuilles !",
  },
];

const ptites_images_droles = {
  ptitsmessages: {
    open: [
      "Ho oui, allons-y nous régaler !",
      "Hihihi, super !",
      "Mais Dora, il va falloir traverser le Kremlin-Bicetre",
      "Super, à moi les ptites panna cotta fruits rouges !",
    ],
    closed: [
      "NOOOOOOOOOOOOOOOOOOOOOOOON mes roulades à la tomate !",
      "J'ai pas envie de manger des paninis cafèt",
      "Ah, temple de la gastronomie ce midi ?",
    ],
  },
  images: {
    open: [
      {
        msg: "Thibaut be like",
        src: ThibautContentTarte,
      },
      {
        msg: "J'enfourche mon balais, direction la Kremlinoise Harry !",
        src: FlyToKremlinoise,
      },
      {
        msg: "Je dors si bien après une bonne roulade à la tomate",
        src: ISleepWell,
      },
      {
        msg: "Moi après avoir mangé un délicieux éclair à la vanille",
        src: JeremyContent,
      },
      {
        msg: "Quoi ? LA KREMLINOISE EST OUVERTE ???!",
        src: JeSuisSiContent,
      },
      {
        msg: "OMG MATE LA TAILLE DES JEANNETTES !",
        src: LaTailleDesJeannetes,
      },
      {
        msg: "Quand je pense aux pizzas au chèvre ...",
        src: PizzaChevre
      },
      {
        msg: "Ho oui les tartes au citron !",
        src: TartesAuCitron,
      }
    ],
    closed: [
      {
        msg: "Po content",
        src: MarcPasContent,
      },
      {
        msg: "Life is sad, I cri everytim",
        src: AstekPoContent,
      },
      {
        msg: "Romain est triste ...",
        src: RomainSad,
      },
      {
        msg: "Quand t'entend le mot \"cafèt\"",
        src: BeurkCafet,
      },
      {
        msg: "\"Exceptionnelement, la Kremlinoise est fermée.\"",
        src: PrevientBro,
      }
    ],
  },
};

function DeployImages(urls) {
  return urls.map(({ url, msg }, idx) => (
    <div key={idx}>
      <h5>{msg}</h5>
      <img
        src={url}
        alt={`carousel-img-${idx}`}
        style={{ maxHeight: 200, objectFit: "cover" }}
      />
    </div>
  ));
}

function getRandomValue(array) {
  return array[(Math.random() * (array.length - 1)).toFixed(0)];
}

function isItOpenTho() {
  return ![2, 3].includes(new Date().getDay());
}

function DisplayDependingOnTime() {
  const state = isItOpenTho() ? "open" : "closed";
  const imgdrole = getRandomValue(ptites_images_droles.images[state]);
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h5 className="text-center">{imgdrole.msg}</h5>
        </Card.Title>
        <Card.Img variant="top" src={imgdrole.src} />
      </Card.Body>
    </Card>
  );
}

function App() {
  return (
    <Container fluid className="mb-3" style={{}}>
      <Jumbotron>
        <h1>
          La Kremlinoise est {isItOpenTho() ? "ouverte !!!" : "fermée :'("}
        </h1>
      </Jumbotron>
      <Container className="d-flex justify-content-center">
        {DisplayDependingOnTime()}
      </Container>
      <Container className="mb-3">
        <Carousel
          autoPlay
          centerMode
          infiniteLoop
          showArrows
          showIndicators
          showStatus
          showThumbs={false}
          useKeyboardArrows
          swipeable
          stopOnHover
        >
          {DeployImages(imgs_urls)}
        </Carousel>
      </Container>
    </Container>
  );
}

export default App;
