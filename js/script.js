import { tabAllExpresionValue, capitalizeFirstLetterSrcNew } from './module/tabAllExpresion.js';
import { checkIfNoSound, getCurrentVolume, checkValueVolume, createSound, addHidden, removeHidden, setLocalStorageOFVolume } from './module/soundFunction.js';
import { checkOption } from './module/menu.js';
import { setLocalStorageOFLocation } from './module/location.js';
import { activateAndDeactivateFullScreen } from './module/fullScreen.js';

const tabAllOption = tabAllExpresionValue;

let whereYouAre;
const nextBtn = document.querySelector('.next');
let numberOfClick = 0;
let numberOfClickSecond = 0;
let defaultRewardAudioVolume = 0.8;
let volumeSound;
const volumeSlider = document.querySelector('#volumeSlider');
const firstLine = document.querySelector('.firstLine');
const secondLine = document.querySelector('.secondLine');
const lastLine = document.querySelector('.lastLine');
const noSoundIcon = document.querySelectorAll('.noSoundIcon');
const btnMusic = document.querySelector('.btnMusic');
const music = new Audio('./medias/audio/background_noise_natures_birds_v03.wav');
let isMusicStarted = false;
const btnFullScreen = document.querySelector('.btnFull');
const btnDownlad = document.querySelector('.btnDownload');

const doc = document;

/* Aller en "fullScreen" */
btnFullScreen.addEventListener('click', () => {
    activateAndDeactivateFullScreen(btnFullScreen, document.documentElement, doc);
    let sound = createSound(volumeSound, './medias/audio/click-button-app-147358.mp3');
    sound.play();
});


/* Son btn download */
btnDownlad.addEventListener('click', () => {
    let sound = createSound(volumeSound, './medias/audio/click-button-app-147358.mp3');
    sound.play();
});

/* Check old volume */
if (localStorage.getItem('volumeSound') != null) {
    let valueVolumeStorage = localStorage.getItem('volumeSound');
    volumeSlider.value = valueVolumeStorage;
    volumeSound = (valueVolumeStorage / 100);
    console.log(volumeSlider.value);
    console.log(volumeSound);

    if (volumeSound < 0.06) {
        volumeSound = 0;
    }
} else {
    volumeSound = 0.5;
    volumeSlider.value = 50;
}

checkValueVolume(76, lastLine, volumeSlider.value);
checkValueVolume(46, secondLine, volumeSlider.value);
checkValueVolume(5, firstLine, volumeSlider.value);
checkIfNoSound(5, noSoundIcon, firstLine);
/* Fin Check old volume */

/* Click btn music */
btnMusic.addEventListener('click', () => {
    if (volumeSound == null) {
        volumeSound = 0.5;
    }
    else if (volumeSound > 0.2) {
        music.volume = (volumeSound - 0.2);
    } else {
        music.volume = volumeSound;
    }
    music.loop = true;
    if (volumeSound == null) {
        music.volume = 0.4;
    }
    if (isMusicStarted != true) {
        // stop music
        btnMusic.style.backgroundImage = 'url(medias/img/medias_ui/nomusique.png)';
        music.play();
        isMusicStarted = true;
    } else {
        // add music
        btnMusic.style.backgroundImage = 'url(medias/img/medias_ui/musique.png)';
        music.pause();
        isMusicStarted = false;
    }
});

/* Change volume with slider */
volumeSlider.addEventListener('change', () => {
    let currentValue = (volumeSlider.value / 100);
    if (currentValue < 0.06) {
        currentValue = 0;
    }
    volumeSound = currentValue;
    console.log(currentValue);

    checkValueVolume(76, lastLine, volumeSlider.value);
    checkValueVolume(46, secondLine, volumeSlider.value);
    
    checkIfNoSound(5, noSoundIcon, firstLine);

    setLocalStorageOFVolume(volumeSlider.value);

    let sound = createSound(volumeSound, './medias/audio/click-button-app-147358.mp3');
    sound.play();

    if (volumeSound > 0.2) {
        music.volume = (volumeSound - 0.2);
    } else {
        music.volume = volumeSound;
    }
    
});

/* --- Menu --- */

const contentMenu = document.querySelector('.contentMenu');

/* Créé les options dans le menu */
tabAllOption.forEach((el) => {
    console.log('test ' + el.expresion);
    contentMenu.innerHTML += `
    <div id="${el.expresion}" class="option">
    ${el.expresion}
    </div>
    `;

    /* Ajoute des évenement au options du menu */
    let options = document.querySelectorAll('.option');
    options.forEach((el, index) => {
        if (index == whereYouAre) {
            el.style.backgroundColor = '#2a4c44';
        }
        el.addEventListener('click', () => {
            whereYouAre = index;
            restartWithNew(index, nextBtn);
            checkOption('#2a4c44', whereYouAre);
            let sound = createSound(volumeSound, './medias/audio/click-button-app-147358.mp3');
            sound.play();
        });
    });
});

/*rempresente a quelle étape l'utilisateur est rendu + localStorage*/
if (localStorage.getItem('whereYouAre') != null) {
    let valueWhereYouAre = localStorage.getItem('whereYouAre');
    whereYouAre = valueWhereYouAre;
    if (tabAllOption[whereYouAre] == null) {
        whereYouAre = 0;
    }
    restartWithNew(whereYouAre, nextBtn);
} else {
    whereYouAre = 0;
    restartWithNew(whereYouAre, nextBtn);
}

/* Va a la possiont de L'option selectionner quand l'utilisateur hover sur le menu pour la rpemière fois */
let menuSide = document.querySelector('.sideMenu');
let HasMouseHoverdMenu = false;
menuSide.addEventListener('mouseover', () => {
    if (HasMouseHoverdMenu == false) {
        HasMouseHoverdMenu = true;
        let val = tabAllOption[whereYouAre].expresion
        document.getElementById(`${val}`).scrollIntoView(true);
    }
});

