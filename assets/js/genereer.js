let ArrayFeiten = ["De bossen zijn gelegen nabij de wijk Kamershoek!"," Tot in 18e eeuw was het een groot en uitgestrekt bos, vanop de Kouter in Zele tot diep in Overmere.","Het bos kent een Mountainbike-parcours.","Befaamde bewoners van het Gratiebossen waren de bende van Jan Praet, overdag huis aan huis verkopers en 's nachts pleegden ze overvallen op een huis waar ze overdag waren geweest. Men overviel ook voorbijgangers in het bos. De naam van het bos dateert uit deze periode, de rovers beroofden de voorbijgangers namelijk zonder gratie."
,"Naast het bos is er ook de gelijknamige straat, een zijstraat van Kamershoek, die voor het bos ligt.","De Gratiebossen zijn officieel herkend als nationaal bos.","Er zijn meerdere wandelroutes beschikbaar!",
"Via de Gratiebossen kan je aansluitend de Eendenkooi betreden","Via de Nieuwdonk kan je gemakkelijk terug de Gratiebossen in.", "In de Gratiebossen wordt heel veel maïs gezaaid en geteeld.",""];

const randomWaarde = function(){
    return Math.floor(Math.random()*ArrayFeiten.length);
}

const knopje = document.getElementById("genereer");
const tekstvak = document.getElementById("feitje");

knopje.onclick = function(){
    let randomGetal = randomWaarde();
    //console.log(randomGetal);
    tekstvak.innerText = ArrayFeiten[randomGetal];
}

//voor images over te gaan
const image = document.getElementById("randomImage");
let nummerPic = 1;
const volgende = function(){
    if(nummerPic!==42){
    nummerPic += 1;
    image.src = `images/pic${nummerPic}.jpeg`;
}else{
    image.src = `images/pic${nummerPic}.jpeg`;
}
}
const vorige = function(){
    if(nummerPic!==1){
    nummerPic = nummerPic -1;
    image.src = `images/pic${nummerPic}.jpeg`;}
    else{
        image.src = `images/pic${nummerPic}.jpeg`;
    }
}

const knopVorige = document.getElementById('vorige');
const knopVolgende = document.getElementById('volgende');

knopVorige.onclick = function(){
    vorige();
    document.getElementById('counter').innerText = `${nummerPic}/42`;
}
knopVolgende.onclick = function(){
    volgende();
    document.getElementById('counter').innerText = `${nummerPic}/42`;
}

let i = 0;
let txt = 'De Gratiebossen'; /* The text */
let speed = 100; /* The speed/duration of the effect in milliseconds */


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("titel").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = function(){
    typeWriter();
}

// document.getElementById("titel").onmouseover = function(){
//     i=0;
//     document.getElementById("titel").innerText = "";
//     typeWriter();
// }

