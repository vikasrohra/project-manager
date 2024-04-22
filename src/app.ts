import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";
import _ from 'lodash';

const projectInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");


console.log(_.shuffle([1, 2, 3]));
