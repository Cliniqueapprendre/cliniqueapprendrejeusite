/* function pour verifier ou est l'utilisateur */

export function checkOption(color, location) {
    let newOptions = document.querySelectorAll('.option');
    newOptions.forEach((el, index) => {
        if (index == location) {
            el.style.backgroundColor = color;
        } else {
            el.style.backgroundColor = '';
        }
    });
}