const tmDElectrons = {
  21: 1, 22: 2, 23: 3,  24: 5, 25: 5,
  26: 6, 27: 7, 28: 8, 29: 10, 30: 10,

  39: 1,  40: 2, 41: 4, 42: 5, 43: 5,
  44: 7, 45: 8, 46: 10, 47: 10, 48: 10,

  57: 1, 72: 2, 73: 3, 74: 4,  75: 5,
  76: 6, 77: 7, 78: 9, 79: 10, 80: 10,

  89: 1, 104: 2, 105: 3, 106: 4, 107: 5,
 108: 6, 109: 7, 110: 8, 111: 10, 112: 10
};

const isRadioactive = {
  1: false,  2: false,  3: false,  4: false,  5: false,  6: false,  7: false,  8: false,
  9: false, 10: false, 11: false, 12: false, 13: false, 14: false, 15: false, 16: false,
 17: false, 18: false, 19: false, 20: false, 21: false, 22: false, 23: false, 24: false,
 25: false, 26: false, 27: false, 28: false, 29: false, 30: false, 31: false, 32: false,
 33: false, 34: false, 35: false, 36: false, 37: false, 38: false, 39: false, 40: false,
 41: false, 42: false, 43: true,  44: false, 45: false, 46: false, 47: false, 48: false,
 49: false, 50: false, 51: false, 52: false, 53: false, 54: false, 55: false,  56: false,
 57: false, 58: false, 59: false, 60: false, 61: true,  62: false, 63: false, 64: false,
 65: false, 66: false, 67: false, 68: false, 69: false, 70: false, 71: false, 72: false,
 73: false, 74: false, 75: false, 76: false, 77: false, 78: false, 79: false, 80: false,
 81: false, 82: false, 83: false, 84: true,  85: true,  86: true,  87: true,  88: true,
 89: true,  90: true,  91: true,  92: true,  93: true,  94: true,  95: true,  96: true,
 97: true,  98: true,  99: true, 100: true, 101: true, 102: true, 103: true, 104: true,
105: true, 106: true, 107: true, 108: true, 109: true, 110: true, 111: true, 112: true,
113: true, 114: true, 115: true, 116: true, 117: true, 118: true
};

const periodicTableNumbers = [
  // Main periodic table without lanthanides and actinides
  1, 2,                          // H, He
  3, 4,                          // Li, Be
  5, 6, 7, 8, 9, 10,             // B to Ne
  11, 12,                        // Na, Mg
  13, 14, 15, 16, 17, 18,        // Al to Ar
  19, 20,                        // K, Ca
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, // Sc to Zn
  31, 32, 33, 34, 35, 36,        // Ga to Kr
  37, 38,                        // Rb, Sr
  39, 40, 41, 42, 43, 44, 45, 46, 47, 48, // Y to Cd
  49, 50, 51, 52, 53, 54,        // In to Xe
  55, 56, 57,                       // Cs, Ba
  72, 73, 74, 75, 76, 77, 78, 79, 80, // Hf to Hg
  81, 82, 83, 84, 85, 86,        // Tl to Rn
  87, 88, 89,                      // Fr, Ra
  104, 105, 106, 107, 108, 109, 110, 111, 112,
  113, 114, 115, 116, 117, 118,  // Nh to Og

  // Lanthanides (57–71)
  58, 59, 60, 61, 62, 63, 64,
  65, 66, 67, 68, 69, 70, 71,

  // Actinides (89–103)
  90, 91, 92, 93, 94, 95, 96,
  97, 98, 99, 100, 101, 102, 103
];

class IndivElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});

        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");

        const text = this.getAttribute("data-text");

        const info = document.createElement("span");
        info.setAttribute("class", "info");

        info.textContent = text;

        const text2 = this.getAttribute("name-text");

        const text1 = document.createElement("div");
        text1.setAttribute("class", "div1");

        text1.textContent = text2

        let atmno = this.getAttribute("atmno-text");

        const text3 = document.createElement("div");
        text3.setAttribute("class", "div2");
        text3.textContent = atmno;

        const atmweight = this.getAttribute("atmweight");

        const text4 = document.createElement("div");
        text4.setAttribute("class", "div3");
        text4.textContent = atmweight;


        let textsize = "";

        if(text2.length < 9) {
            textsize = "0.52vw";
        } else {
            textsize = "0.42vw";
        }

        const style = document.createElement("style");

        style.textContent = `
        .wrapper {
            position: relative;
        }

        .info {
            font-family: Arial, sans-serif;
            text-align: center;
            font-size: 1.25vw;
            margin: 0 auto;
            width: 2.45vw;
            height: 2.45vw;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid black;
            padding: 0px;
            background: dimgrey;
            border-radius: 0;
            opacity: 1;
            position: absolute;
            border-color: #323437;
            text-color: rgb(27, 27, 27);
            z-index: 3;
            color: rgba(0, 0, 0, 0);
        }

        .div1 {
            font-family: Arial, sans-serif;
            font-size: ${textsize};
            z-index: 5;
            position: absolute;
            bottom: 0px;
        }

        .div2 {
            font-family: Arial, sans-serif;
            font-size: 0.5vw;
            position: absolute;
            display: flex;
            top: 5%;
            left: 7.5%;
        }
        
        .div3 {
            font-family: Arial, sans-serif;
            font-size: 0.4vw;
            position: absolute;
            display: flex;
            top: 8%;
            right: 7.5%;
        }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(info);
        info.appendChild(text1);
        info.appendChild(text3);
        info.appendChild(text4);

    }
}

class radIndivElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});

        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");

        const text = this.getAttribute("data-text");

        const info = document.createElement("span");
        info.setAttribute("class", "info");

        info.textContent = text;

        const text2 = this.getAttribute("name-text");

        const text1 = document.createElement("div");
        text1.setAttribute("class", "div1");

        text1.textContent = text2

        let atmno = this.getAttribute("atmno-text");

        const text3 = document.createElement("div");
        text3.setAttribute("class", "div2");
        text3.textContent = atmno;

        const atmweight = this.getAttribute("atmweight");

        const text4 = document.createElement("div");
        text4.setAttribute("class", "div3");
        text4.textContent = atmweight;

        const imgdiv = document.createElement("div");
        imgdiv.setAttribute("class", "div4");

        let textsize = "";

        if(text2.length < 9) {
            textsize = "0.52vw";
        } else {
            textsize = "0.42vw";
        }

        const style = document.createElement("style");

        style.textContent = `
        .wrapper {
            position: relative;
        }

        .info {
            font-family: Arial, sans-serif;
            text-align: center;
            font-size: 1.25vw;
            margin: 0 auto;
            width: 2.45vw;
            height: 2.45vw;
            display: flex;
            text-indent: 2px;
            justify-content: left;
            align-items: center;
            border: 1px solid black;
            padding: 0px;
            background: dimgrey;
            border-radius: 0;
            opacity: 1;
            position: absolute;
            border-color: #323437;
            text-color: rgb(27, 27, 27);
            z-index: 3;
            color: rgba(0, 0, 0, 0);
        }

        .div1 {
            font-family: Arial, sans-serif;
            font-size: ${textsize};
            z-index: 5;
            position: absolute;
            bottom: 0px;
        }

        .div2 {
            font-family: Arial, sans-serif;
            font-size: 0.5vw;
            position: absolute;
            display: flex;
            top: 5%;
            left: 0%;
        }
        
        .div3 {
            font-family: Arial, sans-serif;
            font-size: 0.4vw;
            position: absolute;
            display: flex;
            top: 8%;
            right: 7.5%;
        }

        .div4 {
            width: 25%;
            height: 25%;
            position: absolute;
            right: 2.5%;
            animation: rotation 15s infinite linear;
            background-image: url(ra.png);
            background-size: cover;
        }

        @keyframes rotation {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(359deg);
            }
        }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(info);
        info.appendChild(text1);
        info.appendChild(text3);
        info.appendChild(text4);
        info.appendChild(imgdiv);

    }
}

class BlankElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});

        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");

        const info = document.createElement("span");
        info.setAttribute("class", "info");

        const style = document.createElement("style");

        style.textContent = `
        .wrapper {
            position: relative;
        }

        .info {
            font-family: Arial, sans-serif;
            text-align: center;
            font-size: 1.25vw;
            margin: 0 auto;
            width: 2.45vw;
            height: 2.45vw;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 0px;
            padding: 0px;
            background: white;
            border-radius: 0;
            opacity: 1;
            position: absolute;
            z-index: 3;
        }`;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(info);
        info.appendChild(text1);
    }
}

class LargeElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});

        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");

        const text = this.getAttribute("data-text");

        const info = document.createElement("span");
        info.setAttribute("class", "info");

        //info.textContent = text;

        const text2 = this.getAttribute("atmno-text");

        const text1 = document.createElement("div");
        text1.setAttribute("class", "div1");
        text1.textContent = text2

        const text3 = document.createElement("div");
        text3.setAttribute("class", "div2");
        text3.textContent = text;

        const atmweight = this.getAttribute("atmweight");

        const text4 = document.createElement("div");
        text4.setAttribute("class", "div3");
        text4.textContent = text;

        const style = document.createElement("style");

        style.textContent = `
        .wrapper {
            position: relative;
        }

        .info {
            font-family: Arial, sans-serif;
            color:rgb(50, 50, 50);
            font-size: 1.25vw;
            margin: 0px auto;
            width: 10vw;
            height: 10vw;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid black;
            padding: 0px;
            background: dimgrey;
            position: relative;
            opacity: 1;
            z-index: 3;
        }

        .div1 {
            font-family: Arial, sans-serif;
            font-size: 5vw;
            position: absolute;
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
        }
        
        .div2 {
            font-family: Arial, sans-serif;
            font-size: 2vw;
            position: absolute;
            display: flex;
            top: 5%;
            left: 7.5%;
        }

        .div3 {
            font-family: Arial, sans-serif;
            font-size: 1.25vw;
            position: absolute;
            display: flex;
            top: 7.5%;
            right: 7.5%;
        }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(info);
        info.appendChild(text1);
        info.appendChild(text3);
        info.appendChild(text4);
    }
}

customElements.define("indiv-element", IndivElement);
customElements.define("indiv-element-rad", radIndivElement);
customElements.define("blank-space", BlankElement);
customElements.define("large-element", LargeElement);


function LoadTable() {
    LoadElements();
}
LoadTable()

const listEl = document.querySelector("ul");
const guessCntr = document.querySelector(".guesses");
const tmguessCntr = document.querySelector(".tmguesses");
const timerHTML = document.querySelector(".timer");

let elementdata = [];

let time = 0;
var interval;
var start;

const pad = (n, z = 2) => n.toString().padStart(z, '0');

function UpdateTimer() {
    timerHTML.textContent = pad(Math.floor((time / 60000)).toFixed(0)) + ":" + pad(Math.floor((time / 1000) % 60).toFixed(0)) + ":" + pad(Math.floor((time % 1000) / 10).toFixed(0));
}

function LoadElements() {
    fetch('./PeriodicTableJSON.json')
        .then(res => res.json())
        .then(data => {

            elementdata = Array.from(data.elements);
            currelement = elementdata[currelementind];

            let ind1 = 0; 
            for(let i = 1; i <= 18*9 + 1; ++i) {
                let ind = periodicTableNumbers[ind1] - 1;
                switch(true) {
                    case i == 1: 
                        AddElement(data.elements[ind].symbol, data.elements[ind].name, data.elements[ind].atomic_mass.toFixed(2), data.elements[ind].number, ind1);
                        ind1++
                        break;
                    case i > 1 && i < 18:
                        AddBlank()
                        break;
                    case i >= 18 && i < 21:
                        AddElement(data.elements[ind].symbol, data.elements[ind].name, data.elements[ind].atomic_mass.toFixed(2), data.elements[ind].number, ind1);
                        ind1++
                        break;
                    case i > 21 && i < 32:
                        AddBlank()
                        break;
                    case i >= 32 && i < 40:
                        AddElement(data.elements[ind].symbol, data.elements[ind].name, data.elements[ind].atomic_mass.toFixed(2), data.elements[ind].number, ind1);
                        ind1++
                        break;
                    case i > 40 && i < 51:
                        AddBlank()
                        break;
                    case i >= 51 && i < 129:
                        AddElement(data.elements[ind].symbol, data.elements[ind].name, data.elements[ind].atomic_mass.toFixed(2), data.elements[ind].number, ind1);
                        ind1++
                        break;
                    case i >= 129 && i < 132:
                        AddBlank()
                        break;
                    case i >= 132 && i < 146:
                        AddElement(data.elements[ind].symbol, data.elements[ind].name, data.elements[ind].atomic_mass.toFixed(2), data.elements[ind].number, ind1);
                        ind1++
                        break;
                    case i >= 146 && i < 150:
                        AddBlank()
                        break;
                    case i >= 150 && i < 164:
                        AddElement(data.elements[ind].symbol, data.elements[ind].name, data.elements[ind].atomic_mass.toFixed(2), data.elements[ind].number, ind1);
                        ind1++
                        break;
                }
            }

            CurrIndicator();

        });
}

let tot = 0;
let correct = 0;

let delcorrect = 0;
let deltot = 0;

let currwrong = false;
let currtmguessed = false;

let currelementind = 0;
let currelement = "";
let isTM = false;

let guessbox = document.getElementById("guessbox");
let guessbox2 = document.getElementById("guessbox2");

let largeel = document.getElementById("largeel");
let root = largeel.shadowRoot;

let numba = root.querySelector(".div2");
let atmw = root.querySelector(".div3");

let timerstarted = false;

guessbox.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        OnTextEntered();
    }
});

guessbox2.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        OnTextEntered();
    }
});

function OnTextEntered() {
    if(!isTM) {
        WinChk();
    } else {
        tmWinChk();
    }
}

function tmWinChk(){
    let guess = guessbox2.value;

    if(guess == tmDElectrons[currelement.number] && !currtmguessed){
        delcorrect+=1;
        deltot+=1;
        currtmguessed = true;
    } else if (!currtmguessed){
        deltot+=1;
        currtmguessed = true;
    }

    tmguessCntr.textContent = delcorrect + "/" + deltot;

    WinChk();
}

function WinChk() {
    let guess = guessbox.value;

    console.log(guess);
    console.log(elementdata);

    if(!timerstarted) {
        start = Date.now();
        interval = setInterval(function() {
            time = Date.now() - start; 
            UpdateTimer();
        }, 10);

        timerstarted = true;
    }

    if(guess.toLowerCase() == currelement.name.toLowerCase()){
        ChangeVisibility(currelementind);

        guessbox.value = "";
        guessbox2.value = "";


        currelementind += 1; 
        if(currelementind == 118) {
            clearInterval(interval);
        }

        currelement = elementdata[currelementind];

        if(currelement.number in tmDElectrons) {
            isTM = true;
            guessbox2.disabled = false;
        } else {
            isTM = false;
            guessbox2.disabled = true;
        }

        numba.textContent = currelementind + 1;
        atmw.textContent = elementdata[currelementind].atomic_mass.toFixed(2);

        if(!currwrong){
            correct += 1;
            tot += 1;
        }

        if(currtmguessed) {
            currtmguessed = false;
        }

        guessCntr.textContent = correct + "/" + tot;

        CurrIndicator();
        RemoveOldIndicator();

        currwrong = false;
    } else {
        if(!currwrong){
            tot += 1;
        }

        WrongIndicator();
    }
}

function AddBlank() {
    listEl.insertAdjacentHTML("beforeend", `<blank-element></blank-element>`);
}

function AddElement(sym, name, weight, num, ind) {
    if(isRadioactive[periodicTableNumbers[ind]]) {
        listEl.insertAdjacentHTML("beforeend", `<indiv-element-rad id="a${num}" data-text=${sym} atmno-text=${periodicTableNumbers[ind]} atmweight=${weight} name-text=${name}></indiv-element-rad>`);
    } else {
        listEl.insertAdjacentHTML("beforeend", `<indiv-element id="a${num}" data-text=${sym} atmno-text=${periodicTableNumbers[ind]} atmweight=${weight} name-text=${name}></indiv-element>`);    
    }
}

function ChangeVisibility(ind) {
    let indel = listEl.querySelector("#a" + (currelementind+1));
    
    let shadow = indel.shadowRoot;
    let info = shadow.querySelector(".info");

    info.style.color = "rgba(30,30,30,1)";
}

function CurrIndicator() {
    let indel = listEl.querySelector("#a" + (currelementind+1));
    let shadow = indel.shadowRoot;
    let info = shadow.querySelector(".info");
    info.style.borderColor = "rgb(200,200,200)";
    info.style.zIndex = "10"
}

function WrongIndicator() {
    let indel = listEl.querySelector("#a" + (currelementind+1));
    let shadow = indel.shadowRoot;
    let info = shadow.querySelector(".info");
    info.style.borderColor = "rgb(255, 118, 118)";
    info.style.zIndex = "11"
    
    currwrong = true;
}

function RemoveOldIndicator() {
    if(currwrong){return;}
    let indel = listEl.querySelector("#a" + (currelementind));
    let shadow = indel.shadowRoot;
    let info = shadow.querySelector(".info");
    info.style.borderColor = "#323437";
    info.style.zIndex = "3"
}