let audioBtn = document.querySelectorAll('.audioBtn');
const answerBtn = document.querySelector('.answer');
const rewardBtn = document.querySelector('.reward');
const nextBtn = document.querySelector('.next');
numberOfClick = 0;
numberOfClickSecond = 0;

audioBtn[0].addEventListener('click', () => {
    let audioTestOne = new Audio('../medias/audio/lego_test-sound.mp3');
    if (numberOfClick >= 2) {
        answerBtn.classList.remove('hidden');
    }
    audioTestOne.play();
    numberOfClick++;
});

audioBtn[1].addEventListener('click', () => {
    let audioTestTwo = new Audio('../medias/audio/lego_test-sound.mp3');
    if (numberOfClickSecond >= 2) {
        rewardBtn.classList.remove('hidden');
    }
    audioTestTwo.play();
    numberOfClickSecond++;
});

answerBtn.addEventListener('click', () => {
    let hidden = document.querySelectorAll('.hidden');
    hidden.forEach((el) => {
        if (!el.classList.contains('reward') && !el.classList.contains('img')) {
            el.classList.remove('hidden');
        }
    });
    answerBtn.classList.add('hidden');
});

rewardBtn.addEventListener('click', () => {
    let img = document.querySelector('.img');
    rewardBtn.classList.add('hidden');
    let textContent = document.querySelectorAll('.textContent');
    textContent.forEach((el) => {
        el.classList.add('hidden');
    });

    img.classList.remove('hidden');
});