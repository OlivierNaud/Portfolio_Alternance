import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BsQrCode } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import AboutMe from "../aboutMe/AboutMe";
import Menu from "../menu/Menu";
import ProjetEntreprise from "../projetEntreprise/ProjetEntreprise";
import ProjetPerso from "../projetPerso/ProjetPerso";

function Portfolio() {
  // MENU
  const [menuColor, setMenuColor] = useState(
    "linear-gradient(black, transparent)"
  );
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState(
    "linear-gradient(to right, transparent, 30%, #353232)"
  );
  const [borderBottom, setBorderBottom] = useState("1px solid #353232");
  const [borderLeft, setBorderLeft] = useState("1px solid #353232");
  const [borderTop, setBorderTop] = useState("1px solid #353232");
  const [borderRight, setBorderRight] = useState("1px solid #353232");
  useEffect(() => {
    const handleScroll = () => {
      // calcul entre la taille de l'écran et le scroll
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight - 1;
      // condition pour changer les couleurs après 100vh
      if (scrollPosition > threshold) {
        setMenuColor("linear-gradient(#ffffff52, 1%, transparent)");
        setButtonBackgroundColor("linear-gradient(to right, #61DAFB, #FB61DA)");
        setBorderTop("1px solid #FB61DA");
        setBorderRight("1px solid #FB61DA");
        setBorderBottom("1px solid #61DAFB");
        setBorderLeft("1px solid #61DAFB");
      } else {
        setMenuColor("linear-gradient(black, transparent)");
        setButtonBackgroundColor(
          "linear-gradient(to right, transparent, 30%, #353232)"
        );
        setBorderTop("1px solid #353232");
        setBorderRight("1px solid #353232");
        setBorderBottom("1px solid #353232");
        setBorderLeft("1px solid #353232");
      }
    };
    //evenement du scroll
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //GET ACCUEIL
  const [accueil, setAccueil] = useState([]);

  const getAccueil = async () => {
    try {
      const result = await axios.get("http://localhost:5000/accueil");
      setAccueil(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  const [popupImg, setPopupImg] = useState([]);

  const getPopupImg = async () => {
    try {
      const result = await axios.get("http://localhost:5000/image");
      const filterPopup = result.data.filter((popup) => popup.nom === "qrcode");
      setPopupImg(filterPopup);
    } catch (err) {
      console.error(err);
    }
  };

  //POPUP
  const popup = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const popUp = () => {
    setIsOpen(!isOpen);

    popup.current.style.display = isOpen ? "none" : "flex";
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    getAccueil();
    getPopupImg();
  }, []);

  useEffect(() => {}, [accueil, popupImg]);

  return (
    <div className="all">
      {/* MENU */}
      <Menu
        menuColor={menuColor}
        buttonBackgroundColor={buttonBackgroundColor}
        borderBottom={borderBottom}
        borderLeft={borderLeft}
        borderTop={borderTop}
        borderRight={borderRight}
      />

      {/* ACCUEIL */}
      <div className="accueil">
        <div
          className="fondimg"
          style={{
            backgroundImage: `url(http://localhost:5000/images/${accueil[0]?.id_image_accueil.img})`,
          }}
        ></div>
        <div className="identite">
          <h1 className="name">Olivier Naud</h1>
          <p className="metier">Développeur Full Stack</p>
        </div>
        <div className="buttonDown"></div>
        <div className="qrcode" onClick={() => popUp()}>
          <div>CV</div>
          <IoMdDownload className="doc" />
        </div>

        <div className="containerPopup" ref={popup}>
          <div className="titreQrcode">
            <BsQrCode />
            Télécharger mon CV via ce QrCode
            <BsQrCode />
          </div>
          <div
            className="popup"
            style={{
              backgroundImage: `url(http://localhost:5000/images/${popupImg[0]?.img})`,
            }}
          ></div>
        </div>
      </div>

      {/* ABOUTME */}
      <AboutMe />

      {/* PROJET PERSO */}
      <ProjetPerso />

      {/* PROJET ENTREPRISE */}
      <ProjetEntreprise />
    </div>
  );
}

export default Portfolio;
