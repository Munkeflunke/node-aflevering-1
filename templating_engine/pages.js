import { constructPage, readPage } from "./templating_engine.js";

const frontpage = readPage("public/pages/frontpage/frontpage.html");
export const frontpagePage = constructPage(frontpage, {
  tabTitle: "Node.js dokumentation | Forside",
});

const javascript = readPage("public/pages/javascript/javascript.html");
export const javascriptPage = constructPage(javascript, {
  tabTitle: "Node.js dokumentation | JavaScript og datatyper",
});

const nodeExpress = readPage("public/pages/node_express/node_express.html");
export const nodeExpressPage = constructPage(nodeExpress, {
  tabTitle: "Node.js dokumentation | Node.js og npm",
});

const expressHttpUrls = readPage(
  "public/pages/express_http_urls/express_http_urls.html",
);
export const expressHttpUrlsPage = constructPage(expressHttpUrls, {
  tabTitle: "Node.js dokumentation | Express, HTTP og URL'er",
});

const restApi = readPage("public/pages/rest_api/rest_api.html");
export const restApiPage = constructPage(restApi, {
  tabTitle: "Node.js dokumentation | REST API og CRUD",
});

const frontend = readPage("public/pages/frontend/frontend.html");
export const frontendPage = constructPage(frontend, {
  tabTitle: "Node.js dokumentation | Fetch og sikker HTML",
});

const modulesStaticFiles = readPage(
  "public/pages/modules_static_files/modules_static_files.html",
);
export const modulesStaticFilesPage = constructPage(modulesStaticFiles, {
  tabTitle: "Node.js dokumentation | Moduler, konfiguration og filer",
});

const ssr = readPage("public/pages/ssr/ssr.html");
export const ssrPage = constructPage(ssr, {
  tabTitle: "Node.js dokumentation | Server-side rendering",
});
