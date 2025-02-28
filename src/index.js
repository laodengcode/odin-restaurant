import "./styles.css";
import { home } from "./home.js"
import { menu } from "./menu.js";
import { about } from "./about.js";


home();
const content = document.getElementById("content");
document.getElementById("home").addEventListener('click', (event) => {
    content.innerHTML = "";
    home();
})

document.getElementById("menu").addEventListener('click', (event) => {
    content.innerHTML = '';
    menu();
})

document.getElementById('about').addEventListener('click', (event) => {
    content.innerHTML = '';
    about();
})