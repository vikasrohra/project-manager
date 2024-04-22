namespace App {
  // Project State Menagement
  type Listener<T> = (items: T[]) => void;

  class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listenerFn: Listener<T>) {
      this.listeners.push(listenerFn);
    }
  }

  export class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
      super();
    }

    static getInstance() {
      if (this.instance) {
        return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
    }

    addProject(title: string, description: string, noOfPeople: number) {
      const project = new Project(
        Math.random().toString(),
        title,
        description,
        noOfPeople,
        ProjectStatus.Active
      );
      this.projects.push(project);
      this.updateListeners();
    }

    moveProject(projectId: string, newStatus: ProjectStatus) {
      const project = this.projects.find((prj) => prj.id === projectId);
      if (project && project.status !== newStatus) {
        project.status = newStatus;
        this.updateListeners();
      }
    }

    private updateListeners() {
      for (const listenerFn of this.listeners) {
        // This will trigger the project list class that somthing is updated in the projects
        listenerFn(this.projects.slice()); // Return the brand new copy of the projects
      }
    }
  }

  // Global variable can be used anywhere in the file
  export const projectState = ProjectState.getInstance();
}
