import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../App";

function AboutMe() {
  const [infoPerso, setInfoPerso] = useState([]);

  const getInfoPerso = async () => {
    try {
      const result = await axios.get(`${API_URL}/infoPerso`);
      setInfoPerso(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  const [technologieExpert, setTechnologieExpert] = useState([]);
  const [technologieMedium, setTechnologieMedium] = useState([]);
  const getTechnologie = async () => {
    try {
      const resultTechnologie = await axios.get(`${API_URL}/technologie`);
      const filterExpert = resultTechnologie.data.filter(
        (techno) => techno.id_niveauTechno === 3 && techno.nom !== "HTML- CSS"
      );
      setTechnologieExpert(filterExpert);

      const filterMedium = resultTechnologie.data.filter(
        (techno) => techno.id_niveauTechno === 2
      );
      setTechnologieMedium(filterMedium);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInfoPerso();
    getTechnologie();
  }, []);

  useEffect(() => {}, [infoPerso, technologieExpert, technologieMedium]);

  return (
    <div className="aboutMe">
      <div className="photo">
        <div
          className="taillePhoto"
          style={{
            backgroundImage: `url(${API_URL}/images/${infoPerso[0]?.imageinfo.img})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="aboutSkillBlock">
        <div className="aboutmeBlock">
          <h2>
            <span className="degradText">A propos de moi</span>
          </h2>
          <p>{infoPerso[0]?.resume}</p>
        </div>
        <div className="skillsBlock">
          <h2>
            <span className="degradText">SKILLS</span>
          </h2>
          <div className="technoPrincipale">
            <span></span>
            {technologieExpert.map((techno) => (
              <img
                key={"tech_expert" + techno.id_technologie}
                src={`${API_URL}/images/${techno.imagetechno.img}`}
                alt=""
              />
            ))}
          </div>
          <div className="technoMedium">
            {technologieMedium.map((techno) => (
              <img
                key={"tech_medium" + techno.id_technologie}
                src={`${API_URL}/images/${techno.imagetechno.img}`}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
