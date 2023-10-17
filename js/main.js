const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');

const playNote = (note) => {
    const audio = new Audio(`./sounds/${note}.wav`);
    audio.play();
}

const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'));

    if (key.className.includes('black')) {
        key.classList.add('black--pressed');
        return;
    }

    key.style.background = '#ddd';
}

const handleMouseUp = (key) => {

    if (key.className.includes('black')) {
        key.classList.remove('black--pressed');
        return;
    }

    key.style.background = 'white';
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key))
    key.addEventListener('mouseup', () => handleMouseUp(key))
});

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('disabled-keys');
        return;
    }

    switcher.classList.remove('switcher--active');
    keysSection.classList.add('disabled-keys');
});

const keyDownMapper = {
    "a": () => handleMouseDown(keys[0]),
    "1": () => handleMouseDown(keys[1]),
    "s": () => handleMouseDown(keys[2]),
    "2": () => handleMouseDown(keys[3]),
    "d": () => handleMouseDown(keys[4]),
    "f": () => handleMouseDown(keys[5]),
    "4": () => handleMouseDown(keys[6]),
    "g": () => handleMouseDown(keys[7]),
    "5": () => handleMouseDown(keys[8]),
    "j": () => handleMouseDown(keys[9]),
    "6": () => handleMouseDown(keys[10]),
    "k": () => handleMouseDown(keys[11]),
    "l": () => handleMouseDown(keys[12]),
    "8": () => handleMouseDown(keys[13]),
    "ç": () => handleMouseDown(keys[14]),
}

const keyUpMapper = {
    "a": () => handleMouseUp(keys[0]),
    "1": () => handleMouseUp(keys[1]),
    "s": () => handleMouseUp(keys[2]),
    "2": () => handleMouseUp(keys[3]),
    "d": () => handleMouseUp(keys[4]),
    "f": () => handleMouseUp(keys[5]),
    "4": () => handleMouseUp(keys[6]),
    "g": () => handleMouseUp(keys[7]),
    "5": () => handleMouseUp(keys[8]),
    "j": () => handleMouseUp(keys[9]),
    "6": () => handleMouseUp(keys[10]),
    "k": () => handleMouseUp(keys[11]),
    "l": () => handleMouseUp(keys[12]),
    "8": () => handleMouseUp(keys[13]),
    "ç": () => handleMouseUp(keys[14]),
}

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyDownMapper[event.key]()
});

document.addEventListener('keyup', (event) => {
    keyUpMapper[event.key]()
});