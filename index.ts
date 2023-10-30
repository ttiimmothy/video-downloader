import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
const PORT = 8090;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
