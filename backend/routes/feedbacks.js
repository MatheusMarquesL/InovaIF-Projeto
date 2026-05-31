const express = require("express");
const router = express.Router();

const feedbacks = [
    {
        nome: "Maria",
        comentario: "Excelente curso!"
    }
];

router.get("/", (req, res) => {
    res.json(feedbacks);
});

module.exports = router;