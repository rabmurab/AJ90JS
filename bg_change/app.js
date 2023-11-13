const random = () => Math.floor(Math.random() * 255);

const bgChange = () => `rgb(${random()}, ${random()}, ${random()})`;

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
    event.target.style.backgroundColor = bgChange();
});
