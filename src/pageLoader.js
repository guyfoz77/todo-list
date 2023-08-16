
import { todoListBuilder, projectListBuilder, activeProjectIndex } from "./domController";
import { getBrowserStorage } from "./projectStorage";
import { projects } from "./projectStorage";
import { Project } from "./projectManager";

export function pageLoader() {
    getBrowserStorage();
    projectListBuilder();
    todoListBuilder(activeProjectIndex);
}