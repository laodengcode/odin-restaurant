import mashroomImag from "./img/mashroom.png";

export const menu = () => {
    const content = document.getElementById('content');

    let container = document.createElement('div');
    container.classList.add("menu");

    let title = document.createElement('h1');
    title.textContent = 'Menu';

    container.append(title);

    content.appendChild(container);

}