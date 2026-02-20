import { basicInterfaces } from "./interfaces/basicInterfaces";
import { complexInterfaces } from "./interfaces/complexInterfaces";
import { typedClasses } from "./interfaces/typedClasses";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
  <div>
    <h1>TypeScript's Interfaces</h1>
  </div>
`;

basicInterfaces();
complexInterfaces();
typedClasses();
