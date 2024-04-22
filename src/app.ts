import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

const projectInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
