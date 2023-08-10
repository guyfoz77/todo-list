
export function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function elementBuilder(element, classList, textContent, dataName) {  //element builder copied and modified from previous project.
    const xelement = document.createElement(element);
    if (classList != '') {
        if (typeof classList == 'object') {
            classList.forEach(classLabel => {
                xelement.classList.add(classLabel);
            });
        } else xelement.classList.add(classList);
    }
    if (textContent != '') {
        xelement.value = textContent;
        xelement.textContent = textContent;
    }
    if (dataName != '') xelement.dataset.element = dataName;
    return xelement;
}

export function projectCardBuilder(name) {
    let projectCard = elementBuilder('div', 'projectCard', name, '');
    return projectCard;
}
