import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";
import { TbXboxXFilled } from "react-icons/tb";

import { API_URL } from "../../App";

const Menu = (props) => {
  const [infoPerso, setInfoPerso] = useState([]);

  const getInfoPerso = async () => {
    try {
      const result = await axios.get(`${API_URL}/infoPerso`);
      setInfoPerso(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getInfoPerso();
  }, []);

  useEffect(() => {}, [infoPerso]);

  const popupContactRef = useRef();
  const PopupContact = () => {
    popupContactRef.current.style.display = "flex";
    document.body.style.overflow = "hidden";
  };
  const PopupContactClose = () => {
    popupContactRef.current.style.display = "none";
    document.body.style.overflow = "auto";
  };

  return (
    <div className="menu" style={{ background: props.menuColor }}>
      <div className="buttonGroup">
        <button
          className="button"
          style={{
            borderTop: props.borderTop,
            borderRight: props.borderRight,
            borderBottom: props.borderBottom,
            borderLeft: props.borderLeft,
          }}
          onClick={() => PopupContact()}
        >
          <p className="avisContact">Me contacter</p>
          <div
            className="opacity"
            style={{ background: props.buttonBackgroundColor }}
          ></div>
        </button>
        <a
          className="displayCV"
          href="https://drive.google.com/file/d/1ycHT7m7HWYagyBR-sD1c1iS6f4uQ8Vtt/view?usp=drive_link"
          download="CV_Olivier_Naud.pdf"
        >
          <button
            className="button"
            style={{
              borderTop: props.borderTop,
              borderRight: props.borderRight,
              borderBottom: props.borderBottom,
              borderLeft: props.borderLeft,
            }}
          >
            <p className="avisContact">Mon CV</p>
          </button>
        </a>
      </div>
      <div className="popupContact" ref={popupContactRef}>
        <div className="contact">
          <div
            className="imgContact"
            style={{
              backgroundImage: `url(${API_URL}/images/${infoPerso[0]?.imageinfo.img})`,
            }}
          ></div>
          <div className="ficheContact">
            <div className="nomContact">
              {infoPerso[0]?.nom} {infoPerso[0]?.prenom}
            </div>
            <div className="metierContact">
              <div>
                <RiComputerFill />
              </div>
              <div>{infoPerso[0]?.metier}</div>
            </div>
            <div className="mailContact">
              <div>
                <IoMdMail /> Mail :{" "}
                <a href={`mailto:{${infoPerso[0]?.adresse_mail}`}>
                  {infoPerso[0]?.adresse_mail}
                </a>{" "}
              </div>
            </div>
            <div className="phoneContact">
              <div>
                <FaPhoneSquareAlt /> Téléphone :{" "}
                <a href={`tel:{${infoPerso[0]?.telephone}}`}>
                  {infoPerso[0]?.telephone}
                </a>
              </div>
            </div>
            <div className="reseauContact">
              <div className="linkedin">
                <FaLinkedin />
                <a href={infoPerso[0]?.linkedin}>Linkedin</a>
              </div>
              <div className="github">
                <FaGithub />
                <a href={infoPerso[0]?.github}>Github</a>
              </div>
            </div>
          </div>
          <div className="closePopup" onClick={() => PopupContactClose()}>
            <TbXboxXFilled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
