let infoText = ``;

function omMeg() {

    //HVIS infortekst ER tom når du trykker - legg inn tekst
    if (infoText == ``) {
        infoText = `<div id="color" class="text">Skjer, Casper her. Er 22 år og liker å streame og game.<br>
          På vintrer elsker jeg å stå på snowboard.<br>
          Favoritt maten min er Sushi og favoritt drikken min er enten vann eller isTe.<br>
          Favoritt filmer er Star Wars 4-5-6 og noen Marvel filmer.</div>`;
    }

    //HVIS infotekst IKKE ER tom (altså at det er tekst) - så ta den bort :D   
    else if (infoText != ``) {
        infoText = ``;
    }
    else { console.log("error happened") }

    document.getElementById('INFO').innerHTML = infoText;
    document.getElementById('INFO').style.color = "yellow"

}

let infoBilde = ``;

function Bilde() {
    if (infoBilde == ``) {
        infoBilde = `<img src="Meg.png" class="img">`;
    }
    else if (infoBilde != ``) {
        infoBilde = ``;
    } else { console.log("error happened") }

    document.getElementById('INFO').innerHTML = infoBilde
}

function fargeText() {
    // document.getElementsByClassName('text').style.color = "red"
    if (document.getElementById('color').classList.contains('newNewColor')) {
        document.getElementById('color').classList.remove('newNewColor')
    }
    else {
        document.getElementById('color').classList.add('newNewColor')
    }
}