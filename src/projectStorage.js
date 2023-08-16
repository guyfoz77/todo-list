export let projects = [];

export function populateBrowserStorage(projects) {
    window.localStorage.removeItem('projects');
    window.localStorage.setItem('projects', JSON.stringify(projects));
}

export function getBrowserStorage() {
    let stringRetrievedStorage = window.localStorage.getItem('projects');
    let retrievedStorage = JSON.parse(stringRetrievedStorage);
    projects = retrievedStorage
}