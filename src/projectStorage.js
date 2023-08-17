import { Project } from "./projectManager";

export let projects = [];

export function populateBrowserStorage(projects) {
    window.localStorage.removeItem('projects');
    window.localStorage.setItem('projects', JSON.stringify(projects));
}

export function getBrowserStorage() {
    let stringRetrievedStorage = window.localStorage.getItem('projects');
    let retrievedStorage = JSON.parse(stringRetrievedStorage);
    console.log(retrievedStorage);
    let retrievedStorageWithPrototypes = [];
    for (let i = 0; i < retrievedStorage.length; i++) {
        retrievedStorageWithPrototypes.push(new Project(retrievedStorage[i].name, i, retrievedStorage[i].todos)); 
    }
    projects = retrievedStorageWithPrototypes;
}

//there currently exists a bug with the get broweser storage function. The prototypes on the objects in the projects
//array, loaded in from local storage, comes without the prototypes.
//I might need to go through each todo and recreate it using the constructor in order to get it working agian.