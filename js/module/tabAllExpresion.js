export const tabAllExpresionValue = [
    {
        expresion: "on",
        partieMotUn: "li",
        partieMotDeux: "on",
        partieMotTroix: "",
        audioSourceExpresion: `./medias/audio/son/on/On.wav`,
        audioSourceMots: `./medias/audio/son/on/Lion.wav`,
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/on/lion.png",
        imgSourceTab: [
            `./medias/img/photojeu/on/lion.png`,
            `./medias/img/photojeu/on/lion02.png`,
            `./medias/img/photojeu/on/lion03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ou",
        partieMotUn: "s",
        partieMotDeux: "ou",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/son/ou/Ou.wav",
        audioSourceMots: "./medias/audio/son/ou/Sou.wav",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ou/sou.png",
        imgSourceTab: [
            `./medias/img/photojeu/ou/sou.png`,
            `./medias/img/photojeu/ou/sou02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "oi",
        partieMotUn: "r",
        partieMotDeux: "oi",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/oi/roi.png",
        imgSourceTab: [
            `./medias/img/photojeu/oi/roi.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "eu",
        partieMotUn: "j",
        partieMotDeux: "eu",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/eu/jeu.png",
        imgSourceTab: [
            `./medias/img/photojeu/eu/jeu.png`,
            `./medias/img/photojeu/eu/jeu02.png`,
            `./medias/img/photojeu/eu/jeu03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "an",
        partieMotUn: "pl",
        partieMotDeux: "an",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/an/plan.png",
        imgSourceTab: [
            `./medias/img/photojeu/an/plan.png`,
            `./medias/img/photojeu/an/plan02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "en",
        partieMotUn: "d",
        partieMotDeux: "en",
        partieMotTroix: "t",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/en/dent.png",
        imgSourceTab: [
            `./medias/img/photojeu/en/dent.png`,
            `./medias/img/photojeu/en/dent02.png`,
            `./medias/img/photojeu/en/dent03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "in",
        partieMotUn: "lap",
        partieMotDeux: "in",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/in/lapin.png",
        imgSourceTab: [
            `./medias/img/photojeu/in/lapin.png`,
            `./medias/img/photojeu/in/lapin02.png`,
            `./medias/img/photojeu/in/lapin03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ui",
        partieMotUn: "n",
        partieMotDeux: "ui",
        partieMotTroix: "t",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ui/nuit.png",
        imgSourceTab: [
            `./medias/img/photojeu/ui/nuit.png`,
            `./medias/img/photojeu/ui/nuit02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "eau",
        partieMotUn: "bat",
        partieMotDeux: "eau",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/eau/bateau.png",
        imgSourceTab: [
            `./medias/img/photojeu/eau/bateau.png`,
            `./medias/img/photojeu/eau/bateau02.png`,
            `./medias/img/photojeu/eau/bateau03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ai",
        partieMotUn: "",
        partieMotDeux: "ai",
        partieMotTroix: "me",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ai/aime.png",
        imgSourceTab: [
            `./medias/img/photojeu/ai/aime.png`,
            `./medias/img/photojeu/ai/aime02.png`,
            `./medias/img/photojeu/ai/aime03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ei",
        partieMotUn: "p",
        partieMotDeux: "ei",
        partieMotTroix: "ne",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ei/peine.png",
        imgSourceTab: [
            `./medias/img/photojeu/ei/peine.png`,
            `./medias/img/photojeu/ei/peine02.png`,
            `./medias/img/photojeu/ei/peine03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "un",
        partieMotUn: "br",
        partieMotDeux: "un",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/un/brun.png",
        imgSourceTab: [
            `./medias/img/photojeu/un/brun.png`,
            `./medias/img/photojeu/un/brun02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "au",
        partieMotUn: "",
        partieMotDeux: "au",
        partieMotTroix: "to",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/au/auto.png",
        imgSourceTab: [
            `./medias/img/photojeu/au/auto.png`,
            `./medias/img/photojeu/au/auto02.png`,
            `./medias/img/photojeu/au/auto03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ein",
        partieMotUn: "p",
        partieMotDeux: "ein",
        partieMotTroix: "ture",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ein/peinture.png",
        imgSourceTab: [
            `./medias/img/photojeu/ein/peinture.png`,
            `./medias/img/photojeu/ein/peinture02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ain",
        partieMotUn: "m",
        partieMotDeux: "ain",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ain/main.png",
        imgSourceTab: [
            `./medias/img/photojeu/ain/main.png`,
            `./medias/img/photojeu/ain/main02.png`,
            `./medias/img/photojeu/ain/main03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "om",
        partieMotUn: "",
        partieMotDeux: "om",
        partieMotTroix: "bre",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/om/ombre.png",
        imgSourceTab: [
            `./medias/img/photojeu/om/ombre.png`,
            `./medias/img/photojeu/om/ombre02.png`,
            `./medias/img/photojeu/om/ombre03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "im",
        partieMotUn: "",
        partieMotDeux: "im",
        partieMotTroix: "portant",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/im/important.png",
        imgSourceTab: [
            `./medias/img/photojeu/im/important.png`,
            `./medias/img/photojeu/im/important02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "am",
        partieMotUn: "",
        partieMotDeux: "am",
        partieMotTroix: "bulance",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/am/ambulance.png",
        imgSourceTab: [
            `./medias/img/photojeu/am/ambulance.png`,
            `./medias/img/photojeu/am/ambulance02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "em",
        partieMotUn: "",
        partieMotDeux: "em",
        partieMotTroix: "baller",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/em/emballer.png",
        imgSourceTab: [
            `./medias/img/photojeu/em/emballer.png`,
            `./medias/img/photojeu/em/emballer02.png`,
            `./medias/img/photojeu/em/emballer03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "tion",
        partieMotUn: "atten",
        partieMotDeux: "tion",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/tion/attention.png",
        imgSourceTab: [
            `./medias/img/photojeu/tion/attention.png`,
            `./medias/img/photojeu/tion/attention02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ph",
        partieMotUn: "",
        partieMotDeux: "ph",
        partieMotTroix: "oto",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ph/photo.png",
        imgSourceTab: [
            `./medias/img/photojeu/ph/photo.png`,
            `./medias/img/photojeu/ph/photo02.png`,
            `./medias/img/photojeu/ph/photo03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "et",
        partieMotUn: "jou",
        partieMotDeux: "et",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/et/jouet.png",
        imgSourceTab: [
            `./medias/img/photojeu/et/jouet.png`,
            `./medias/img/photojeu/et/jouet02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ette",
        partieMotUn: "mouf",
        partieMotDeux: "ette",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ette/moufette.png",
        imgSourceTab: [
            `./medias/img/photojeu/ette/moufette.png`,
            `./medias/img/photojeu/ette/moufette02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "oin",
        partieMotUn: "f",
        partieMotDeux: "oin",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/oin/foin.png",
        imgSourceTab: [
            `./medias/img/photojeu/oin/foin.png`,
            `./medias/img/photojeu/oin/foin02.png`,
            `./medias/img/photojeu/oin/foin03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ez",
        partieMotUn: "n",
        partieMotDeux: "ez",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ez/nez.png",
        imgSourceTab: [
            `./medias/img/photojeu/ez/nez.png`,
            `./medias/img/photojeu/ez/nez02.png`,
            `./medias/img/photojeu/ez/nez03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "er",
        partieMotUn: "jou",
        partieMotDeux: "er",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/er/jouer.png",
        imgSourceTab: [
            `./medias/img/photojeu/er/jouer.png`,
            `./medias/img/photojeu/er/jouer02.png`,
            `./medias/img/photojeu/er/jouer03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ien",
        partieMotUn: "ch",
        partieMotDeux: "ien",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ien/chien.png",
        imgSourceTab: [
            `./medias/img/photojeu/ien/chien.png`,
            `./medias/img/photojeu/ien/chien02.png`,
            `./medias/img/photojeu/ien/chien03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ian",
        partieMotUn: "sour",
        partieMotDeux: "ian",
        partieMotTroix: "t",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ian/souriant.png",
        imgSourceTab: [
            `./medias/img/photojeu/ian/souriant.png`,
            `./medias/img/photojeu/ian/souriant02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "gn",
        partieMotUn: "li",
        partieMotDeux: "gn",
        partieMotTroix: "e",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/gn/ligne.png",
        imgSourceTab: [
            `./medias/img/photojeu/gn/ligne.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "gue",
        partieMotUn: "va",
        partieMotDeux: "gue",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/gue/vague.png",
        imgSourceTab: [
            `./medias/img/photojeu/gue/vague.png`,
            `./medias/img/photojeu/gue/vague02.png`,
            `./medias/img/photojeu/gue/vague03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "gui",
        partieMotUn: "",
        partieMotDeux: "gui",
        partieMotTroix: "mauve",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/gui/guimauve.png",
        imgSourceTab: [
            `./medias/img/photojeu/gui/guimauve.png`,
            `./medias/img/photojeu/gui/guimauve02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ch",
        partieMotUn: "",
        partieMotDeux: "ch",
        partieMotTroix: "ut!",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ch/chut.png",
        imgSourceTab: [
            `./medias/img/photojeu/ch/chut.png`,
            `./medias/img/photojeu/ch/chut02.png`,
            `./medias/img/photojeu/ch/chut03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ca",
        partieMotUn: "",
        partieMotDeux: "caca",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ca/caca.png",
        imgSourceTab: [
            `./medias/img/photojeu/ca/caca.png`,
            `./medias/img/photojeu/ca/caca02.png`,
            `./medias/img/photojeu/ca/caca03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "co",
        partieMotUn: "",
        partieMotDeux: "coco",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/co/coco.png",
        imgSourceTab: [
            `./medias/img/photojeu/co/coco.png`,
            `./medias/img/photojeu/co/coco02.png`,
            `./medias/img/photojeu/co/coco03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "cu",
        partieMotUn: "",
        partieMotDeux: "cu",
        partieMotTroix: "lotte",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/cu/culotte.png",
        imgSourceTab: [
            `./medias/img/photojeu/cu/culotte.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ce",
        partieMotUn: "",
        partieMotDeux: "ce",
        partieMotTroix: "rise",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ce/cerise.png",
        imgSourceTab: [
            `./medias/img/photojeu/ce/cerise.png`,
            `./medias/img/photojeu/ce/cerise02.png`,
            `./medias/img/photojeu/ce/cerise03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ci",
        partieMotUn: "",
        partieMotDeux: "ci",
        partieMotTroix: "tron",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ci/citron.png",
        imgSourceTab: [
            `./medias/img/photojeu/ci/citron.png`,
            `./medias/img/photojeu/ci/citron02.png`,
            `./medias/img/photojeu/ci/citron03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ga",
        partieMotUn: "",
        partieMotDeux: "ga",
        partieMotTroix: "rage",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ga/garage.png",
        imgSourceTab: [
            `./medias/img/photojeu/ga/garage.png`,
            `./medias/img/photojeu/ga/garage02.png`,
            `./medias/img/photojeu/ga/garage03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "go",
        partieMotUn: "",
        partieMotDeux: "go",
        partieMotTroix: "!",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/go/go.png",
        imgSourceTab: [
            `./medias/img/photojeu/go/go.png`,
            `./medias/img/photojeu/go/go02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "gu",
        partieMotUn: "lé",
        partieMotDeux: "gu",
        partieMotTroix: "me",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/gu/legume.png",
        imgSourceTab: [
            `./medias/img/photojeu/gu/legume.png`,
            `./medias/img/photojeu/gu/legume02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            if (val == 'légume') {
                val = 'legume';
            }
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ge",
        partieMotUn: "",
        partieMotDeux: "ge",
        partieMotTroix: "nou",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ge/genou.png",
        imgSourceTab: [
            `./medias/img/photojeu/ge/genou.png`,
            `./medias/img/photojeu/ge/genou02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "gi",
        partieMotUn: "",
        partieMotDeux: "gi",
        partieMotTroix: "rafe",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/gi/girafe.png",
        imgSourceTab: [
            `./medias/img/photojeu/gi/girafe.png`,
            `./medias/img/photojeu/gi/girafe02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "elle",
        partieMotUn: "b",
        partieMotDeux: "elle",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/elle/belle.png",
        imgSourceTab: [
            `./medias/img/photojeu/elle/belle.png`,
            `./medias/img/photojeu/elle/belle02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ille",
        partieMotUn: "f",
        partieMotDeux: "ille",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ille/fille.png",
        imgSourceTab: [
            `./medias/img/photojeu/ille/fille.png`,
            `./medias/img/photojeu/ille/fille02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "aille",
        partieMotUn: "p",
        partieMotDeux: "aille",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/aille/paille.png",
        imgSourceTab: [
            `./medias/img/photojeu/aille/paille.png`,
            `./medias/img/photojeu/aille/paille02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "ouille",
        partieMotUn: "gren",
        partieMotDeux: "ouille",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/ouille/grenouille.png",
        imgSourceTab: [
            `./medias/img/photojeu/ouille/grenouille.png`,
            `./medias/img/photojeu/ouille/grenouille02.png`,
            `./medias/img/photojeu/ouille/grenouille03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "eille",
        partieMotUn: "ab",
        partieMotDeux: "eille",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/eille/abeille.png",
        imgSourceTab: [
            `./medias/img/photojeu/eille/abeille.png`,
            `./medias/img/photojeu/eille/abeille02.png`,
            `./medias/img/photojeu/eille/abeille03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "euille",
        partieMotUn: "f",
        partieMotDeux: "euille",
        partieMotTroix: "",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/euille/feuille.png",
        imgSourceTab: [
            `./medias/img/photojeu/euille/feuille.png`,
            `./medias/img/photojeu/euille/feuille02.png`,
            `./medias/img/photojeu/euille/feuille03.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
    {
        expresion: "qu",
        partieMotUn: "",
        partieMotDeux: "qu",
        partieMotTroix: "atre",
        audioSourceExpresion: "./medias/audio/lego_test-sound.mp3",
        audioSourceMots: "./medias/audio/lego_test-sound.mp3",
        audioVolume: 0.5,
        imgSource: "./medias/img/photojeu/qu/quatre.png",
        imgSourceTab: [
            `./medias/img/photojeu/qu/quatre.png`,
            `./medias/img/photojeu/qu/quatre02.png`
        ],
        audioSrcAll: './medias/audio/son/',
        useAutoSound: true,
        capitalizeFirstLetterSrc(val) {
            let transformVal = String(val).charAt(0).toUpperCase() + String(val).slice(1);
            let link = this.audioSrcAll + this.expresion + '/' + transformVal + '.wav';
            console.log('audio expresion : ', link);
            return link;
        },
    },
];

/* Source of code : https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript*/
/* Start */
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
/* End */