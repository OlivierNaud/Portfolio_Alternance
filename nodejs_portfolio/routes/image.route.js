const express = require("express");
const router = express.Router();
const path = require("path");

// Importer votre configuration Multer et votre contrôleur pour les images
const multerConfig = require("../middleware/multer.config");
const { setImage, updateImage } = require("../controllers/image.controller");

// Définir la route pour la création d'images
router.post("/image/post", multerConfig.single("img"), setImage);

router.put("/updateImage/:id", multerConfig.single("img"), updateImage);

// Définir la route pour servir les images statiques
router.use("/", express.static(path.join(__dirname, "../images")));

module.exports = router;