/* --- Fin Menu --- */


/*Evenement enclancher a chaque click sur le bouton "next"*/
nextBtn.addEventListener('click', () => {
    nextBtn.classList.add('hidden');
    whereYouAre++;
    if (tabAllOption[whereYouAre] != null) {
        /*Va jusqu'au dernier dans les options*/
        restartWithNew(whereYouAre, nextBtn);
    } else {
        /*Recommence du début*/
        whereYouAre = 0;
        restartWithNew(0, nextBtn);
    }
    let sound = createSound(volumeSound, './medias/audio/click-button-app-147358.mp3');
    sound.play();
});


/*Function pour aller a une nouvelle option + son déroulement*/
function restartWithNew(number, btnToContinue) {
    let isAnswerActive = false;
    let isImageBtnActive = false;
    let content = document.querySelector('.content');
    numberOfClick = 0;
    numberOfClickSecond = 0;
    content.innerHTML = `
    <div class="textContent textContent--1">
        <h1>${tabAllOption[number].expresion}</h1>
        <button class="audioBtn"></button> 
        <button class="answer hidden"></button> 
    </div>
    <div class="textContent textContent--2 hidden">
        <h3 class="textAnswer">${tabAllOption[number].partieMotUn}<em>${tabAllOption[number].partieMotDeux}</em>${tabAllOption[number].partieMotTroix}</h3>
        <button class="audioBtn audioBtn--answer hidden">
        </button>
        <button class="reward hidden"></button>
    </div>
    
    <div class="img hidden"></div>
    `;
    let answerBtn = document.querySelector('.answer');
    let rewardBtn = document.querySelector('.reward');
    

    
    /* Bouttons d'audio */
    let newAudioBtn = document.querySelectorAll('.audioBtn');

    newAudioBtn[0].addEventListener('click', () => {
        let audioTestOne;
        if (tabAllOption[number].audioSrcAll != null && tabAllOption[number].useAutoSound == true) {
            let text = tabAllOption[number].expresion;
            let audioLink = capitalizeFirstLetterSrcNew(text, tabAllOption[number].audioSrcAll, tabAllOption[number].expresion, 'wav');
            audioTestOne = new Audio(`${audioLink}`);
            console.log('it is working');

        } else {
            audioTestOne = new Audio(`${tabAllOption[number].audioSourceExpresion}`);
        }
        
        audioTestOne.volume = volumeSound;
        numberOfClick++;
        if (numberOfClick == 1 && isAnswerActive == false) {
            answerBtn.classList.remove('hidden');
            isAnswerActive = true;
        }
        audioTestOne.play();
        console.log('numberOfClick : ' + numberOfClick);
    });
    
    newAudioBtn[1].addEventListener('click', () => {
        let audioTestTwo;
        if (tabAllOption[number].audioSrcAll != null && tabAllOption[number].useAutoSound == true) {
            let text = tabAllOption[number].partieMotUn + tabAllOption[number].partieMotDeux + tabAllOption[number].partieMotTroix;
            let audioLink = capitalizeFirstLetterSrcNew(text, tabAllOption[number].audioSrcAll, tabAllOption[number].expresion, 'wav');
            audioTestTwo = new Audio(`${audioLink}`);
            console.log('it is working');
        } else {
            audioTestTwo = new Audio(`${tabAllOption[number].audioSourceMots}`);
        }
        
        audioTestTwo.volume = volumeSound;
        numberOfClickSecond++;
        if (numberOfClickSecond == 1 && isImageBtnActive == false) {
            rewardBtn.classList.remove('hidden');
            isImageBtnActive = true;
        }
        audioTestTwo.play();
        console.log('numberOfClickSecond : ' + numberOfClickSecond);
    });

    /* Boutton réponse (mot) */
    answerBtn.addEventListener('click', () => {
        let textAnswer = document.querySelector('.textContent--2');

        textAnswer.classList.remove('hidden');
        newAudioBtn[1].classList.remove('hidden');
        /* (Btn robot 2)
        readText[1].classList.remove('hidden');
        */
        answerBtn.classList.add('hidden');

        let sound = createSound(volumeSound, './medias/audio/click-button-app-147358.mp3');
        sound.play();
    });
    
    /* Boutton récompense */
    rewardBtn.addEventListener('click', () => {
        let audioReward = new Audio('./medias/audio/click-124467.mp3');
        if (volumeSlider.value == 50) {
            audioReward.volume = defaultRewardAudioVolume;
        } else {
            audioReward.volume = volumeSound;
        }
        
        audioReward.play();

        let img = document.querySelector('.img');
        rewardBtn.classList.add('hidden');
        let textContent = document.querySelectorAll('.textContent');
        textContent.forEach((el) => {
            el.classList.add('hidden');
        });

        let imgSrc = document.querySelector('.img');
        if (tabAllOption[number].imgSourceTab != null) {
            let random = Math.round(Math.random() * (tabAllOption[number].imgSourceTab.length - 1));
            imgSrc.style.backgroundImage = `url(${tabAllOption[number].imgSourceTab[random]})`;
            console.log('random img index : ', random, '| source : ', tabAllOption[number].imgSourceTab[random]);
        } else {
            imgSrc.style.backgroundImage = `url(${tabAllOption[number].imgSource})`;
        }
        
        img.classList.remove('hidden');

        btnToContinue.classList.remove('hidden');
    });

    checkOption('#2a4c44', whereYouAre);
    setLocalStorageOFLocation(number);
}