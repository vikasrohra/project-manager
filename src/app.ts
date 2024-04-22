/// <reference path="./models/drag-drop.ts" />
/// <reference path="./models/project.ts" />
/// <reference path="./state/project-state.ts" />
/// <reference path="./util/validation.ts" />
/// <reference path="./decorators/autobind.ts" />
/// <reference path="./components/project-input.ts" />
/// <reference path="./components/project-list.ts" />

namespace App {
  const projectInput = new ProjectInput();
  const activePrjList = new ProjectList("active");
  const finishedPrjList = new ProjectList("finished");
}
