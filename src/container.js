// Helper to create containers with class names
export default function createContainer(classAttrArray) {
    const container = document.createElement('div');
    classAttrArray.forEach((element) => container.classList.add(element));
    return container;
}