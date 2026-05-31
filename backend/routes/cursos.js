const express = require("express");
const router = express.Router();

const cursos = [
    {
        id: 1,
        nome: "Curso de Empreendedorismo",
        preco: 99.90
    }
];

router.get("/", (req, res) => {
    res.json(cursos);
});

module.exports = router;