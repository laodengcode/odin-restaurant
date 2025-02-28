import chickenImage from "./img/chicken.png";

export const home = () => {
    const content = document.getElementById("content");
    let hero = document.createElement('div');
    hero.classList.add('hero');

    let header = document.createElement('h1');
    header.textContent = "Delicious in Dungeon";
    let description = document.createElement('p');
    description.textContent = "You have no idea what you are eating. These ultimate dishes were only availabe in Dungeon and NOW you can enjoy them here!";
    let example = document.createElement('img');
    example.alt = "chicken";
    example.src = chickenImage;

    hero.append(header, description, example);
    content.appendChild(hero);
};

