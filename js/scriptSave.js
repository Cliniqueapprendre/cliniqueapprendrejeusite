/*
    (Vois Robot)

    let readText = document.querySelectorAll('.readText');

    let voices;

    speechSynthesis.onvoiceschanged = function() {
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
        /* Fr-CA Option : 
        5 - Microsoft Caroline
        6 - Microsoft Claude
        7 - Microsoft Nathalie 
        
    }*/
    /*
    readText[0].addEventListener('click', () => {
        let textToRead = tabAllOption[number].expresion;

        let speech = new SpeechSynthesisUtterance(textToRead);
        speech.lang = "fr-CA";
        speech.volume = volumeSound;
        
        if (window.speechSynthesis.getVoices()[5] != null) {
            speech.voice = window.speechSynthesis.getVoices()[5];
        }
        speechSynthesis.speak(speech);

        if (numberOfClick >= 2 && isAnswerActive == false) {
            answerBtn.classList.remove('hidden');
            isAnswerActive = true;
        }
        numberOfClick++;
        console.log('numberOfClick : ' + numberOfClick);

        let sound = createSound(volumeSound, './medias/audio/click-button-app-147358.mp3');
        if (volumeSound > 0.5) {
            sound.volume = (volumeSound - 0.2);
        }
        sound.playbackRate = 1.8;
        sound.play();
    });

    readText[1].addEventListener('click', () => {
        let textToRead = tabAllOption[number].partieMotUn + tabAllOption[number].partieMotDeux + tabAllOption[number].partieMotTroix;

        let speech = new SpeechSynthesisUtterance(textToRead);
        speech.lang = "fr-CA";
        speech.volume = volumeSound;
        if (window.speechSynthesis.getVoices()[5] != null) {
            speech.voice = window.speechSynthesis.getVoices()[5];
        }
        speechSynthesis.speak(speech);

        if (numberOfClickSecond >= 2 && isImageBtnActive == false) {
            rewardBtn.classList.remove('hidden');
            isImageBtnActive = true;
        }
        numberOfClickSecond++;
        console.log('numberOfClickSecond : ' + numberOfClickSecond);

        let sound = createSound(volumeSound, './medias/audio/click-button-app-147358.mp3');
        sound.playbackRate = 1.8;
        sound.play();
    });
    */

/*
function stopSpeech() {
    speechSynthesis.cancel();
    let sound = createSound(volumeSound, './medias/audio/click-button-app-147358.mp3');
    sound.play();
}
*/