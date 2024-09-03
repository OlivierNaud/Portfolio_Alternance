const express = require("express");
const {
  getInfoPerso,
  setInfoPerso,
} = require("../controllers/infoPerso.controller");

const { getImage } = require("../controllers/image.controller");

// const multer = require("../middleware/multer.config");
const { getAccueil, setAccueil } = require("../controllers/accueil.controller");

const {
  getNiveauTechno,
  setNiveauTechno,
} = require("../controllers/niveautechno.controller");

const {
  getTagProjet,
  setTagProjet,
} = require("../controllers/tagprojet.controller");

const {
  getTechnologie,
  setTechnologie,
} = require("../controllers/technologie.controller");
const { getProjet, setProjet } = require("../controllers/projet.controller");
const {
  getProjettechno,
  setProjettechno,
} = require("../controllers/projettechno.controller");

const router = express.Router();

router.get("/infoPerso", getInfoPerso);
router.post("/infoPerso/post", setInfoPerso);

router.get("/image", getImage);
// router.post("/image/post", multer, setImage);

router.get("/accueil", getAccueil);
router.post("/accueil/post", setAccueil);

router.get("/niveautechno", getNiveauTechno);
router.post("/niveautechno/post", setNiveauTechno);

router.get("/tagprojet", getTagProjet);
router.post("/tagprojet/post", setTagProjet);

router.get("/technologie", getTechnologie);
router.post("/technologie/post", setTechnologie);

router.get("/projet", getProjet);
router.post("/projet/post", setProjet);

router.get("/projettechno", getProjettechno);
router.post("/projettechno/post", setProjettechno);

// router.put("/:id", (req, res) => {
//   res.json({ messageId: req.params.id });
// });

// router.delete("/:id", (req, res) => {
//   res.json({ message: "Post supprimé id : " + req.params.id });
// });

module.exports = router;
