import { Draggable } from "../models/drag-drop.js";
import { Component } from "./base-component.js";
import { Project } from "../models/project.js";
import { Autobind } from "../decorators/autobind.js";

// ProjectItem Class
export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  private project: Project;

  get persons() {
    if (this.project.people === 1) {
      return "1 person";
    } else {
      return `${this.project.people} persons`;
    }
  }

  constructor(hostId: string, project: Project) {
    super("single-project", hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  @Autobind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move"; // Cursor will be different based on this
  }

  // If we don't want to use the parameter then we can add _ and if we have multiple such paramereter then we do somthing like this, _, _1, _2 and so on...., because TS will throw an error that these params are not used hence _ is required to tell the TS that we don't want to use them
  dragEndHandler(_: DragEvent) {
    console.log("Dragend");
  }

  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.persons + " assigned";
    this.element.querySelector("p")!.textContent = this.project.description;
  }
}
