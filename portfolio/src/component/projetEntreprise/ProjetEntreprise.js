import axios from "axios";
import { useEffect, useState } from "react";

const ProjetEntreprise = () => {
  const [projetPersonnel, setProjetPersonnel] = useState([]);

  const getProjetPersonnel = async () => {
    try {
      const resultProjet = await axios.get("http://localhost:5000/projet");
      const filter = resultProjet.data.filter(
        (projet) => projet.id_tagProjet === 1
      );
      setProjetPersonnel(filter);
    } catch (err) {
      console.error(err);
    }
  };

  //PROJET TECHNO DATA
  const [projetTechno, setProjetTechno] = useState([]);

  const getProjetTechno = async () => {
    try {
      const oui = await axios.get("http://localhost:5000/projettechno");
      setProjetTechno(oui.data);
      console.log(projetTechno);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getProjetPersonnel();
    getProjetTechno();
  }, []);

  useEffect(() => {}, [projetPersonnel, projetTechno]);
  return (
    <div className="projetEcole">
      <div className="containerGlobal">
        {projetPersonnel.map((projet) => (
          <div className="containerBloc">
            <div className="projet">
              <div
                className="imgProjet"
                style={{
                  backgroundImage: `url(http://localhost:5000/images/${projet.id_image_image.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="hoverTechnoLienEcole">
                  <div className="technoEcole">
                    {projetTechno
                      .filter((tp) => tp.id_projet === projet.id_projet)
                      .map((tp) => (
                        <div key={tp.id_techno}>
                          {tp.id_technologie_technologie.nom}
                        </div>
                      ))}
                  </div>
                  <div className="lienEcole">
                    <a
                      href={projet.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div className="cercleBloc">
                <div className="cercle" style={{ "--i": 1 }}></div>
                <div className="cercle" style={{ "--i": 2 }}></div>
                <div className="cercle" style={{ "--i": 3 }}></div>
              </div>
              <div className="resumeProjetEcole">
                <h3 className="degradText">{projet.nom}</h3>
                <p>{projet.resume}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjetEntreprise;
