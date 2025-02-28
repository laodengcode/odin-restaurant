import mashroomImg from "./img/mashroom.png";
import chickenImg from "./img/chicken.png";
import pizzaImg from './img/pizza.png';

export const menu = () => {
    const content = document.getElementById('content');

    let container = document.createElement('div');
    container.classList.add("menu");

    let title = document.createElement('h1');
    title.textContent = 'Menu';

    let chicken = createDish('Roast Basilisk', chickenImg);
    let pizza = createDish('Man-Eating Plant Tart', pizzaImg);
    let mashroom = createDish('Huge Scorpion and Walking Mushroom Hotpot', mashroomImg);
    container.append(title, mashroom, chicken, pizza);

    content.appendChild(container);

}

function createDish(title, img) {
    let dish = document.createElement('div');
    dish.classList.add('dish');
    let dishTitle = document.createElement('h2');
    dishTitle.textContent = title;
    let image = document.createElement('img');
    image.src = img;
    image.alt = title;

    dish.append(dishTitle, image);
    return dish;
}