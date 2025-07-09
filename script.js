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
            bottom: 3px;
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
            font-size: 2vw;
            position: absolute;
            display: flex;
            top: 5%;
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
customElements.define("blank-space", BlankElement);
customElements.define("large-element", LargeElement);


function LoadTable() {
    LoadElements();
}
LoadTable()

const listEl = document.querySelector("ul");
let elementdata = [];


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
                        AddElement(data.elements[ind].symbol, data.elements[ind].name, data.elements[ind].atomic_mass.toFixed(2), ind1);
                        ind1++
                        break;
                    case i > 1 && i < 18:
                        AddBlank()
                        break;
                    case i >= 18 && i < 21:
                        AddElement(data.elements[ind].symbol, data.elements[ind].name, data.elements[ind].atomic_mass.toFixed(2), ind1);
                        ind1++
                        break;
                    case i > 21 && i < 32:
                        AddBlank()
                        break;
                    case i >= 32 && i < 40:
                        AddElement(data.elements[ind].symbol, data.elements[ind].name, data.elements[ind].atomic_mass.toFixed(2), ind1);
                        ind1++
                        break;
                    case i > 40 && i < 51:
                        AddBlank()
                        break;
                    case i >= 51 && i < 129:
                        AddElement(data.elements[ind].symbol, data.elements[ind].name, data.elements[ind].atomic_mass.toFixed(2), ind1);
                        ind1++
                        break;
                    case i >= 129 && i < 132:
                        AddBlank()
                        break;
                    case i >= 132 && i < 146:
                        AddElement(data.elements[ind].symbol, data.elements[ind].name, data.elements[ind].atomic_mass.toFixed(2), ind1);
                        ind1++
                        break;
                    case i >= 146 && i < 150:
                        AddBlank()
                        break;
                    case i >= 150 && i < 164:
                        AddElement(data.elements[ind].symbol, data.elements[ind].name, data.elements[ind].atomic_mass.toFixed(2), ind1);
                        ind1++
                        break;
                }
            }

            CurrIndicator();

        });
}

let tot = 118;
let correct = 0;

let currelementind = 0;
let currelement = "";

let guessbox = document.getElementById("guessbox");
let largeel = document.getElementById("largeel");
let root = largeel.shadowRoot;

let numba = root.querySelector(".div2");
let atmw = root.querySelector(".div3");


function OnTextEntered() {
    let guess = guessbox.value;

    console.log(guess);
    console.log(elementdata);
    if(guess == currelement.name){
        ChangeVisibility(currelementind);

        console.log("Correct!");
        guessbox.value = "";

        currelementind += 1;
        currelement = elementdata[currelementind];

        numba.textContent = currelementind + 1;
        atmw.textContent = elementdata[currelementind].atomic_mass.toFixed(2);

        CurrIndicator();
        RemoveOldIndicator();
    }
}

function AddBlank() {
    listEl.insertAdjacentHTML("beforeend", `<blank-element></blank-element>`);
}

function AddElement(sym, name, weight, ind) {
    listEl.insertAdjacentHTML("beforeend", `<indiv-element id="a${ind}" data-text=${sym} atmno-text=${periodicTableNumbers[ind]} atmweight=${weight} name-text=${name}></indiv-element>`);
}

function ChangeVisibility(ind) {
    let indel = listEl.querySelector("#a" + ind);
    let shadow = indel.shadowRoot;
    let info = shadow.querySelector(".info");

    info.style.color = "rgba(30,30,30,1)";
}

function CurrIndicator() {
    let indel = listEl.querySelector("#a" + currelementind);
    let shadow = indel.shadowRoot;
    let info = shadow.querySelector(".info");
    info.style.borderColor = "rgb(200,200,200)";
    info.style.zIndex = "10"
}

function StopIndicator() {
    let indel = listEl.querySelector("#a" + currelementind);
    let shadow = indel.shadowRoot;
    let info = shadow.querySelector(".info");
    info.style.borderColor = "rgb(255, 118, 118)";
    info.style.zIndex = "10"
}

function RemoveOldIndicator() {
    let indel = listEl.querySelector("#a" + (currelementind - 1));
    let shadow = indel.shadowRoot;
    let info = shadow.querySelector(".info");
    info.style.borderColor = "#323437";
    info.style.zIndex = "3"
}