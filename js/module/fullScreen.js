/* function pour aller en "fullScreen" */
let boolValue = false

export function activateAndDeactivateFullScreen(btn, doc, docTwo) {
    
    if (boolValue == false) {
        btn.style.backgroundImage = 'url(medias/img/medias_ui/modefenetre.png)';
        boolValue = true;
        doc.requestFullscreen().catch((err) => {
            alert(`Écheque d'aller en plein écran: ${err.message} (${err.name})`);
            console.log(`Écheque d'aller en plein écran: ${err.message} (${err.name})`);
        });
        console.log('Full Screen : ' + boolValue);
        
    } else if (boolValue == true) {
        btn.style.backgroundImage = 'url(medias/img/medias_ui/pleinecran.png)';
        docTwo.exitFullscreen();
        boolValue = false;
        console.log('Full Screen : ' + boolValue);
    }
}