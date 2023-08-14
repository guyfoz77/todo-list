
import { todoListBuilder, projectListBuilder } from "./domController";
import { activeProjectIndex } from "./domController";

export function pageLoader() {
    projectListBuilder();
    todoListBuilder(activeProjectIndex);
}