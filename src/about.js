export const about = () => {
    const content = document.getElementById('content');

    let container = document.createElement('div');
    container.classList.add('about');

    let title = document.createElement('h1');
    title.textContent = 'All about us';

    let intro = document.createElement('p');
    intro.textContent = 'We are adventurers in dungeon. We are foodie in dungeon. We love dungeon dishes!'
    container.append(title, intro);


    content.appendChild(container);
}