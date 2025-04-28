const tabAllOption = [
    {
        expresion: "an",
        partieMotUn: "",
        partieMotDeux: "an",
        partieMotTroix: "s",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/test/annee-v2.jpg",
    },
    {
        expresion: "test",
        partieMotUn: "",
        partieMotDeux: "test",
        partieMotTroix: "s",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
        expresion: "test2",
        partieMotUn: "a",
        partieMotDeux: "test",
        partieMotTroix: "s2",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    },
];

let whereYouAre;
const nextBtn = document.querySelector('.next');
let numberOfClick = 0;
let numberOfClickSecond = 0;
let defaultRewardAudioVolume = 0.8;
let volumeSound;
const volumeSlider = document.querySelector('#volumeSlider');

volumeSlider.addEventListener('change', () => {
    let currentValue = (volumeSlider.value / 100);
    volumeSound = currentValue;
    console.log(currentValue);
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

function setLocalStorageOFLocation(location) {
    localStorage.setItem("whereYouAre", location);
}

function clearProgress() {
    localStorage.clear();
}

/* Menu */
const menu = document.querySelector('.sideMenu');
const contentMenu = document.querySelector('.contentMenu');
const sideMenuCheck = document.querySelector('#sideMenuCheck');
const btnMenu = document.querySelector('.btnMenu');

/* function pour verifier ou est l'utilisateur*/
function checkOption(color) {
    let newOptions = document.querySelectorAll('.option');
    newOptions.forEach((el, index) => {
        if (index == whereYouAre) {
            el.style.backgroundColor = color;
        } else {
            el.style.backgroundColor = '';
        }
    });
}

/* Créé les options dans le menu */
tabAllOption.forEach((el) => {
    console.log('test ' + el.expresion);
    contentMenu.innerHTML += `
    <div class="option">
    ${el.expresion}
    </div>
    `;
});

/* Ajoute des évenement au options du menu */
let options = document.querySelectorAll('.option');
options.forEach((el, index) => {
    if (index == whereYouAre) {
        el.style.backgroundColor = '#2a4c44';
    }
    el.addEventListener('click', () => {
        whereYouAre = index;
        restartWithNew(index, nextBtn);
        checkOption('#2a4c44');
    });
});


/*Fuction pour aller a une nouvelle option + son déroulement*/
function restartWithNew(number, btnToContinue) {
    let content = document.querySelector('.content');
    numberOfClick = 0;
    numberOfClickSecond = 0;
    content.innerHTML = `
    <div class="textContent textContent--1">
        <h1>${tabAllOption[number].expresion}</h1>
        <button class="audioBtn">
            <svg viewBox="0 0 343 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 160.5V106C9 103.239 11.2386 101 14 101H72.8315C74.2149 101 75.5365 100.427 76.4819 99.4168L124.85 47.7419C127.948 44.4312 133.5 46.6241 133.5 51.1587V209.792C133.5 214.194 128.222 216.448 125.042 213.404L76.4501 166.888C75.5195 165.997 74.2809 165.5 72.9926 165.5H14C11.2386 165.5 9 163.261 9 160.5Z" stroke="black" stroke-width="18"/>
                <path d="M171 179C171 179 206 171.45 206 131.712C206 91.9738 171 88 171 88" stroke="black" stroke-width="18" stroke-linecap="round"/>
                <path d="M215 222C215 222 266.5 198.5 266.5 131.5C266.5 64.5 215 40 215 40" stroke="black" stroke-width="18" stroke-linecap="round"/>
                <path d="M260 257C260 257 331.5 221 333 129.5C334.5 38 260 9 260 9" stroke="black" stroke-width="18" stroke-linecap="round"/>
                </svg>                    
        </button>
    </div>
    <div class="textContent textContent--2">
        <button class="answer hidden">Réponse</button>
        <h3 class="hidden">${tabAllOption[number].partieMotUn}<em>${tabAllOption[number].partieMotDeux}</em>${tabAllOption[number].partieMotTroix}</h3>
        <button class="audioBtn hidden">
            <svg viewBox="0 0 343 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 160.5V106C9 103.239 11.2386 101 14 101H72.8315C74.2149 101 75.5365 100.427 76.4819 99.4168L124.85 47.7419C127.948 44.4312 133.5 46.6241 133.5 51.1587V209.792C133.5 214.194 128.222 216.448 125.042 213.404L76.4501 166.888C75.5195 165.997 74.2809 165.5 72.9926 165.5H14C11.2386 165.5 9 163.261 9 160.5Z" stroke="black" stroke-width="18"/>
                <path d="M171 179C171 179 206 171.45 206 131.712C206 91.9738 171 88 171 88" stroke="black" stroke-width="18" stroke-linecap="round"/>
                <path d="M215 222C215 222 266.5 198.5 266.5 131.5C266.5 64.5 215 40 215 40" stroke="black" stroke-width="18" stroke-linecap="round"/>
                <path d="M260 257C260 257 331.5 221 333 129.5C334.5 38 260 9 260 9" stroke="black" stroke-width="18" stroke-linecap="round"/>
                </svg> 
        </button>
    </div>
    
    <button class="reward hidden">Récompense</button>
    
    <div class="img hidden"></div>
    `;
    let answerBtn = document.querySelector('.answer');
    let rewardBtn = document.querySelector('.reward');
    let img = document.querySelector('.img');
    img.style.backgroundImage = `url(${tabAllOption[number].imgSource})`;

    /* Bouttons d'audio */
    let newAudioBtn = document.querySelectorAll('.audioBtn');

    newAudioBtn[0].addEventListener('click', () => {
        let audioTestOne = new Audio(`${tabAllOption[number].audioSourceExpresion}`);
        audioTestOne.volume = tabAllOption[number].audioVolume;
        if (volumeSlider.value != 50) {
            audioTestOne.volume = volumeSound;
        }
        if (numberOfClick >= 2) {
            answerBtn.classList.remove('hidden');
        }
        audioTestOne.play();
        numberOfClick++;
    });
    
    newAudioBtn[1].addEventListener('click', () => {
        let audioTestTwo = new Audio(`${tabAllOption[number].audioSourceMots}`);
        audioTestTwo.volume = tabAllOption[number].audioVolume;
        if (volumeSlider.value != 50) {
            audioTestTwo.volume = volumeSound;
        }
        if (numberOfClickSecond >= 2) {
            rewardBtn.classList.remove('hidden');
        }
        audioTestTwo.play();
        numberOfClickSecond++;
    });

    /* Boutton réponse */
    answerBtn.addEventListener('click', () => {
        let hidden = document.querySelectorAll('.hidden');
        hidden.forEach((el) => {
            if (!el.classList.contains('reward') && !el.classList.contains('img') && !el.classList.contains('next')) {
                el.classList.remove('hidden');
            }
        });
        answerBtn.classList.add('hidden');
    });
    
    /* Boutton récompense */
    rewardBtn.addEventListener('click', () => {
        let audioReward = new Audio('./medias/audio/click-124467.mp3');
        audioReward.volume = defaultRewardAudioVolume;
        if (volumeSlider.value != 50) {
            audioReward.volume = volumeSound;
        }
        audioReward.play();

        let img = document.querySelector('.img');
        rewardBtn.classList.add('hidden');
        let textContent = document.querySelectorAll('.textContent');
        textContent.forEach((el) => {
            el.classList.add('hidden');
        });
    
        img.classList.remove('hidden');

        btnToContinue.classList.remove('hidden');
    });

    checkOption('#2a4c44');
    setLocalStorageOFLocation(number);
}

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
});