import fs from "node:fs";
export function constructPage(page, options) {
  const header = readPage("public/components/header/header.html");
  const footer = readPage("public/components/footer/footer.html");

  return (
    header.replace("{{TAB_TITLE}}", options.tabTitle) +
    page +
    footer
  );
}

export function readPage(filePath) {
  return fs.readFileSync(filePath, "utf-8");
}
