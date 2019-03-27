import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
/*
npm install --save source-map-explorer
npm run build
npm run deploy

git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/emvlad/vlad-web.git
git push -u origin master
*/
