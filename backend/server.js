const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors());

app.use(express.json());

const cursos = require("./routes/cursos");
const feedbacks = require("./routes/feedbacks");
const faq = require("./routes/faq");

app.use("/cursos", cursos);
app.use("/feedbacks", feedbacks);
app.use("/faq", faq);

app.listen(3000, () => {
    console.log("Servidor rodando");
});