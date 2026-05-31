const express = require("express");
const router = express.Router();

const faq = [
    {
        pergunta: "Tem certificado?",
        resposta: "Sim."
    }
];

router.get("/", (req, res) => {
    res.json(faq);
});

module.exports = router;