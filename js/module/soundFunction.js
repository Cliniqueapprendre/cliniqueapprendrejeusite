export function addHidden(element) {
    if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
    }
}
export function removeHidden(element) {
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    }
}

export function checkIfNoSound(number, soundIcon, line) {
    if (volumeSlider.value < number) {
        soundIcon.forEach((el) => {
            el.classList.remove('hidden');
        });
        addHidden(line);
    } else {
        soundIcon.forEach((el) => {
            el.classList.add('hidden');
        });
        removeHidden(line);
    }
}

export function getCurrentVolume(volumeElement) {
    let value = (volumeElement.value / 100);
    return value;
}

/* Change volume level */
export function checkValueVolume(number, element, volumeElement) {
    if (volumeElement < number) {
        addHidden(element);
        console.log('less than ' + number);
    }
    else if (volumeElement >= number) {
        removeHidden(element);
        console.log('more than ' + number);
    }
}

export function createSound(volumeOfSound, srcSound) {
    //'./medias/audio/click-button-app-147358.mp3'
    let newSound = new Audio(`${srcSound}`);
    if (volumeOfSound == null) {
        newSound.volume = 0.5;
    }
    newSound.volume = volumeOfSound;
    return newSound;
}

export function setLocalStorageOFVolume(volume) {
    localStorage.setItem("volumeSound", volume);
}