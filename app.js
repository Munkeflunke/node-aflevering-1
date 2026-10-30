import express from "express";
import {
  frontpagePage,
  javascriptPage,
  nodeExpressPage,
  expressHttpUrlsPage,
  restApiPage,
  frontendPage,
  modulesStaticFilesPage,
  ssrPage,
} from "./templating_engine/pages.js";

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(frontpagePage);
});

app.get("/javascript", (req, res) => {
  res.send(javascriptPage);
});

app.get("/node-express", (req, res) => {
  res.send(nodeExpressPage);
});

app.get("/express-http-urls", (req, res) => {
  res.send(expressHttpUrlsPage);
});

app.get("/rest-api", (req, res) => {
  res.send(restApiPage);
});

app.get("/frontend", (req, res) => {
  res.send(frontendPage);
});

app.get("/modules-static-files", (req, res) => {
  res.send(modulesStaticFilesPage);
});

app.get("/ssr", (req, res) => {
  res.send(ssrPage);
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log(`Serveren kører på port ${PORT}`);
});


