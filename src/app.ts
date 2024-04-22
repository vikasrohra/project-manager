import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

const projectInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
