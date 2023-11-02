function changeMode (size, weight, transform, background, color) {
    return function () {
        const page = document.querySelector("body");
        page.style.fontSize = size + 'px';
        page.style.fontWeight = weight;
        page.style.textTransform = transform;
        page.style.backgroundColor = background;
        page.style.color = color;
    };
};

function main () {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);

    const spookyBtn = document.createElement("button");
    spookyBtn.textContent = "Spooky";
    spookyBtn.onclick = spooky;
    document.body.appendChild(spookyBtn);

    const darkModeBtn = document.createElement("button");
    darkModeBtn.textContent = "Dark mode";
    darkModeBtn.onclick = darkMode;
    document.body.appendChild(darkModeBtn);

    const screamModeBtn = document.createElement("button");
    screamModeBtn.textContent = "Scream mode";
    screamModeBtn.onclick = screamMode;
    document.body.appendChild(screamModeBtn);
};

main();