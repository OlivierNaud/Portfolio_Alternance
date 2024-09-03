import axios from "axios";
import { useEffect, useState } from "react";

const ProjetPerso = () => {
  //PROJET DATA
  const [projetEntreprise, setProjetEntreprise] = useState([]);

  const getProjetEntreprise = async () => {
    try {
      const result = await axios.get("http://localhost:5000/projet");
      const filter = result.data.filter((projet) => projet.id_tagProjet === 3);
      setProjetEntreprise(filter);
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
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getProjetEntreprise();
    getProjetTechno();
  }, []);

  useEffect(() => {}, [projetEntreprise, projetTechno]);
  return (
    <div className="projetPerso">
      <h2 className="degradText">Projet Entreprise et Ecole</h2>
      <div className="imgAllProjetBloc">
        {/* x3 */}
        {projetEntreprise.map((projet) => (
          <div
            key={projet.id}
            style={{
              backgroundImage: `url(http://localhost:5000/images/${projet.id_image_image.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="imgBloc"
          >
            <div className="technoLienProjetPerso">
              <div className="technoBloc">
                {projetTechno
                  .filter((tp) => tp.id_projet === projet.id_projet)
                  .map((tp) => (
                    <div key={tp.id_techno} className="techno">
                      {tp.id_technologie_technologie.nom}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="descriptionProjet">
        {projetEntreprise.map((projet) => (
          <div className="hoverDescription">
            <h3 className="degradText">{projet.nom}</h3>
            <p>{projet.resume}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjetPerso;
