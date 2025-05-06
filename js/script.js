const tabAllOption = [
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
isMusicStarted = false;
const btnFullScreen = document.querySelector('.btnFull');
isFullScreenOn = false;
const btnDownlad = document.querySelector('.btnDownload');

/* Aller en "fullScreen" */
btnFullScreen.addEventListener('click', () => {
    activateAndDeactivateFullScreen(btnFullScreen);
    console.log('state bool : ' + isFullScreenOn);
    let sound = createSound(volumeSound, './medias/audio/click-button-app-147358.mp3');
    sound.play();
});

btnDownlad.addEventListener('click', () => {
    let sound = createSound(volumeSound, './medias/audio/click-button-app-147358.mp3');
    sound.play();
});

/* function pour aller en "fullScreen" */
function activateAndDeactivateFullScreen(element) {
    if (isFullScreenOn == false) {
        // get out full screen
        btnFullScreen.style.backgroundImage = 'url(medias/img/medias_ui/modefenetre.png)';
        isFullScreenOn = true;
        document.documentElement.requestFullscreen().catch((err) => {
            alert(`Écheque d'aller en plein écran: ${err.message} (${err.name})`);
            console.log(`Écheque d'aller en plein écran: ${err.message} (${err.name})`);
        });
        console.log('Full Screen : ' + isFullScreenOn);
        
    } else if (isFullScreenOn == true) {
        // full screen
        btnFullScreen.style.backgroundImage = 'url(medias/img/medias_ui/pleinecran.png)';
        document.exitFullscreen();
        isFullScreenOn = false;
        console.log('Full Screen : ' + isFullScreenOn);
    }
}

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
checkIfNoSound(5);

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
    
    checkIfNoSound(5);

    setLocalStorageOFVolume(volumeSlider.value);

    let sound = createSound(volumeSound, './medias/audio/click-button-app-147358.mp3');
    sound.play();

    if (volumeSound > 0.2) {
        music.volume = (volumeSound - 0.2);
    } else {
        music.volume = volumeSound;
    }
    
});

function checkIfNoSound(number) {
    if (volumeSlider.value < number) {
        noSoundIcon.forEach((el) => {
            el.classList.remove('hidden');
        });
        addHidden(firstLine);
    } else {
        noSoundIcon.forEach((el) => {
            el.classList.add('hidden');
        });
        removeHidden(firstLine);
    }
}

function currentVolume(volumeElement) {
    let value = (volumeElement.value / 100);
    return value;
}

/* Change volume level */
function checkValueVolume(number, element, volumeElement) {
    if (volumeElement < number) {
        addHidden(element);
        console.log('less than ' + number);
    }
    else if (volumeElement >= number) {
        removeHidden(element);
        console.log('more than ' + number);
    }
}

/* Functions : */
function createSound(volumeOfSound, srcSound) {
    //'./medias/audio/click-button-app-147358.mp3'
    let newSound = new Audio(`${srcSound}`);
    if (volumeSound == null) {
        newSound.volume = 0.5;
    }
    newSound.volume = volumeOfSound;
    return newSound;
}


function setLocalStorageOFLocation(location) {
    localStorage.setItem("whereYouAre", location);
}

function setLocalStorageOFVolume(volume) {
    localStorage.setItem("volumeSound", volume);
}

function clearProgress() {
    localStorage.clear();
}

function addHidden(element) {
    if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
    }
}
function removeHidden(element) {
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    }
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
            checkOption('#2a4c44');
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

/* Va ala possiont de L'option selectionner quand l'utilisateur hover sur le menu pour la rpemière fois */
let menuSide = document.querySelector('.sideMenu');
let HasMouseHoverdMenu = false;
menuSide.addEventListener('mouseover', () => {
    if (HasMouseHoverdMenu == false) {
        HasMouseHoverdMenu = true;
        let val = tabAllOption[whereYouAre].expresion
        document.getElementById(`${val}`).scrollIntoView(true);
    }
})


/*Fuction pour aller a une nouvelle option + son déroulement*/
function restartWithNew(number, btnToContinue) {
    let isAnswerActive = false;
    let isImageBtnActive = false;
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
        <!--<button class="readText">
            Lire (robot)
        </button>-->
    </div>
    <div class="textContent textContent--2">
        <button class="answer hidden"></button>
        <h3 class="textAnswer hidden">${tabAllOption[number].partieMotUn}<em>${tabAllOption[number].partieMotDeux}</em>${tabAllOption[number].partieMotTroix}</h3>
        <button class="audioBtn audioBtn--answer hidden">
            <svg viewBox="0 0 343 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 160.5V106C9 103.239 11.2386 101 14 101H72.8315C74.2149 101 75.5365 100.427 76.4819 99.4168L124.85 47.7419C127.948 44.4312 133.5 46.6241 133.5 51.1587V209.792C133.5 214.194 128.222 216.448 125.042 213.404L76.4501 166.888C75.5195 165.997 74.2809 165.5 72.9926 165.5H14C11.2386 165.5 9 163.261 9 160.5Z" stroke="black" stroke-width="18"/>
                <path d="M171 179C171 179 206 171.45 206 131.712C206 91.9738 171 88 171 88" stroke="black" stroke-width="18" stroke-linecap="round"/>
                <path d="M215 222C215 222 266.5 198.5 266.5 131.5C266.5 64.5 215 40 215 40" stroke="black" stroke-width="18" stroke-linecap="round"/>
                <path d="M260 257C260 257 331.5 221 333 129.5C334.5 38 260 9 260 9" stroke="black" stroke-width="18" stroke-linecap="round"/>
                </svg> 
        </button>
        <!--<button class="readText hidden">
            Lire (robot)
        </button>-->
    </div>
    
    <button class="reward hidden"></button>
    
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
            audioTestOne = new Audio(`${tabAllOption[number].capitalizeFirstLetterSrc(text)}`);
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
            audioTestTwo = new Audio(`${tabAllOption[number].capitalizeFirstLetterSrc(text)}`);
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
        let textAnswer = document.querySelector('.textAnswer');

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
    let sound = createSound(volumeSound, './medias/audio/click-button-app-147358.mp3');
    sound.play();
});